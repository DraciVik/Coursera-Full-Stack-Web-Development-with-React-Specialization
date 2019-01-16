"use strict";

var gulp = require("gulp");
let sass = require("gulp-sass");
let browserSync = require("browser-sync");

gulp.task("sass", function() {
  return gulp
    .src("./css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./css/*.scss", ["sass"]);
});

gulp.task("browser-sync", function() {
  let files = ["./*.html", "./css/*.css", "./js/*.js", "./img/*.{png,jpg,gif}"];
  browserSync.init(files, {
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("default", gulp.series("browser-sync", "sass:watch"));

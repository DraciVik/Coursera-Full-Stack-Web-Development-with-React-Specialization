import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <RenderComments dish={dish} />
      </div>
    );
  } else {
    return <div />;
  }
}
function RenderComments({ dish }) {
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit"
  };

  const comments = dish.comments.map(comment => {
    return (
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author} ,{" "}
          {new Intl.DateTimeFormat("en-US", dateOptions).format(
            new Date(Date.parse(comment.date))
          )}
        </p>
      </li>
    );
  });
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      <ul className="list-unstyled">{comments}</ul>
    </div>
  );
}

const DishDetail = props => {
  return (
    <div className="container">
      <RenderDish dish={props.dish} />
    </div>
  );
};

export default DishDetail;

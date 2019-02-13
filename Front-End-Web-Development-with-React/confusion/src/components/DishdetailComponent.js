import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div />;
    }
  }
  renderComments(dish) {
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
            -- {comment.author} ,
            {new Intl.DateTimeFormat("en-US", dateOptions).format(
              new Date(comment.date)
            )}
          </p>
        </li>
      );
    });
    if (dish != null) {
      return comments;
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.selectedDish)}
        </div>
      </div>
    );
  }
}

export default DishDetail;

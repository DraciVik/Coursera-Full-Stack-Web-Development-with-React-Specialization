import React, { Component } from "react";
import { Media } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dateOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: undefined
    };
    const comments = this.props.comments.map(comment => {
      let event = new Date(comment.date);
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author} ,{" "}
            {event.toLocaleTimeString("en-US", dateOptions)}
          </p>
        </li>
      );
    });
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={this.props.image} alt={this.props.name} />
            <CardBody>
              <CardTitle>{this.props.name}</CardTitle>
              <CardText>{this.props.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">{comments}</ul>
        </div>
      </div>
    );
  }
}

export default DishDetail;

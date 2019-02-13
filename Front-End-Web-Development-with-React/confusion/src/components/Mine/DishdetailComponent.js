import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dateOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit"
    };
    const RenderComments = this.props.comments.map(comment => {
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
          <ul className="list-unstyled">{RenderComments}</ul>
        </div>
      </div>
    );
  }
}

export default DishDetail;

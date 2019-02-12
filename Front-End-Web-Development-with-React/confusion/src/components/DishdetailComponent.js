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
          <p>Comments</p>
        </div>
      </div>
    );
  }
}

export default DishDetail;

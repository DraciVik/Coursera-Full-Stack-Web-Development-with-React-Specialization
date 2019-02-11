import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class DishDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg
            width="100%"
            src={this.props.dish.image}
            alt={this.props.name}
          />
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardText>{this.props.dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5" />
        <div className="col-12 m-1 col-md-5" />
      </div>
    );
  }
}

export default DishDetail;

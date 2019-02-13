import React, { Component } from "react";
import DishDetail from "./DishdetailComponent";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <DishDetail
          image={this.state.selectedDish.image}
          name={this.state.selectedDish.name}
          description={this.state.selectedDish.description}
          comments={this.state.selectedDish.comments}
        />
      );
    else return <div />;
  }

  render() {
    const menu = this.props.dishes.map(dish => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-12 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;

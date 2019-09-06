import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {

    const eachPizza = this.props.pizzas.map(pizza => {
      return <Pizza pizza={pizza}
         key={pizza.id}
         editClickHandle={this.props.editClickHandle}
         />
    })

    // console.log(this.props);

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            eachPizza
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;

import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const API = 'http://localhost:3000/pizzas'
class App extends Component {

  state = {
    allPizzas:[],
    editPizza: {},
    vegetarian: null,
    topping:"",
    size: ''
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(pizzas => {
      this.setState({
        allPizzas: pizzas
      })
    })
  }

  editClickHandle = (pizza) => {
    this.setState({
      editPizza: pizza, vegetarian: pizza.vegetarian
    })
  }

  changeVegetarian = () => {
    this.setState({
      vegetarian: !this.state.vegetarian
    })
  }

  handleChange =() => {
    console.log("changed");
  }

  handleSubmit =() => {
    console.log("submitted");
  }

  render() {
    const vegetarian = this.state.vegetarian
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.editPizza}
          vegetarian ={vegetarian}
          changeVegetarian={this.changeVegetarian}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          />


        <PizzaList pizzas={this.state.allPizzas}
          editClickHandle = {this.editClickHandle}
          />
      </Fragment>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state={
    allPizzas: [],
    currentPizza: {
      id: 0,
      topping: "PizzaTopping",
      size: "Small",
      vegetarian: true
      }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzaData => this.setState({
      allPizzas: pizzaData
    }))
  }

  handleEdit =(pizza) =>{
    this.setState({
      currentPizza: {
        id: pizza.id,
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian
      }
    })
  }

  handleChange = (e) =>{
    console.log(e.target.value)
    this.setState({
      currentPizza: {
        ...this.state.currentPizza,
        [e.target.name]: e.target.value
      }
    })
  }

  handleVegetarian = (e) => {
    this.setState({
      currentPizza: 
      {...this.state.currentPizza,
      vegetarian: !this.state.currentPizza.vegetarian}
    })
  }

  handleSubmit = () => {
    const currentPizza = this.state.currentPizza
    fetch(`http://localhost:3000/pizzas/${currentPizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        
        id: currentPizza.id,
        topping: currentPizza.topping,
        size: currentPizza.size,
        vegetarian: currentPizza.vegetarian
        
      })
    })
    .then(res => res.json())
    .then(this.setState({
      allPizzas: [...this.state.allPizzas, currentPizza]
    }))
  }

  render() {
    // console.log(this.state.currentPizza)
    return (
      <Fragment>
        <Header/>
        <PizzaForm currentPizza={this.state.currentPizza} handleChange={this.handleChange} handleVegetarian={this.handleVegetarian} handleSubmit={this.handleSubmit}/>
        <PizzaList allPizzas={this.state.allPizzas} handleEdit={this.handleEdit} />
      </Fragment>
    );
  }
}

export default App;

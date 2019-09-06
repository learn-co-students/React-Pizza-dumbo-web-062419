import React from "react"

class PizzaForm extends React.Component {

  render() {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder= {this.props.pizza.topping ? this.props.pizza.topping : "Pizza Topping"}/>
        </div>
        <div className="col">
          <select placeholder={this.props.pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange ={this.props.changeVegetarian} type="radio" value="Vegetarian" checked={this.props.vegetarian }/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" onChange ={this.props.changeVegetarian} value="Not Vegetarian" checked={!this.props.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.props.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}
}

export default PizzaForm

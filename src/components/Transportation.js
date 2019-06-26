import React, { Component } from 'react';
import PaymentPortal from './PaymentPortal'

class Transportation extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.submitInfo = this.submitInfo.bind(this);
        this.crustType = this.crustType.bind(this);
        this.cheeseAmount = this.cheeseAmount.bind(this);
        this.pizzaToppings = this.pizzaToppings.bind(this);
        this.goToPayment = this.goToPayment.bind(this);

        this.state = {
            transportMethod: "",
            transportSelector:
            <div className="transportSelector">
                <input type="radio"
                    name="transportMethod"
                    value="0"
                    onChange={this.handleClick}/>Pickup
                <input type="radio"
                    name="transportMethod"
                    value="1"
                    onChange={this.handleClick}/>Delivery
            </div>
        }
    }

    handleClick(e) {
        if(e.currentTarget.value === "0"){
            this.setState({
                inputForum:
                <div>
                    <div className="moduleHeader">Enter in Pickup information</div>
                    Name: <input type="text"/><br/>
                    Phone Number: <input type="text"/><br/>
                    <button onClick={this.submitInfo}>Submit</button>
                </div>
            })
        } else if (e.currentTarget.value === "1"){
            this.setState({
                inputForum:
                <div>
                    <div className="moduleHeader">Enter in delivery information</div>
                    Name: <input type="text" name="name"/><br/>
                    Phone Number: <input type="text" name="phone"/><br/>
                    City: <input type="text" name="city"/><br/>
                    State: <input type="text" name="state"/><br/>
                    Address: <input type="text" name="address"/><br/>
                    Special Notes: <input type="text" name="notes"/><br/>
                    <button onClick={this.submitInfo}>Submit</button>
                </div>
            })
        }
      }

    submitInfo() {
        this.setState({
            pizzaBuilder:
            <div>
                <h3>Pizza builder</h3>
                <h4>Select size</h4>
                <input type="radio"
                    name="pizzaSize"
                    value="0"
                    onChange={this.crustType}/>Small
                <input type="radio"
                    name="pizzaSize"
                    value="1"
                    onChange={this.crustType}/>Medium
                <input type="radio"
                    name="pizzaSize"
                    value="2"
                    onChange={this.crustType}/>Large
            </div>,
            inputForum: "",
            transportSelector: ""
        })
    }

    crustType() {
        this.setState({
            crustSelector:
            <div>
                <h4>Select crust flavor</h4>
                <input type="radio"
                    name="pizzaCrust"
                    value="0"
                    onChange={this.cheeseAmount}/>Buttery Garlic
                <input type="radio"
                    name="pizzaCrust"
                    value="1"
                    onChange={this.cheeseAmount}/>Classic
            </div>
        })
    }

    cheeseAmount() {
        this.setState({
            cheeseAmount:
            <div>
            <h4>Select cheese</h4>
            <input type="radio"
                name="pizzaCheese"
                value="0"
                onChange={this.pizzaToppings}/>Light
            <input type="radio"
                name="pizzaCheese"
                value="1"
                onChange={this.pizzaToppings}/>Normal
            <input type="radio"
                name="pizzaCheese"
                value="2"
                onChange={this.pizzaToppings}/>Extra (+$1)
            </div>
        })
    }

    pizzaToppings() {
        this.setState({
            pizzaToppings:
            <div>
                <h4>Select toppings</h4>
                <h5>$.50 each</h5>
            <input type="checkbox"
                name="pizzaTopping"
                value="0"
                onChange={this.pizzaToppings}/>Pepperoni
            <input type="checkbox"
                name="pizzaTopping"
                value="0"
                onChange={this.pizzaToppings}/>Sausage
            <input type="checkbox"
                name="pizzaTopping"
                value="0"
                onChange={this.pizzaToppings}/>Beef
            <input type="checkbox"
                name="pizzaTopping"
                value="0"
                onChange={this.pizzaToppings}/>Chicken
            <input type="checkbox"
                name="pizzaTopping"
                value="0"
                onChange={this.pizzaToppings}/>Bacon
            <br/>
            <h5>$.25 each</h5>
            <input type="checkbox"
                name="pizzaTopping"
                value="0"
                onChange={this.pizzaToppings}/>Onions
            <input type="checkbox"
                name="pizzaTopping"
                value="0"
                onChange={this.pizzaToppings}/>Spinach
            <input type="checkbox"
                name="pizzaTopping"
                value="0"
                onChange={this.pizzaToppings}/>Black Olives
            <input type="checkbox"
                name="pizzaTopping"
                value="0"
                onChange={this.pizzaToppings}/>Green Peppers
            <input type="checkbox"
                name="pizzaTopping"
                value="0"
                onChange={this.pizzaToppings}/>Pineapple
            <input type="checkbox"
                name="pizzaTopping"
                value="0"
                onChange={this.pizzaToppings}/>Mushroom
            <br/><br/>
            <button className="button" onClick={this.goToPayment}>Proceed to checkout</button>
            </div>
        })
    }

    goToPayment() {
        this.setState({ showPaymentPortal: true });
        this.setState({
            pizzaBuilder: "",
            crustSelector: "",
            cheeseAmount: "",
            pizzaToppings: ""
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.transportSelector}</p>
                <p>{this.state.inputForum}</p>
                <div>{this.state.pizzaBuilder}</div>
                <div>{this.state.crustSelector}</div>
                <div>{this.state.cheeseAmount}</div>
                <div>{this.state.pizzaToppings}</div>
                <div>{this.state.pay}</div>
                { this.state.showPaymentPortal ? <PaymentPortal /> : null }
            </div>
        )
    }

}

export default Transportation;
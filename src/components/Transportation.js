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
            options: [],
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
    // update customer info
    handleCustomerName(e) { this.setState({ customerName: e.target.value }) }
    handlePhoneNumber(e) { this.setState({ phoneNumber: e.target.value }) }
    handleCity(e) { this.setState({ city: e.target.value }) }
    handleAddress(e) { this.setState({ address: e.target.value }) }
    handleSpecialNotes(e) { this.setState({ specialNotes: e.target.value }) }

    //update pizza order
    handlePizzaSize(e) { this.setState({ pizzaSize: e.target.value }) }
    handlePizzaCrust(e) { this.setState({ pizzaCrust: e.target.value }) }
    handlePizzaCheese(e) { this.setState({ pizzaCheese: e.target.value }) }

    //Pizza toppings
    handlePizzaToppings(e) {
        // current array of options
        const options = this.state.options
        let index
    
        // check if the check box is checked or unchecked
        if (e.target.checked) {
          // add the numerical value of the checkbox to options array
          options.push(+e.target.value)
        } else {
          // or remove the value from the unchecked checkbox from the array
          index = options.indexOf(+e.target.value)
          options.splice(index, 1)
        }
    
        // update the state with the new array of options
        this.setState({ options: options })
    }

    handleClick(e) {
        if(e.currentTarget.value === "0"){
            this.setState({
                transportMethod: "Pickup",
                inputForum:
                <div>
                    <div className="moduleHeader">Enter in Pickup information</div>
                    <br/>
                        <div className="left-text">
                            Name: <input name="name" type="text" value={this.state.customerName} onChange={(e) => this.handleCustomerName(e)}/><br/>
                            Phone Number: <input name="name" type="text" value={this.state.phoneNumber} onChange={(e) => this.handlePhoneNumber(e)}/><br/>
                        </div>
                        <br/>
                        <br/>
                    <button onClick={this.submitInfo}>Submit</button>
                </div>
            })
        } else if (e.currentTarget.value === "1"){
            this.setState({
                transportMethod: "Delivery",
                inputForum:
                <div>
                    <div className="moduleHeader">Enter in delivery information</div>
                    <br/>
                        <div className="left-text">
                            Name: <input name="name" type="text" value={this.state.customerName} onChange={(e) => this.handleCustomerName(e)}/><br/>
                            Phone Number: <input name="name" type="text" value={this.state.phoneNumber} onChange={(e) => this.handlePhoneNumber(e)}/><br/>
                            City: <input name="name" type="text" value={this.state.city} onChange={(e) => this.handleCity(e)}/><br/>
                            Address: <input name="name" type="text" value={this.state.address} onChange={(e) => this.handleAddress(e)}/><br/>
                            Special Notes: <input name="name" type="text" value={this.state.specialNotes} onChange={(e) => this.handleSpecialNotes(e)}/><br/>
                        </div>
                        <br/>
                        <br/>
                    <button onClick={this.submitInfo}>Submit info</button>
                </div>
            })
        }
      }

    submitInfo() {
        this.setState({
            pizzaBuilder:
            <div>
                <p>Welcome, <strong>{this.state.customerName}</strong></p>
                <h3>Pizza builder</h3>
                <h4>Select size</h4>
                <div value={this.state.pizzaSize} onChange={(e) => this.handlePizzaSize(e)}>
                    <input type="radio"
                        name="pizzaSize"
                        value="Small"
                        onChange={this.crustType}/>Small
                    <input type="radio"
                        name="pizzaSize"
                        value="Medium"
                        onChange={this.crustType}/>Medium
                    <input type="radio"
                        name="pizzaSize"
                        value="Large"
                        onChange={this.crustType}/>Large
                </div>
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
                <div value={this.state.pizzaCrust} onChange={(e) => this.handlePizzaCrust(e)}>
                    <input type="radio"
                        name="pizzaCrust"
                        value="Buttery Garlic"
                        onChange={this.cheeseAmount}/>Buttery Garlic
                    <input type="radio"
                        name="pizzaCrust"
                        value="Classic"
                        onChange={this.cheeseAmount}/>Classic
                </div>
            </div>
        })
    }

    cheeseAmount() {
        this.setState({
            cheeseAmount:
            <div>
            <h4>Select cheese</h4>
            <div value={this.state.pizzaCheese} onChange={(e) => this.handlePizzaCheese(e)}>
                <input type="radio"
                    name="pizzaCheese"
                    value="Light"
                    onChange={this.pizzaToppings}/>Light
                <input type="radio"
                    name="pizzaCheese"
                    value="Normal"
                    onChange={this.pizzaToppings}/>Normal
                <input type="radio"
                    name="pizzaCheese"
                    value="Extra"
                    onChange={this.pizzaToppings}/>Extra (+$1)
            </div>
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
                onChange={this.handlePizzaToppings.bind(this)}/>Pepperoni
            <input type="checkbox"
                name="pizzaTopping"
                value="1"
                onChange={this.handlePizzaToppings.bind(this)}/>Sausage
            <input type="checkbox"
                name="pizzaTopping"
                value="2"
                onChange={this.handlePizzaToppings.bind(this)}/>Beef
            <input type="checkbox"
                name="pizzaTopping"
                value="3"
                onChange={this.handlePizzaToppings.bind(this)}/>Chicken
            <input type="checkbox"
                name="pizzaTopping"
                value="4"
                onChange={this.handlePizzaToppings.bind(this)}/>Bacon
            <br/>
            <h5>$.25 each</h5>
            <input type="checkbox"
                name="pizzaTopping"
                value="5"
                onChange={this.handlePizzaToppings.bind(this)}/>Onions
            <input type="checkbox"
                name="pizzaTopping"
                value="6"
                onChange={this.handlePizzaToppings.bind(this)}/>Spinach
            <input type="checkbox"
                name="pizzaTopping"
                value="7"
                onChange={this.handlePizzaToppings.bind(this)}/>Black Olives
            <input type="checkbox"
                name="pizzaTopping"
                value="8"
                onChange={this.handlePizzaToppings.bind(this)}/>Green Peppers
            <input type="checkbox"
                name="pizzaTopping"
                value="9"
                onChange={this.handlePizzaToppings.bind(this)}/>Pineapple
            <input type="checkbox"
                name="pizzaTopping"
                value="10"
                onChange={this.handlePizzaToppings.bind(this)}/>Mushroom
            <br/><br/>
            <button className="button" onClick={this.goToPayment}>Proceed to checkout</button>
            </div>
        })
    }

    goToPayment() {
        this.setState({ showPaymentPortal: true });
        this.setState({
            orderSummary:
            <div>
                <h2>Customer information</h2>
                <div className="left-text">
                    <div className="orderDetail">Customer Name: {this.state.customerName}</div>
                    <div className="orderDetail">Phone Number: {this.state.phoneNumber}</div>
                    <div className="orderDetail">City: {this.state.city}</div>
                    <div className="orderDetail">Address: {this.state.address}</div>
                    <div className="orderDetail">Special Delivery Notes: {this.state.specialNotes}</div>
                </div>
                <h2>Order details</h2>
                <div className="left-text">
                    <div className="orderDetail">Pizza Size: {this.state.pizzaSize}</div>
                    <div className="orderDetail">Pizza Crust: {this.state.pizzaCrust}</div>
                    <div className="orderDetail">Pizza Cheese: {this.state.pizzaCheese}</div>
                    <div className="orderDetail">Pizza toppings: {this.state.options}</div>
                </div>
            </div>,
            pizzaBuilder: "",
            crustSelector: "",
            cheeseAmount: "",
            pizzaToppings: ""
        })
    }

    render() {
        return (
            <div className="background-box">
                <p>{this.state.transportSelector}</p>
                <p>{this.state.inputForum}</p>
                <div>{this.state.pizzaBuilder}</div>
                <div>{this.state.crustSelector}</div>
                <div>{this.state.cheeseAmount}</div>
                <div>{this.state.pizzaToppings}</div>
                <div>{this.state.orderSummary}</div>
                { this.state.showPaymentPortal ? <PaymentPortal /> : null }
            </div>
        )
    }

}

export default Transportation;
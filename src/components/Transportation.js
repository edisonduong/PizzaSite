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
            tax: 1.07,
            options: [],
            pizzaCost: 0, // pizza cost initial
            transportSelector:
            <div className="transportSelector" onChange={(e) => this.handleDeliveryMethod(e)}>
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

    // update delivery method
    handleDeliveryMethod(e) {
        if(e.target.value === "1") {
            this.setState({ deliveryMethod: "Delivery", totalCost: 3.50, deliveryCost: 3.50})
        } else {
            this.setState({ deliveryMethod: "Pickup", totalCost: 0, deliveryCost: 0 })
        }
    }

    // update customer info
    handleCustomerName(e) { this.setState({ customerName: e.target.value }) }
    handleCity(e) { this.setState({ city: e.target.value }) }
    handlePhoneNumber(e) { this.setState({ phoneNumber: e.target.value }) }
    handleAddress(e) { this.setState({ address: e.target.value }) }
    handleSpecialNotes(e) { this.setState({ specialNotes: e.target.value }) }

    //update pizza order
    handlePizzaSize(e) {
        if(e.target.value === "Small"){
            this.setState({ pizzaCost: this.state.pizzaCost + 8, pizzaSize: e.target.value, totalCost: this.state.totalCost + 8})
        } else if (e.target.value === "Medium") {
            this.setState({ pizzaCost: this.state.pizzaCost + 11, pizzaSize: e.target.value, totalCost: this.state.totalCost + 11})
        } else if (e.target.value === "Large") {
            this.setState({ pizzaCost: this.state.pizzaCost + 13, pizzaSize: e.target.value, totalCost: this.state.totalCost + 13})
        }
    }
    handlePizzaCrust(e) { this.setState({ pizzaCrust: e.target.value }) }

    handlePizzaCheese(e) {
        if(e.target.value === "Extra"){
            this.setState({ pizzaCost: this.state.pizzaCost + 1, pizzaCheese: e.target.value, totalCost: this.state.totalCost + 1})
        } else {
            this.setState({
                pizzaCheese: e.target.value
            })
        }
    }

    //Pizza toppings
    handlePizzaToppings(e) {
        // current array of options
        const options = this.state.options
        let index
    
        // check if the check box is checked or unchecked
        if (e.target.checked) {
          // add the numerical value of the checkbox to options array
          options.push(e.target.value)
          this.setState({ pizzaCost: this.state.pizzaCost + .50, totalCost: this.state.totalCost + .50})
        } else {
          // or remove the value from the unchecked checkbox from the array
          index = options.indexOf(e.target.value)
          options.splice(index, 1)
          this.setState({ pizzaCost: this.state.pizzaCost - .50, totalCost: this.state.totalCost - .50 })
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
                <h3>Pizza Customizer</h3>
                <h4>Select size</h4>
                <div value={this.state.pizzaSize} onChange={(e) => this.handlePizzaSize(e)}>
                    <input type="radio"
                        name="pizzaSize"
                        value="Small"
                        onChange={this.crustType}/>Small $8
                    <input type="radio"
                        name="pizzaSize"
                        value="Medium"
                        onChange={this.crustType}/>Medium $11
                    <input type="radio"
                        name="pizzaSize"
                        value="Large"
                        onChange={this.crustType}/>Large $13
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
                <h4>Select toppings ($.50 each)</h4>
            <input type="checkbox"
                name="pizzaTopping"
                value="Pepperoni"
                onChange={this.handlePizzaToppings.bind(this)}/>Pepperoni
            <input type="checkbox"
                name="pizzaTopping"
                value="Sausage"
                onChange={this.handlePizzaToppings.bind(this)}/>Sausage
            <input type="checkbox"
                name="pizzaTopping"
                value="Beef"
                onChange={this.handlePizzaToppings.bind(this)}/>Beef
            <input type="checkbox"
                name="pizzaTopping"
                value="Chicken"
                onChange={this.handlePizzaToppings.bind(this)}/>Chicken
            <input type="checkbox"
                name="pizzaTopping"
                value="Bacon"
                onChange={this.handlePizzaToppings.bind(this)}/>Bacon
            <br/>
            <input type="checkbox"
                name="pizzaTopping"
                value="Onions"
                onChange={this.handlePizzaToppings.bind(this)}/>Onions
            <input type="checkbox"
                name="pizzaTopping"
                value="Spinach"
                onChange={this.handlePizzaToppings.bind(this)}/>Spinach
            <input type="checkbox"
                name="pizzaTopping"
                value="Black Olives"
                onChange={this.handlePizzaToppings.bind(this)}/>Black Olives
            <input type="checkbox"
                name="pizzaTopping"
                value="Green Peppers"
                onChange={this.handlePizzaToppings.bind(this)}/>Green Peppers
            <input type="checkbox"
                name="pizzaTopping"
                value="Pineapples"
                onChange={this.handlePizzaToppings.bind(this)}/>Pineapple
            <input type="checkbox"
                name="pizzaTopping"
                value="Mushrooms"
                onChange={this.handlePizzaToppings.bind(this)}/>Mushroom
            <br/><br/>
            <button className="button" onClick={this.goToPayment}>Proceed to checkout</button>
            </div>
        })
    }

    goToPayment() {
        if(this.state.deliveryMethod === "Pickup"){
            this.setState({
                customerSummary:
                <div>
                    <h2>Customer information</h2>
                    <div className="left-text">
                        <div className="orderDetail">Customer Name: <strong>{this.state.customerName}</strong></div>
                        <div className="orderDetail">Phone Number: <strong>{this.state.phoneNumber}</strong></div>
                    </div>
                </div>
            })
        } else {
            this.setState({
                customerSummary:
                <div>
                    <h2>Customer information</h2>
                    <div className="left-text">
                        <div className="orderDetail">Customer Name: <strong>{this.state.customerName}</strong></div>
                        <div className="orderDetail">Phone Number: <strong>{this.state.phoneNumber}</strong></div>
                        <div className="orderDetail">City: <strong>{this.state.city}</strong></div>
                        <div className="orderDetail">Address: <strong>{this.state.address}</strong></div>
                        <div className="orderDetail">Special Delivery Notes: <strong>{this.state.specialNotes}</strong></div>
                    </div>
                </div>
            })
        }

        this.setState({
            orderSummary:
            <div>
                <h2>Order details</h2>
                <div className="left-text">
                    {/* calculate order cost */}
                    <div className="orderDetail">Subtotal: <strong>${this.state.pizzaCost.toFixed(2)}</strong></div>
                    <div className="orderDetail">Delivery cost: <strong>${this.state.deliveryCost.toFixed(2)}</strong></div>
                    <div className="orderDetail">Tax: <strong>${this.state.tax}</strong></div>
                    <div className="orderDetail">Total: <strong>${this.state.totalCost * this.state.tax}</strong></div>

                    <div className="orderDetail">Pizza Size: <strong>{this.state.pizzaSize}</strong></div>
                    <div className="orderDetail">Pizza Crust: <strong>{this.state.pizzaCrust}</strong></div>
                    <div className="orderDetail">Pizza Cheese: <strong>{this.state.pizzaCheese}</strong></div>
                    <div className="orderDetail">Pizza Toppings: <strong>{this.state.options.join(', ')}</strong></div>
                </div>
            </div>,
            showOrder: true,
            showPaymentPortal: true,
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
                { this.state.showOrder ? this.state.customerSummary : null }
                { this.state.showOrder ? this.state.orderSummary : null }
                { this.state.showPaymentPortal ? <PaymentPortal /> : null }
            </div>
        )
    }

}

export default Transportation;
import React, { Component } from 'react';
import './Transportation'

class PaymentPortal extends Component {
    constructor(props) {
        super(props);
        
        this.cashOption = this.cashOption.bind(this);
        this.enterCardInfo = this.enterCardInfo.bind(this);
        this.submitOrder = this.submitOrder.bind(this);
        this.state = {
            paymentType: "",
            choosePayment:
            <div>
            <h3>Payment Method</h3>
            <input type="radio"
            name="paymentType"
            value="0"
            onChange={this.cashOption}/>Cash
            <input type="radio"
            name="paymentType"
            value="1"
            onChange={this.enterCardInfo}/>Credit
            </div>
        }
    }

    cashOption() {
        this.setState({
            orderButton:
            <div>
            <br/>
            <button onClick={this.submitOrder}>Complete order</button>
            </div>,
            enterCardInfo: ""
        })
    }

    enterCardInfo() {
        this.setState({
            orderButton:
            <button onClick={this.submitOrder}>Complete order</button>,
            enterCardInfo:
            <div>
                <input type="text" class="cardHolderName" placeholder="Name On Card" />
                <br/>
                <input type="text" class="card-number" placeholder="Card Number"/>
                <div className="date-field">
                    <div className="month">
                        <select name="Month">
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                        </select>
                    </div>
                    <div class="year">
                        <select name="Year">
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        </select>
                    </div>
                    <div className="card-verification">
                        <div className="cvv-input">
                            <input type="text" placeholder="CVV"/>
                        </div>
                        <div className="cvv-details">
                            <p>3 or 4 digits usually found <br/> on the signature strip</p>
                        </div>
                    </div>
                </div>
            </div>
        })
    }

    submitOrder() {
        this.setState({
            orderComplete:
            <div>
                <h4>We've recieved your order!</h4>
                <p>Estimated time: 15 Minutes</p>
            </div>,
            choosePayment: "",
            enterCardInfo: "",
            orderButton: ""
        })
        return (
            this.props.callApi
        )
    }

    render() {
        return (
            <div>
                { this.state.choosePayment }
                { this.state.enterCardInfo }
                { this.state.orderButton }
                { this.state.orderComplete }
            </div>
        )
    }
}

export default PaymentPortal;

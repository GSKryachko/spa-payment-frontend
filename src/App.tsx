import React, {Component} from 'react';
import './App.css';
import './index.css';
import Bunny from "./images/bunny.png"
import TheRoadOfReconsideration from "./images/the_road_of_reconsideration.jpg"
import HakureiShrine from "./images/hakurei_shrine.jpg"
import YoukaiMountain from "./images/youkai_mountain.jpg"
import Eientei from "./images/eientei.jpg"

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="App">
                    <AboutClient/>
                    <Payment/>
                    <AboutCompany/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>Rights to all images belong to their respective creators. This site is not used for commercial
                    purposes.</p>
            </div>
        )
    }
}

class Payment extends Component {
    readonly state = {mode: "pay"};

    getPaymentBody() {
        if (this.state.mode === "pay") {
            return <Pay/>
        } else {
            return <RequestPayment/>
        }
    }

    render() {
        return (
            <div className="Payment">
                <div className="PaymentButtonContainer">
                    <button className="PayButton" onClick={() => this.setState({mode: "pay"})}>Pay
                    </button>
                    <button className="RequestPaymentButton" onClick={() => this.setState({mode: "request"})}>Request
                    </button>
                </div>
                {this.getPaymentBody()}
            </div>
        )
    }
}

class RequestPayment extends Component {
    render() {
        return (
            <div className="RequestPayment">
                <p>Create document and upload it to site of your bank</p>
                <form className="RequestPaymentForm" id="RequestPaymentForm">
                    <span>ITN of receiver:</span> <input required type="text" name="ITN" pattern="(\d{10}|\d{12})"
                                                         placeholder="Individual taxpayer number"/><br/>
                    <span>RCBIC:</span><input required type="text" name="rcbic" pattern="\d{9}"/><br/>
                    <span>Account number:</span><input required type="text" name="account" pattern="\d{20}"/><br/>
                    <span>VAT: </span><input required type="text" name="vat"
                                             pattern="(.*НДС 18%.*)|(.*НДС 10%.*)|(.*без НДС.*)"/><br/>
                    <span>Amount: </span><input required type="number" min="1000" max="75000" name="amount"/><br/>
                    <span>Phone: </span><input required type="tel" name="phone"/><br/>
                    <p>By sharing your phone number you allow us to store and process this data in accordance to our
                        privacy rules </p>
                    <span>Email: </span><input required type="email" name="email"/><br/>

                    <input type="submit" value="Request payment"/>
                </form>
            </div>
        )
    }
}

class PayFromMyBank extends Component {
    render() {
        return (
            <div className="PayFromMyBank">
                <p>Create document and upload it to site of your bank</p>
                <form className="PayFromMyBankForm" id="PayFromMyBankForm">
                    <span>From:</span> <input required type="text" name="from" pattern="(\d{10}|\d{12})"
                                              placeholder="Individual taxpayer number"/><br/>
                    <span>RCBIC:</span><input required type="text" name="rcbic" pattern="\d{9}"/><br/>
                    <span>Account number:</span><input required type="text" name="account" pattern="\d{20}"/><br/>
                    <span>VAT: </span><input required type="text" name="vat"
                                             pattern="(.*НДС 18%.*)|(.*НДС 10%.*)|(.*без НДС.*)"/><br/>
                    <span>Amount: </span><input required type="number" min="1000" max="75000" name="amount"/><br/>
                    <input type="submit" value="Get the file for a bank"/>
                </form>

            </div>
        )
    }
}

class PayFromAnyBank extends Component {
    render() {
        return (
            <div className="PayFromAnyBank">
                <form className="PayFromAnyBankForm" id="PayFromAnyBankForm">
                    <div className="CardData">
                        <span >Card number</span><input required type="text" name="card_number"
                                                                              pattern="\d{16}"/><br/>
                        <span >Expiration Date</span><input required type="text" name="exp_date"
                                                                                      pattern="\d{2}/\d{2}"/><br/>
                        <span>CVC </span><input required type="text" name="cvc"
                                                                pattern="\d{3}"/><br/>
                    </div>
                    <div className="Comments">
                        <span>Commentary: </span><input type="string" name="commentary" pattern=".{0:150}"/><br/>
                        <span>Amount: </span><input required type="number" min="1000" max="75000" name="amount"/><br/>
                        <span>Email: </span><input required type="email" name="email"/><br/>
                    </div>

                    <input type="submit" value="Request payment"/>
                </form>
            </div>
        )
    }
}

class Pay extends Component {
    readonly state = {mode: "any"};

    getPaymentBody() {
        if (this.state.mode === "any") {
            return <PayFromAnyBank/>
        } else {
            return <PayFromMyBank/>
        }
    }

    render() {
        return (
            <div className="Pay">
                <div className="PayButtonContainer">
                    <button className="PayFromAnyBankButton" onClick={() => this.setState({mode: "any"})}>Pay from any
                        card
                    </button>
                    <button className="PayFromMyBankButton" onClick={() => this.setState({mode: "my"})}>Pay from card of
                        my bank
                    </button>
                </div>
                {this.getPaymentBody()}
            </div>
        )
    }
}

class AboutClient extends Component {
    render() {
        return (
            <div className="about_client">
                <div className="about_client-wrapper">
                    <h3>
                        Individual Entrepreneur Reisen Udongein Inaba
                    </h3>
                    <div className="contacts">
                        <p>88888888888</p>
                        <p><a href="www.reisen.gen"> www.reisen.gen</a></p>
                        <p><a href="mailto:reisen@eientei.gen"> reisen@eientei.gen</a></p>
                    </div>

                    <p><a href="#about_company">About Company</a></p>
                    <p><a href="">Show requisites</a></p>
                </div>
                <img src={Bunny}/>
            </div>
        )
    }
}


class AboutCompany extends Component {
    render() {
        return (
            <div className="about_company">
                <h3>
                    About individual entrepreneur Reisen Udongein Inaba
                </h3>
                <div className="gallery">
                    <div className="gallery_item">
                        <img src={TheRoadOfReconsideration}/>
                        <p className="description"> The road of reconsideration 1</p>
                        <p className="price">228$</p>
                    </div>
                    <div className="gallery_item">
                        <img src={HakureiShrine}/>
                        <p className="description">Hakurei Shrine</p>
                        <p className="price">228$</p>
                    </div>
                    <div className="gallery_item">
                        <img src={YoukaiMountain}/>
                        <p className="description"> Youkai Mountain</p>
                        <p className="price">228$</p>
                    </div>
                    <div className="gallery_item">
                        <img src={Eientei}/>
                        <p className="description"> House of Eternity</p>
                        <p className="price">228$</p>
                    </div>
                </div>
                <p>Reisen Udongein Inaba provides unforgettable tours to various places in Gensoukyou!</p>
                <p><a href="#">Show more...</a></p>
            </div>

        )
    }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';



export default class App extends Component {
  onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post('http://localhost:3012/api/payment', { token, amount: 100 } ).then(response => {
      alert('Heyooo')
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Stripe</h2>
         </div>
         <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_8LXvvStMTGkpEl1wGDjpS6Jz"
          amount={1000}
        />  
      </div>
    );
  }
}


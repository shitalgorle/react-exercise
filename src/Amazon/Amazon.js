import React from 'react';
import Header from '../Amazon/Header';

import Panel from '../Amazon/Panel';
import { product } from '../Amazon/Data';

export default class Amazon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productArray: product,
      cartArray: [],
      isCartVisibe: false,
    };

  }

  addToCart = (product) => {
    console.log("add", product)
    this.setState({ cartArray: [product, ...this.state.cartArray] })
  }


  toggleCart = () => {
    this.setState({ isCartVisible: !this.state.isCartVisible });
  };

  render() {
    console.log("Product Array:", this.state.productArray);
    return (
      <div>
<Header cartArray={this.state.cartArray} toggleCart={this.toggleCart} />
        
        {this.state.isCartVisible ? (
          <Panel productArray={this.state.cartArray} addToCart={() => {}} isCartView={true} />
        ) : (
          <Panel productArray={this.state.productArray} addToCart={this.addToCart} isCartView={false} />
        )}

      </div>
    )
  }
}
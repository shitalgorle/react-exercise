// import React, { Component } from "react";
// import "./Card.css";

// class Card extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <>
//         <h1>CPU COMPONENTS:-</h1>
//         <div className="main-one">
//           <div key={this.props.index} className="product-box">
//           <img src={this.props.product.image} alt={this.props.product.name} className="product-image" />
//             <h3>{this.props.product.name}</h3>
//             <p className="product-price">{this.props.product.price}</p>
//                 <button className="add-to-cart" onClick={() => this.props.addToCart(this.props.product)}>
//                   Add to Cart
//                 </button>  
//           </div>
//         </div>
//       </>
//     );
//   }
// }


// export default Card;



import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    const { product, addToCart } = this.props;

    return (
      <div className="product-box">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <button className="add-to-cart" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    );
  }
}

export default Card;




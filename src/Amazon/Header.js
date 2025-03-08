import './Header.css';
import Cart from '../Amazon/Cart';
import React from 'react';

import amazonLogo from '../assets/amazonlogo.jpg'

class Header extends React.Component {
    render(){
    return (
        <header>
        <div className="header">
        
            <img className='amazon-logo' src={amazonLogo}/>
           
                   <input type="text" className="input" placeholder="Search" />
                
            <Cart cartItems={this.props.cartArray} toggleCart={this.props.toggleCart} />
        </div>
        <h1 style={{textAlign:"center"}}>CPU Component</h1>
        </header>
    );
};
}
export default Header;

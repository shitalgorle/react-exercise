import React from 'react';
import Card from './card';
import './Panel.css';

class Panel extends React.Component {
    render() {
     

        return (
            <div className='panel-container'>
                {this.props.productArray.length === 0 ? (
                    <p style={{ textAlign: "center" }}>Your cart is empty.</p>
                ) : (
                    this.props.productArray.map((product, index) => (
                        <div key={index}>
                            <Card
                                item={product}
                                addToCart={this.props.isCartView ? null : this.props.addToCart} 
                                isCartView={this.props.isCartView}
                            />
                        </div>
                    ))
                )}
            </div>
        );
    }
}

export default Panel;
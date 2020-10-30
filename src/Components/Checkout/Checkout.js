

import React, { Component } from 'react'
import {
    connect
} from 'react-redux';
import * as actions from "../../store/actions";
import Shipping from './Shipping/Shipping'
import CartTotals from './CartTotals/CartTotals'

class Checkout extends Component {
    render() {

        return (
            <React.Fragment>
                <div className="checkout col-lg-3 shipping-mobile">
                    <Shipping shipping={this.props.checkoutState.shipping} />
                    <CartTotals subtotal={this.props.checkoutState.subtotal} grandtotal={this.props.checkoutState.grandtotal} processedItem={this.props.processedItem} />
                </div>
            </React.Fragment>
        );
    }

};

function mapStateToProps({ product }) {
    return {
        checkoutState: product
    };
}

export default connect(
    mapStateToProps, actions
)(Checkout);
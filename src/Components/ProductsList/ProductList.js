
import React, { Component } from 'react'
import Product from './Product/Product'
import {
    connect
} from 'react-redux';
import * as actions from "../../store/actions";

class ProductList extends Component {
    render() {


        let list = <p className="product_text--qty">Your Cart is empty :(</p>;
        if (this.props.products?.length !== 0) {
            list = this.props.products?.map(({ qty, price, name, img }, index) => {
                return <Product key={index} index={index} name={name} qty={qty} price={price} img={img} increaseQty={this.props.increaseQty} decreaseQty={this.props.decreaseQty} removeItem={this.props.removeItem} updatePrice={this.props.updatePrice} />
            })
        }
        return list;
    }

};

function mapStateToProps({ product }) {
    return {
        products: product.products
    };
}

export default connect(
    mapStateToProps, actions
)(ProductList);
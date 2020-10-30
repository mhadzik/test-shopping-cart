import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import * as actions from "../../store/actions";
import ProductList from '../../Components/ProductsList/ProductList';
import ProductsInfo from '../../Components/ProductsList/ProductsInfo/ProductsInfo';
import Checkout from '../../Components/Checkout/Checkout';


class ShoppingCart extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="product flex flex-column">
                                <ProductsInfo />
                                <ProductList />
                                <div className="row margin-row">
                                    <div className="col-md-8 offset-md-4">
                                        <div className="row">
                                            <div className="col-md-5 offset-md-7 flex flex-bottom ">
                                                <button className="product_btn--summary product_btn" onClick={() => this.props.updatePrice()}>Update Shopping Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <Checkout />
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

function mapStateToProps({ product }) {
    return {
        products: product.products
    };
}

export default connect(
    mapStateToProps, actions
)(ShoppingCart);
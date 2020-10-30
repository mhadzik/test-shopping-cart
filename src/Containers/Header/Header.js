import React, {
    Component
} from 'react';
import * as actions from "../../store/actions";
import {
    connect
} from 'react-redux';



class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row header_row">
                        <div className="col-lg-12  flex flex-justify-between">
                            <h3 className="header_h3 text-grey">Shopping cart</h3>
                            <button className="header_button product_btn" onClick={() => this.props.processedItem()}>Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}

function mapStateToProps({ product }) {
    return {
        checkoutState: product
    };
}

export default connect(
    mapStateToProps, actions
)(Header);
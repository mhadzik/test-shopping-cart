
import React from 'react'
const cartTotals = (props) => {
    return (
        <div className="checkout_details ">
            <div className="checkout_row--top">
                <span className="checkout_details--text text-black">cart totals</span>
            </div>
            <div className="checkout_row checkout_row--middle flex flex-justify-between">
                <span className="checkout_details--text text-grey">Subtotal</span>
                <span className="checkout_details--text text-black">${props.subtotal.toFixed(2)}</span>
            </div>
            <div className="checkout_row flex flex-justify-between">
                <span className="checkout_details--text text-grey">Grand Total</span>
                <span className="checkout_details--price text-black">${props.grandtotal.toFixed(2)}</span>
            </div>
            <div className="checkout_row">
                <button className="checkout_details--button product_btn" onClick={() => props.processedItem()}>Proceed to checkout</button>
            </div>
        </div>
    )

}

export default cartTotals;
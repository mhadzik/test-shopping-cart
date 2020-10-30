

import React from 'react'

const shipping = (props) => {
    return (
        <div className="checkout_shipping flex flex-justify-between">
            <span className="checkout_shipping--text text-black">Shipping</span>
            <span className="checkout_shipping--text text-black">${props.shipping.toFixed(2)}</span>
        </div>
    )

}
export default shipping;
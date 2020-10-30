import React from 'react'
import xIcon from '../../../images/x-img.png'
import editIcon from '../../../images/edit-img.png'

const product = ({ index, name, qty, price, img, increaseQty, decreaseQty, removeItem, updatePrice }) => {
    return (
        <div className="row product_row--middle margin-row">
            <div className="col-md-4 flex-mobile">
                <button className="product_btn--img product_row--item" onClick={() => removeItem(index)}><img src={xIcon}
                    alt="Delete" /></button>
                <img src={img} className="product_row--item" alt="" />
            </div>
            <div className="col-md-8">
                <div className="row flex flex-middle h-100">
                    <span className="product_text--details text-grey product_row--item col-4">{name}</span>
                    <span className="product_text--details text-grey product_row--item col-3">${price.toFixed(2)}</span>
                    <div className="col-sm-5">
                        <button className="product_btn--quantity text-grey product_row--item" onClick={() => decreaseQty(index)}>-</button>
                        <span className="product_text--quantity text-grey">{qty}</span>
                        <button className="product_btn--quantity text-grey" onClick={() => increaseQty(index)}>+</button>
                        <button className="product_btn--img last-item" onClick={() => updatePrice(index)}><img src={editIcon}
                            alt="Edit" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default product;
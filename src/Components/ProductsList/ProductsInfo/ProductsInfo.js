

import React from 'react'


const productsInfo = () => {
    return (
        <div className="row margin-row row-products">
            <div className="col-8 offset-4">
                <div className="row flex flex-middle">
                    <span className="product_text text-grey col-4">Product Name</span>
                    <span className="product_text text-grey col-3">Unit Price</span>
                    <span className="product_text text-grey col-5">Qty</span>
                </div>
            </div>
        </div>
    )
}
export default productsInfo;
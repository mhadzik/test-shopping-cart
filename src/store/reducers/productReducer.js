import reducers from ".";
import {
    INCREASE_QTY, DECREASE_QTY, REMOVE_ITEM, UPDATE_PRICE, PROCESSED_ITEM
} from "../actions/types";
import imgHeadphones from '../../images/headphones.png'
import { removeItem } from "../actions";

const initialState = {
    products: [{
        name: "Headphones",
        price: 11.90,
        qty: 1,
        img: imgHeadphones
    }],
    subtotal: 11.90,
    grandtotal: 35.70,
    shipping: 23.80

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_QTY:
            const newProducts = state.products.concat();
            newProducts[action.payload] = { ...newProducts[action.payload], qty: newProducts[action.payload]?.qty + 1 };
            return {
                ...state,
                products: newProducts
            };

        case DECREASE_QTY:
            const newState = state.products.concat();
            if (newState[action.payload]?.qty > 1) {
                newState[action.payload] = { ...newState[action.payload], qty: newState[action.payload]?.qty - 1 };
            }
            return {
                ...state,
                products: newState
            };
        case REMOVE_ITEM:
            const updatedProducts = state.products.filter((q, index) => index !== action.payload);
            let updateSubtotal = state.subtotal
            let updateGrandtotal = state.grandtotal
            state.products.forEach((product) => {
                updateSubtotal = updateSubtotal - (product.price * product.qty)
                updateGrandtotal = updateGrandtotal - state.grandtotal
            });
            return {
                ...state,
                products: updatedProducts,
                subtotal: updateSubtotal,
                grandtotal: updateGrandtotal
            };
        case UPDATE_PRICE:
            let newSubtotal = 0;
            let newShipping = 0;
            state.products.forEach((product) => {
                newSubtotal = product.price * product.qty
            });
            if (newSubtotal > 100) {
                newShipping = 0;
            } else {
                newShipping = 23.80;
            }
            const newGrandtotal = newSubtotal + newShipping
            return {
                ...state,
                subtotal: newSubtotal,
                grandtotal: newGrandtotal,
                shipping: newShipping

            };
        case PROCESSED_ITEM:
            alert('Your order has been submitted successfully');
            console.log(state.products.length)
            return {
                ...state,
                products: [],
                subtotal: 0,
                grandtotal: 0,
                shipping: 23.80
            };
        default:
            return state;
    }
}

export default reducer;
import { INCREASE_QTY, DECREASE_QTY, REMOVE_ITEM, UPDATE_PRICE, PROCESSED_ITEM } from "./types";

export const increaseQty = (index) =>
    async dispatch => {
        dispatch({ type: INCREASE_QTY, payload: index });
    };

export const decreaseQty = (index) =>
    async dispatch => {
        dispatch({ type: DECREASE_QTY, payload: index });
    };

export const removeItem = (index) =>
    async dispatch => {
        dispatch({ type: REMOVE_ITEM, payload: index });
    };

export const updatePrice = (index) =>
    async dispatch => {
        dispatch({ type: UPDATE_PRICE, payload: index });
    };


    export const processedItem = (index) =>
    async dispatch => {
        dispatch({ type: PROCESSED_ITEM, payload: index });
    };
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCartAction = product => {
    return { type: ADD_TO_CART, product: product }
}

export const removeFromCartAction = productId => {
    return { type: REMOVE_FROM_CART, pid: productId }
}
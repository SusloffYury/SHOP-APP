import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/CartActions';
import CartItem from '../../models/CartModel';

const initialState = {
    items: {},
    totalItem: 0
}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title;
            let updatedCartItem;
            if (state.items[addedProduct.id]) {
                updatedCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    productPrice,
                    productTitle,
                    state.items[addedProduct.id].sum + productPrice,
                );
                return {
                    ...state,
                    items: { ...state.items, [addedProduct.id]: updatedCartItem },
                    totalItem: state.totalItem + productPrice
                }


            } else {
                updatedCartItem = new CartItem(1, productPrice, productTitle, productPrice)
                return {
                    ...state,
                    items: { ...state.items, [addedProduct.id]: updatedCartItem },
                    totalItem: state.totalItem + productPrice
                }
            }
        case REMOVE_FROM_CART:
            let updatedCartItems;
            const selectedCartItem = state.items[action.pid];
            const currentQty = selectedCartItem.quantity;
            if (currentQty > 1) {
               const updatedCartItem =new CartItem(
                        selectedCartItem.quantity - 1,
                        selectedCartItem.productPrice,
                        selectedCartItem.productTitle,
                        selectedCartItem.sum - selectedCartItem.productPrice);
                updatedCartItems = { ...state.items, [action.pid]:updatedCartItem }
            } else {
                updatedCartItems = { ...state.items };
                delete updatedCartItems[action.pid];
            }
            return {
                ...state,
                items: updatedCartItems,
                totalItem: state.totalItem - selectedCartItem.productPrice
            }
    }
    return state;
}


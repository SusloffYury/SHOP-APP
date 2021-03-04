import { ADD_TO_CART } from '../actions/CartActions';
import CartItem from '../../models/CartModel';

const initialState = {
    items: {},
    totalItem: 0
}

export default (state = initialState, action) => {
   console.log(action)
  let updatedCartItem;
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title;
            
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
    }
    return state;
}


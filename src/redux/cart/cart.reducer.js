import CartActionTypes from './cart.types'
import { additemToCart,removeItemFromCart } from './cart.util'
import CartItem from '../../componenets/cart-item/cart-item.component';
const INITIAL_STATE= {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartActionTypes.ADD_ITEM:
           
            return {
                ...state,
                cartItems: additemToCart(state.cartItems,action.data)
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:

        return {
            ...state,
            cartItems: state.cartItems.filter(CartItem => CartItem.id !== action.payload.id)
        }

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload)
            }

        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
            
        default:
            return state;
    }
};

export default cartReducer;
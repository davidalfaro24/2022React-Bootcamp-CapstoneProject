import { useReducer } from "react";
import { CartContext } from "./CartContext";

const initialValue = {
    cart:[],
    search:'',
};

const globalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state, cart: action.payload}
        case 'REMOVE':
            return {...state, cart: action.payload}
        case 'SEARCHFIELD':
            return {...state, search:action.payload}
        default:
            return;
    }
}
const CartProvider = ({children}) => { 
    const [cartReducer, dispatchCart] = useReducer(globalReducer, initialValue)
    return (
        <CartContext.Provider value={{cartReducer, dispatchCart}}> 
            {children} 
        </CartContext.Provider>
    )
}

export default CartProvider
import { useReducer } from "react";
import PropTypes from 'prop-types';
import { CartContext } from "./CartContext";

const initialValue = {
    cart: [],
    search: '',
};

const globalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const productInCart = state.cart.filter((product) =>
                product.id === action.payload[0].id
            )

            if (productInCart.length === 0) {
                const newProduct = {
                    id: action.payload[0].id,
                    name: action.payload[0].data.name,
                    price: Number(action.payload[0].data.price).toFixed(2),
                    mainImage: action.payload[0].data.mainimage.url,
                    quantity: Number(action.payload[1]),
                    stockProduct: action.payload[0].data.stock,
                }
                return { ...state, cart: [...state.cart, newProduct] }
            } else {
                const indexExistingProduct = state.cart.findIndex((item) =>
                    item.id === action.payload[0].id
                )
                let updatedProducts = [...state.cart];
                updatedProducts[indexExistingProduct] =
                { ...updatedProducts[indexExistingProduct], quantity: Number(action.payload[1])}
                return { ...state, cart: updatedProducts }
            }
        case 'REMOVE':
            const newCart = state.cart.filter((item) => item.id !== action.payload)
            return { ...state, cart: newCart }
        case 'SEARCHFIELD':
            return { ...state, search: action.payload }
        default:
            return;
    }
}
const CartProvider = ({ children }) => {
    const [cartReducer, dispatchCart] = useReducer(globalReducer, initialValue)
    return (
        <CartContext.Provider value={{ cartReducer, dispatchCart }}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node,
}

export default CartProvider
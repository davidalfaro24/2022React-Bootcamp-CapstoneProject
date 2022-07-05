import { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { CheckOutButton, ItemsToBuyPrice, TotalOrderWrap } from "../styles/Cart.styles";
import { CartContext } from "../store/CartContext";

const TotalAmount = ( {checkoutButton} ) => {
    const { cartReducer } = useContext(CartContext);
    const [finalAmount, setFinalAmount] = useState(0)
    
    useEffect(() => {
        let totalPrice = cartReducer.cart.reduce((total, curVal) => {
            return total + (curVal.price * curVal.quantity)
        }, 0)
        setFinalAmount(totalPrice.toFixed(2))
    }, [cartReducer.cart])
    
    return (
        <TotalOrderWrap>
            <ItemsToBuyPrice>Total: </ItemsToBuyPrice>
            <ItemsToBuyPrice>{`$ ${finalAmount}`}</ItemsToBuyPrice>
            {checkoutButton && finalAmount !== '0.00' && (<CheckOutButton to={'/checkout'}>
                Check Out
            </CheckOutButton>)}
        </TotalOrderWrap>
    )
}

TotalAmount.propTypes = {
    checkoutButton: PropTypes.bool,
}

export default TotalAmount;
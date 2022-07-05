import { useContext } from "react";
import PropTypes from 'prop-types';

import {ItemsToBuy, ItemsToBuyName, ContainerFlex, ItemH3, RemoveButton,
    ItemsImage, ProductPrice, InputQuantity, HR } from "../styles/Cart.styles";
import { CartContext } from "../store/CartContext";
import { AllProductsPage, DivButtonCentral } from "../styles/FeatureProd.styles";

const OrderProducts = ({ displayQuantity }) => {
    const { cartReducer, dispatchCart } = useContext(CartContext);

    const onChangeQuatity = (event) => {
        const indexExistingProduct = cartReducer.cart.findIndex((item) =>
            item.id === event.target.name
        )
        if (event.target.value > cartReducer.cart[indexExistingProduct].stockProduct) {
            alert('You are exceeding the maximum stock of ' +
                cartReducer.cart[indexExistingProduct].stockProduct)
            const productSelected = { id: event.target.name }
            const newProduct = [productSelected,
                cartReducer.cart[indexExistingProduct].stockProduct]
            dispatchCart({ type: 'ADD', payload: newProduct })
        } else {
            const productSelected = { id: event.target.name }
            const newProduct = [productSelected, event.target.value]
            dispatchCart({ type: 'ADD', payload: newProduct })
        }
    }

    const removeProduct = (event) => {
        event.preventDefault();
        dispatchCart({ type: 'REMOVE', payload: event.target.value })
    }

    return (
        <>
            <ul>
                {cartReducer.cart.length === 0 ? (
                    <DivButtonCentral>
                        <AllProductsPage className='btn' to={`/products`}>
                            View all products
                        </AllProductsPage>
                    </DivButtonCentral>) : (
                    <>
                        <h3>Order Details:</h3>
                        {cartReducer.cart.map((product) => (
                            <ItemsToBuy key={product.id}>
                                <ContainerFlex>
                                    {displayQuantity && (
                                        <ItemsImage src={product.mainImage} />
                                    )}
                                    <ItemsToBuyName>{product.name}</ItemsToBuyName>
                                </ContainerFlex>
                                <ContainerFlex>
                                    {displayQuantity && (
                                        <>
                                            <ProductPrice>{`$ ${product.price}`}</ProductPrice>
                                            <ItemH3>X</ItemH3>
                                            <InputQuantity type='number' value={product.quantity}
                                                min='1' max={product.stock} name={product.id}
                                                onChange={onChangeQuatity} />
                                        </>
                                    )}
                                    {!displayQuantity && (
                                        <>
                                            <ItemH3>{`${product.quantity} 
                                        Item${Number(product.quantity) > 1 ? 's' : ''}`}</ItemH3>
                                        </>
                                    )}
                                </ContainerFlex>
                                <ContainerFlex>
                                    <ItemH3>
                                        {`Subtotal: $ ${product.quantity * product.price}`}
                                    </ItemH3>
                                    {displayQuantity && (
                                        <RemoveButton onClick={removeProduct} value={product.id}>
                                            Remove
                                        </RemoveButton>
                                    )}
                                </ContainerFlex>
                            </ItemsToBuy>
                        ))}
                    </>
                )}
            </ul>
            <HR />
        </>
    )
}

OrderProducts.propTypes = {
    displayQuantity: PropTypes.bool,
}

export default OrderProducts
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"
import { useProductDetail } from "../utils/hooks/useProductDetail";

import { LoadingState } from "../components/styles/LoadingState.styles";
import { TextAlignItems } from "../components/styles/SideBar.styles";
import GalleryProduct from "../components/products/GalleryProduct";
import {
    DivWrapper, ProductDivRight, ProductName, ProductPrice,
    InputQuantity, AddToCartButton, ProductCategory,
    DescriptionProduct, SpecificationsList, SpecificationWrapper,
} from "../components/styles/GalleryProduct.styles";
import { CartContext } from "../components/store/CartContext";

const ProductDetail = () => {
    const params = useParams();
    const { productId } = params
    const { dataProduct, isLoadingProduct } = useProductDetail(productId)
    const [isLoading, setIsLoading] = useState(true);
    const { cartReducer, dispatchCart } = useContext(CartContext);
    const [inputQuantity, setInputQuantity] = useState();

    const addToCart = () => {
        if (inputQuantity === '') {
            alert('Please, select a quantity')
        } else {
            const indexExistingProduct = cartReducer.cart.findIndex((item) =>
                item.id === productId
            )
            if (indexExistingProduct === -1) {
                const newProduct = [dataProduct.results[0], Number(inputQuantity)]
                dispatchCart({ type: 'ADD', payload: newProduct })
            } else {
                const newQuantity = Number(cartReducer.cart[indexExistingProduct].quantity) +
                    Number(inputQuantity)
                if (newQuantity > cartReducer.cart[indexExistingProduct].stockProduct) {
                    alert('You are exceeding the maximum stock of ' +
                        cartReducer.cart[indexExistingProduct].stockProduct)
                } else {
                    const productSelected = { id: productId }
                    const newProduct = [productSelected, newQuantity]
                    dispatchCart({ type: 'ADD', payload: newProduct })
                }
            }
        }
    }
    const onChangeQuatity = (event) => {
        if (event.target.value < 0) {
            setInputQuantity('1');
        } else if (event.target.value <= dataProduct.results[0].data.stock) {
            setInputQuantity(event.target.value);
        } else {
            setInputQuantity(dataProduct.results[0].data.stock)
        }
    }

    useEffect(() => {
        if (!isLoadingProduct) {
            setIsLoading(false)
            setInputQuantity(dataProduct.results[0].data.stock > 0 ? '1' : '0')
        }
    }, [isLoadingProduct])

    return (
        <>
            {isLoading ? (
                <TextAlignItems>
                    <LoadingState><h4>Loading ...</h4></LoadingState>
                </TextAlignItems>
            ) : (
                <>
                    <DivWrapper>
                        <GalleryProduct data={dataProduct} />
                    </DivWrapper>
                    <ProductDivRight>
                        <ProductName>{dataProduct.results[0].data.name}</ProductName>
                        <ProductCategory>
                            {`Category: ${dataProduct.results[0].data.category.slug} `}&nbsp;
                            &nbsp;&nbsp;{`SKU:${dataProduct.results[0].data.sku}`}
                        </ProductCategory>
                        <ProductCategory>{dataProduct.results[0].tags.map((tag) => (
                            <p key={tag}>{tag} &nbsp;</p>
                        ))}</ProductCategory>
                        <ProductPrice>{`$ ${dataProduct.results[0].data.price}`}</ProductPrice>
                        <InputQuantity type='number' value={inputQuantity}
                            min={dataProduct.results[0].data.stock > 0 ? '1' : '0'}
                            max={dataProduct.results[0].data.stock}
                            onChange={onChangeQuatity} />
                        {dataProduct.results[0].data.stock > 0 && <AddToCartButton
                            onClick={addToCart}>Add to Cart
                        </AddToCartButton>}
                        <DescriptionProduct>
                            {dataProduct.results[0].data.short_description}
                        </DescriptionProduct>
                        <SpecificationWrapper>
                            <h3>Specifications:</h3>
                            <ul>
                                {dataProduct.results[0].data.specs.map((spec) => (
                                    <SpecificationsList key={spec.spec_name}>
                                        {`${spec.spec_name}: ${spec.spec_value}`}
                                    </SpecificationsList>
                                ))}
                            </ul>
                        </SpecificationWrapper>
                    </ProductDivRight>
                </>
            )}
        </>
    )
}

export default ProductDetail
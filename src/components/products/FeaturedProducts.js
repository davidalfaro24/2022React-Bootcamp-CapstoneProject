import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../store/CartContext';
import { H1Heading, H1Span } from '../styles/CategoryBanner.styles'
import { ContainerGrid, GridBox, Image, CardProduct, 
    ButtonContainer, ProductFeaturedContainer } from '../styles/FeatureProd.styles'
import { AddToCartButton } from '../styles/GalleryProduct.styles';

const FeaturedProducts = ({ data }) => {
    const { cartReducer, dispatchCart } = useContext(CartContext);
    const addToCart = (event) => { 
        event.preventDefault();
        const indexExistingProduct = cartReducer.cart.findIndex((item) => 
            item.id === event.target.value
        )
        if (indexExistingProduct === -1) {
            const productIndex = data.findIndex((product) => product.id === event.target.value)
            const newProduct = [data[productIndex] , 1 ];
            dispatchCart({type:'ADD', payload: newProduct})
        } else {
            const newQuantity = Number(cartReducer.cart[indexExistingProduct].quantity) + 1
            if (newQuantity > cartReducer.cart[indexExistingProduct].stockProduct) {
                alert('You are exceeding the maximum stock of ' +
                    cartReducer.cart[indexExistingProduct].stockProduct)
                const productSelected = { id: event.target.value }
                const newProduct = [productSelected, 
                            cartReducer.cart[indexExistingProduct].stockProduct]
                dispatchCart({ type: 'ADD', payload: newProduct })
            } else {
                const productSelected = { id: event.target.value }
                const newProduct = [productSelected, newQuantity]
                dispatchCart({ type: 'ADD', payload: newProduct })
            }
        }
    }
    
    return (
        <>
            <H1Heading>
                Our
                <H1Span>Products</H1Span>
            </H1Heading>
            <ContainerGrid>
                {data.map((product) => (
                    <GridBox key={product.id}>
                        <CardProduct to={`/product/${product.id}`}>
                            <ProductFeaturedContainer>
                                <Image src={product.data.mainimage.url} 
                                        alt={product.data.mainimage.alt} />
                                <h3>{`${product.data.name} $${product.data.price}`}</h3>
                                <p>{product.data.category.slug}</p>
                            </ProductFeaturedContainer>
                            <ButtonContainer>
                                {product.data.stock > 0 && <AddToCartButton 
                                        onClick={addToCart} value={product.id}>
                                    Add to Cart
                                </AddToCartButton>}
                            </ButtonContainer>
                        </CardProduct>
                    </GridBox>
                ))}
            </ContainerGrid>
        </>
    )
}

FeaturedProducts.propTypes = {
    data: PropTypes.array,
}

export default FeaturedProducts;
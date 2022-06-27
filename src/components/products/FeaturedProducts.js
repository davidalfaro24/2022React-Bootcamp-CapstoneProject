import { H1Heading, H1Span } from '../styles/CategoryBanner.styles'
import { ContainerGrid, GridBox, Image, CardProduct, 
    ButtonContainer, ProductFeaturedContainer } from '../styles/FeatureProd.styles'
import { AddToCartButton } from '../styles/GalleryProduct.styles';

const FeaturedProducts = ({ data }) => {
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
                                <AddToCartButton>Add to Cart</AddToCartButton>
                            </ButtonContainer>
                        </CardProduct>
                    </GridBox>
                ))}
            </ContainerGrid>
        </>
    )
}

export default FeaturedProducts;
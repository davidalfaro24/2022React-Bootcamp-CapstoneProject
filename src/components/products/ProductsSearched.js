import { H1Heading, H1Span } from '../styles/CategoryBanner.styles'
import { ContainerGrid, GridBox, Image, CardProduct, 
    ButtonContainer, ProductContainer } from '../styles/FeatureProd.styles'
import { AddToCartButton, DescriptionProduct } from '../styles/GalleryProduct.styles';

const ProductsSearched = ({ data }) => {
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
                            <ProductContainer>
                                <Image src={product.data.mainimage.url} 
                                        alt={product.data.mainimage.alt} />
                                <h3>{`${product.data.name} $${product.data.price}`}</h3>
                                <p>{product.data.category.slug}</p>
                                <DescriptionProduct>
                                    {product.data.short_description}
                                </DescriptionProduct>
                            </ProductContainer>
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

export default ProductsSearched;
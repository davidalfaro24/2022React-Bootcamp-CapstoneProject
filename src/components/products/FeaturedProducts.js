/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { H1Heading, H1Span } from '../styles/CategoryBanner.styles'
import { ContainerGrid, GridBox, Image, CardProduct } from '../styles/FeatureProd.styles'

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
                            <Image src={product.data.mainimage.url} alt={product.data.mainimage.alt} />
                            <h3>{`${product.data.name} $${product.data.price}`}</h3>
                            <p>{product.data.category.slug}</p>
                        </CardProduct>
                    </GridBox>
                ))}
            </ContainerGrid>
        </>
    )
}

export default FeaturedProducts;
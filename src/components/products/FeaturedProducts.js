import { Fragment } from "react";
import styledComponents from "styled-components";
import { H1Heading, H1Span } from "./CategoryBanner";

const FeaturedProducts = ({ data }) => {
    return (
        <Fragment>
            <H1Heading>
                Our
                <H1Span>Products</H1Span>
            </H1Heading>
            <ContainerGrid>
                {data.results.map((product) => (
                    <GridBox key={product.id}>
                        <Image src={product.data.mainimage.url} alt={product.data.mainimage.alt} />
                        <h3>{`${product.data.name} $${product.data.price}`}</h3>
                        <p>{product.data.category.slug}</p>
                    </GridBox>
                ))}
            </ContainerGrid>
        </Fragment>
    )
}

const ContainerGrid = styledComponents.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    gap:1.5rem;
    @media (max-width: 400px) {
        grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    }
    
`
const GridBox = styledComponents.div`
    border-radius: .5rem;
    background:#fff;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.1);;
    outline:.1rem solid rgba(0,0,0,.1);
    outline-offset: -1rem;
    text-align: center;
    &:hover {
        outline:.2rem solid black;
        outline-offset: 0rem;
    }
`
const Image = styledComponents.img`
    margin:1rem 0;
    height:15rem;
`

export default FeaturedProducts;
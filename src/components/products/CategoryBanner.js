import { Fragment } from "react";
import Carousels from "react-elastic-carousel";
import { H1Heading, H1Span, CardCarousel, Caption, Image} from '../styles/CategoryBanner.styles'

const CategoryBanner = ({ data }) => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
    ]

    return (
        <Fragment>
            <H1Heading>
                Our
                <H1Span>Categories</H1Span>
            </H1Heading>
            <Carousels breakPoints={breakPoints}>
                {data.results.map((category) => (
                    <CardCarousel key={category.id} to={`/products?category=${category.id}`}>
                        <Caption>{category.data.name}</Caption>
                        <Image src={category.data.main_image.url} 
                            alt={category.data.main_image.alt} />
                    </CardCarousel>
                ))}
            </Carousels>
        </Fragment>
    )
}

export default CategoryBanner

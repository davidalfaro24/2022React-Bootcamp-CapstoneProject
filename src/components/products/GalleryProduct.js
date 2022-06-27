import Carousels from "react-elastic-carousel";
import { CardSimpleCarousel } from "../styles/CategoryBanner.styles";
import { ImageGallery } from "../styles/GalleryProduct.styles";

const GalleryProduct = ({ data }) => {
    return (
        <Carousels itemsToShow={1}>
            {data.results[0].data.images.map((image) => (
                <CardSimpleCarousel key={Math.random()} >
                    <ImageGallery src={image.image.url}
                        alt={image.image.url} />
                </CardSimpleCarousel>
            ))}
        </Carousels>
    )
}

export default GalleryProduct
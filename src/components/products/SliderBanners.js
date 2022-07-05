import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap'

const SliderBanners = ({ data }) => {
    return (
        <Carousel>
            {data.results.map((productBan) => (
                <Carousel.Item key={productBan.id}>
                    <img
                        className="d-block w-100"
                        src={productBan.data.main_image.url}
                        alt={productBan.data.main_image.alt}
                    />
                    <Carousel.Caption >
                        <h3>{productBan.data.title}</h3>
                        <p>{productBan.data.description[0].text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

SliderBanners.propTypes = {
    data: PropTypes.object,
}

export default SliderBanners
import { useParams } from "react-router-dom"

const ProductDetail = () => {
    const params = useParams();
    const { productId } = params

    return (
        <>
            <h1>{`Loaking for ${productId}`}</h1>
        </>
    )
}

export default ProductDetail
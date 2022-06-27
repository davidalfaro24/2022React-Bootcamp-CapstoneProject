import { AllProductsPage, DivButtonCentral } from "../styles/FeatureProd.styles"
import { MessageNotFound, WrapperButton } from "../styles/GalleryProduct.styles"

const ItemNotFound = () => {
    return (
        <>
            <MessageNotFound>
                Item not found, but you can always view our products
            </MessageNotFound>
            <WrapperButton>
                <DivButtonCentral>
                    <AllProductsPage className='btn' to={`/products`}>
                        View all products
                    </AllProductsPage>
                </DivButtonCentral>
            </WrapperButton>
        </>
    )
}

export default ItemNotFound
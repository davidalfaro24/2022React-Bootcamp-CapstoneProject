import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { LoadingState } from "../components/styles/LoadingState.styles";
import { TextAlignItems } from "../components/styles/SideBar.styles";
import { useProductDetail } from "../utils/hooks/useProductDetail";
import GalleryProduct from "../components/products/GalleryProduct";
import {DivWrapper, ProductDivRight, ProductName,ProductPrice, 
    InputQuantity, AddToCartButton, ProductCategory,
    DescriptionProduct,SpecificationsList,SpecificationWrapper,
} from "../components/styles/GalleryProduct.styles";
import { useContext } from "react";
import { CartContext } from "../components/store/CartContext";

const ProductDetail = () => {
    const params = useParams();
    const { productId } = params
    const { dataProduct, isLoadingProduct } = useProductDetail(productId)
    const [isLoading, setIsLoading] = useState(true);
    const { dispatchCart } = useContext(CartContext);
    
    const addToCart = () => {
        dispatchCart({type:'ADD', payload: dataProduct.results[0]})
    }

    useEffect(() => {
        if (!isLoadingProduct) {
            setIsLoading(false)
        }
    }, [isLoadingProduct])

    return (
        <>
            {isLoading ? (
                <TextAlignItems>
                    <LoadingState><h4>Loading ...</h4></LoadingState>
                </TextAlignItems>
            ) : (
                <>
                    <DivWrapper>
                        <GalleryProduct data={dataProduct} />
                    </DivWrapper>
                    <ProductDivRight>
                        <ProductName>{dataProduct.results[0].data.name}</ProductName>
                        <ProductCategory>
                            {`Category: ${dataProduct.results[0].data.category.slug} `}&nbsp;
                            &nbsp;&nbsp;{`SKU:${dataProduct.results[0].data.sku}`}
                        </ProductCategory>
                        <ProductCategory>{dataProduct.results[0].tags.map((tag) => (
                            <p key={tag}>{tag} &nbsp;</p>
                        ))}</ProductCategory>
                        <ProductPrice>{`$ ${dataProduct.results[0].data.price}`}</ProductPrice>
                        <InputQuantity type='number' min='1' max='10' defaultValue='1' />
                        <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>
                        <DescriptionProduct>
                            {dataProduct.results[0].data.short_description}
                        </DescriptionProduct>
                        <SpecificationWrapper>
                            <h3>Specifications:</h3>
                            <ul>
                                {dataProduct.results[0].data.specs.map((spec) => (
                                    <SpecificationsList key={spec.spec_name}>
                                        {`${spec.spec_name}: ${spec.spec_value}`}
                                    </SpecificationsList>
                                ))}
                            </ul>
                        </SpecificationWrapper>
                    </ProductDivRight>
                </>
            )}

        </>
    )
}

export default ProductDetail
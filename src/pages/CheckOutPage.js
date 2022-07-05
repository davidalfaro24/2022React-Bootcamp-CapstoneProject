import { useContext } from "react";
import CustomerForm from "../components/layout/CustomerForm";
import OrderProducts from "../components/layout/OrderProducts";
import TotalAmount from "../components/layout/TotalAmount";
import { H1Heading, H1Span } from "../components/styles/CategoryBanner.styles";
import { Container, ContainerTotalAmount, ReturnToCart }
    from "../components/styles/CustomerForm.styles";
import { CartContext } from "../components/store/CartContext";

const CheckOutPage = () => {
    const { cartReducer } = useContext(CartContext);
    return (
        <>
            <H1Heading>
                Check
                <H1Span>Out</H1Span>
            </H1Heading>
            <Container>
                <CustomerForm />
                <ContainerTotalAmount>
                    <OrderProducts displayQuantity={false} />
                    {cartReducer.cart.length > 0 && (
                        <>
                            <TotalAmount checkoutButton={false} />
                            <ContainerTotalAmount>
                                <ReturnToCart to={'/cart'}>
                                    <i className='fa fa-arrow-left' /> Cart
                                </ReturnToCart>
                                <ReturnToCart to={'/cart'}>
                                    <i className='fa fa-arrow-right' /> Place Order
                                </ReturnToCart>
                            </ContainerTotalAmount>
                        </>
                    )}
                </ContainerTotalAmount>
            </Container>
        </>
    )
}

export default CheckOutPage;
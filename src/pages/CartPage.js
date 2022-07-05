import { SectionItems} from "../components/styles/Cart.styles";
import { H1Heading, H1Span } from "../components/styles/CategoryBanner.styles";
import OrderProducts from "../components/layout/OrderProducts";
import TotalAmount from "../components/layout/TotalAmount";

const CartPage = () => {
    return (
        <>
            <H1Heading>
                Shopping
                <H1Span>Cart</H1Span>
            </H1Heading>
            <SectionItems>
                <OrderProducts displayQuantity={true} />
            </SectionItems>
            <SectionItems>
                <TotalAmount checkoutButton={true}/>
            </SectionItems>
        </>
    )
}

export default CartPage;
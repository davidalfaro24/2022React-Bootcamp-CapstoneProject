import { PaginationContainer, PaginationLink } from "../styles/SideBar.styles"

const Pagination = () => {
    return (
        <PaginationContainer>
            <PaginationLink to="/allProducts">&laquo;</PaginationLink>
            <PaginationLink to="/allProducts">1</PaginationLink>
            <PaginationLink to="/allProducts">2</PaginationLink>
            <PaginationLink to="/allProducts">3</PaginationLink>
            <PaginationLink to="/allProducts">4</PaginationLink>
            <PaginationLink to="/allProducts">5</PaginationLink>
            <PaginationLink to="/allProducts">&raquo;</PaginationLink>
        </PaginationContainer>
    )
}

export default Pagination
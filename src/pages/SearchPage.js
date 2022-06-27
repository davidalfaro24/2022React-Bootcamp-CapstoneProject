import { useState } from "react";
import { useLocation } from "react-router-dom";
import ItemNotFound from "../components/layout/ItemNotFound";
import Pagination from "../components/layout/Pagination";
import ProductsSearched from "../components/products/ProductsSearched";
import { LoadingState } from "../components/styles/LoadingState.styles";
import { TextAlignItems } from "../components/styles/SideBar.styles";
import { useSearch } from "../utils/hooks/useSearch";

const SearchPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryQueryParams = searchParams.get('q')
    const [currentPage, setCurrentPage] = useState(1);
    const { dataSearch, isLoadingSearch } = useSearch(categoryQueryParams, currentPage);

    if (isLoadingSearch) {
        return (
            <TextAlignItems>
                <LoadingState><h4>Loading ...</h4></LoadingState>
            </TextAlignItems>
        )
    }
    if (dataSearch.results.length === 0) {
        return (<ItemNotFound/>)
    }
    return (
        <TextAlignItems>
            <ProductsSearched data={dataSearch.results} />
            <Pagination data={dataSearch} setCurrentPage={setCurrentPage} 
                currentPage={currentPage} resultSize={20}/>
        </TextAlignItems>
    )
}

export default SearchPage
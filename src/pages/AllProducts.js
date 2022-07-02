
import SideBarFilter from "../components/layout/SideBarFilter"
import FeaturedProducts from "../components/products/FeaturedProducts"
import { useEffect, useState } from "react";
import Pagination from "../components/layout/Pagination";
import { TextAlignItems } from "../components/styles/SideBar.styles";
import { LoadingState } from "../components/styles/LoadingState.styles";
import { useCategoryBanner } from "../utils/hooks/useCategoryBanner";
import { useProductsFiltered } from "../utils/hooks/useProductsFiltered";
import { useHistory, useLocation } from "react-router-dom";


const AllProducts = () => {
    const history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryQueryParams = searchParams.get('category')
    const [filterCategories, setFilterCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const { dataCategories, isLoadingCategories} = useCategoryBanner();
    const { dataFeaturedProducts, isLoadingfeaturedProducts } = 
            useProductsFiltered(filterCategories, currentPage);
    
    const [products, setProducts] = useState(dataFeaturedProducts.results);

    const handleFilter = (category) => {
        if (categoryQueryParams === null) {
            setCurrentPage(1);
            setFilterCategories([...filterCategories, category]);
            setProducts(dataFeaturedProducts.results.filter(product => (
                product.data.category.id === category || 
                filterCategories.includes(product.data.category.id)
            )))
            history.push('/products?category=' + category);
        } else if (!categoryQueryParams.includes(category)) {
            setCurrentPage(1);
            setFilterCategories([...filterCategories, category]);
            setProducts(dataFeaturedProducts.results.filter(product => (
                product.data.category.id === category || 
                filterCategories.includes(product.data.category.id)
            )))
            history.push(location.pathname + location.search + '_' + category);
        } else {
            setCurrentPage(1);
            setFilterCategories(filterCategories.filter(item => item !== category))
            setProducts(dataFeaturedProducts.results.filter(product => (
                product.data.category.id !== category && 
                filterCategories.includes(product.data.category.id)
            )))
            if (filterCategories.length === 1) {
                setProducts(dataFeaturedProducts.results);
            }
            let categoryURL = categoryQueryParams.split('_');
            let categoryRemoved = categoryURL.filter((id) =>  id !== category )
            if (categoryRemoved.length > 0) {
                history.push('/products?category=' + categoryRemoved.join('_'));
            } else {
                history.push('/products')
            }

        }
    }
    const removeFilter = () => {
        setCurrentPage(1);
        setFilterCategories([]);
        setProducts(dataFeaturedProducts.results);
        history.push('/products')
    }

    useEffect(() => {
        if( !isLoadingCategories && !isLoadingfeaturedProducts ){
            setIsLoading(false)
            setProducts(dataFeaturedProducts.results)
        }
    }, [isLoadingCategories, isLoadingfeaturedProducts, dataFeaturedProducts.results ])

    useEffect(() => {
        if (categoryQueryParams) {
            let categoryURL = categoryQueryParams.split('_');
            setFilterCategories(categoryURL)
        }
    }, [])

    return (
        <>
            {isLoading ? (
                <TextAlignItems>
                    <LoadingState><h4>Loading ...</h4></LoadingState>
                </TextAlignItems>
            ) : (
                <>
                    <SideBarFilter categories={dataCategories} handleFilter={handleFilter} 
                            activeCategories={filterCategories} removeFilter={removeFilter} />
                    <TextAlignItems>
                        <FeaturedProducts data={products} />
                        <Pagination data={dataFeaturedProducts} resultSize={12}
                            setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                    </TextAlignItems>
                </>)}
        </>
    )
}

export default AllProducts

/* eslint-disable max-len */
import SideBarFilter from "../components/layout/SideBarFilter"
import FeaturedProducts from "../components/products/FeaturedProducts"
import productsDB from '../mocks/en-us/products.json'
//import productCategory from '../mocks/en-us/product-categories.json';
import { useEffect, useState } from "react";
import Pagination from "../components/layout/Pagination";
import { TextAlignItems } from "../components/styles/SideBar.styles";
import { LoadingState } from "../components/styles/LoadingState.styles";
import { useCategoryBanner } from "../utils/hooks/useCategoryBanner";
import { useProductsFiltered } from "../utils/hooks/useProductsFiltered";
import { useHistory, useLocation } from "react-router-dom";

//import cat from '../mocks/en-us/product-categories.json'
//import cat from './mocks/en-us/product-categories.json'


const AllProducts = () => {
    const history = useHistory();
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const categoryQueryParams = searchParams.get('category')

    const { dataCategories, isLoadingCategories} = useCategoryBanner();
    //retornamos los 12 productos por pagina y el data filter
    const { productsFiltered, setProductsFiltered } = useProductsFiltered();

    // const [filterCategories, setFilterCategories] = useState(productsFiltered.dataProductsFiltered);
    // const [products, setProducts] = useState(productsFiltered.results);
    const [isLoading, setIsLoading] = useState(true);
    console.log('filtros y luego results')
    console.log(productsFiltered.datafilterCategories)
    console.log(productsFiltered.dataProductsFiltered)

    const handleFilter = (category) => {
        if (categoryQueryParams === null) {
            history.push('/products?category=' + category);
            //setProductsFiltered({...productsFiltered, datafilterCategories:category})
        } else if (!categoryQueryParams.includes(category)) {
            history.push(location.pathname + location.search + '_' + category);
        } else {
            let categoryURL = categoryQueryParams.split('_');
            let categoryRemoved = categoryURL.filter((id) =>  id !== category )
            if (categoryRemoved.length > 0) {
                history.push('/products?category=' + categoryRemoved.join('_'));
            } else {
                history.push('/products')
            }
        }
        // if (!filterCategories.includes(category)) {
        //     getProductsFiltered([...filterCategories, category])
        //     setFilterCategories([...filterCategories, category]);
        //     setProducts(productsDB.results.filter(product => (product.data.category.id === category || filterCategories.includes(product.data.category.id))))
        // } else {
        //     setFilterCategories(filterCategories.filter(item => item !== category))
        //     getProductsFiltered(filterCategories.filter(item => item !== category))
        //     setProducts(productsDB.results.filter(product => (product.data.category.id !== category && filterCategories.includes(product.data.category.id))))
        //     if (filterCategories.length === 1) {
        //         setProducts(productsDB.results);
        //         getProductsFiltered();
        //     }
        // }
    }
    const removeFilter = () => {
        // setFilterCategories([]);
        // setProducts(productsFiltered.dataProductsFiltered.results);
        // getProductsFiltered();
    }

    useEffect(() => {
        if( !isLoadingCategories && !productsFiltered.isLoadingProductsFiltered ){
            setIsLoading(false)
        }
    }, [isLoadingCategories, productsFiltered.isLoadingProductsFiltered ])
    

    return (
        <>
            {isLoading ? (
                <TextAlignItems>
                    <LoadingState><h4>Loading ...</h4></LoadingState>
                </TextAlignItems>
            ) : (
                <>
                    <SideBarFilter categories={dataCategories} handleFilter={handleFilter} activeCategories={productsFiltered.datafilterCategories} removeFilter={removeFilter} />
                    <TextAlignItems>
                        <FeaturedProducts data={productsFiltered.dataProductsFiltered.results} />
                        <Pagination />
                    </TextAlignItems>
                </>)}
        </>
    )
}

export default AllProducts
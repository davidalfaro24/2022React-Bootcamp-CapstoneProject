/* eslint-disable max-len */
import SideBarFilter from "../components/layout/SideBarFilter"
import FeaturedProducts from "../components/products/FeaturedProducts"
import productsDB from '../mocks/en-us/products.json'
import productCategory from '../mocks/en-us/product-categories.json';
import { useEffect, useState } from "react";
import Pagination from "../components/layout/Pagination";
import { TextAlignItems } from "../components/styles/SideBar.styles";
import { LoadingState } from "../components/styles/LoadingState.styles";


const AllProducts = () => {
    const [filterCategories, setFilterCategories] = useState([]);
    const [products, setProducts] = useState(productsDB.results);
    const [loadingState, setLoadingState] = useState(true);

    const handleFilter = (category) => {
        if (!filterCategories.includes(category)) {
            setFilterCategories([...filterCategories, category]);
            setProducts(productsDB.results.filter(product => (product.data.category.id === category || filterCategories.includes(product.data.category.id))))
        } else {
            setFilterCategories(filterCategories.filter(item => item !== category))
            setProducts(productsDB.results.filter(product => (product.data.category.id !== category && filterCategories.includes(product.data.category.id))))
            if (filterCategories.length === 1) {
                setProducts(productsDB.results);
            }
        }
    }
    const removeFilter = () => {
        setFilterCategories([]);
        setProducts(productsDB.results);
    }

    useEffect(() => {
        setTimeout(() => setLoadingState(false), 2000)
    }, [])

    return (
        <>
            {loadingState && (
                <TextAlignItems>
                    <LoadingState><h4>Loading ...</h4></LoadingState>
                </TextAlignItems>
            )}
            {!loadingState && (
                <>
                    <SideBarFilter categories={productCategory} handleFilter={handleFilter} activeCategories={filterCategories} removeFilter={removeFilter} />
                    <TextAlignItems>
                        <FeaturedProducts data={products} filterIndex={filterCategories} />
                        <Pagination />
                    </TextAlignItems>
                </>
            )}
        </>
    )
}

export default AllProducts
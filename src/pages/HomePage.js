/* eslint-disable max-len */
import classes from './HomePage.module.css'
import SliderBanners from '../components/products/SliderBanners';
import CategoryBanner from '../components/products/CategoryBanner';
import { Fragment } from 'react';
import FeaturedProducts from '../components/products/FeaturedProducts';
import featuredBanner from '../mocks/en-us/featured-banners.json';
import productCategory from '../mocks/en-us/product-categories.json';
import featuredproductList from '../mocks/en-us/featured-products.json'
import { AllProductsPage, DivButtonCentral } from '../components/styles/FeatureProd.styles';

const HomePage = () => {
    return (
        <Fragment>
            <section className={classes.home}>
                <SliderBanners data={featuredBanner} />
            </section>
            <section className={classes.category}>
                <CategoryBanner data={productCategory} />
            </section>
            <section className={classes.products}>
                <FeaturedProducts data={featuredproductList.results} />
            </section>
            <section className={classes.btn}>
                <DivButtonCentral>
                    <AllProductsPage className='btn' to={`/allProducts`}>View all products</AllProductsPage>
                </DivButtonCentral>
            </section>
        </Fragment>
    )
}

export default HomePage;
import classes from './HomePage.module.css'
import SliderBanners from '../components/products/SliderBanners';
import CategoryBanner from '../components/products/CategoryBanner';
import { Fragment } from 'react';
import FeaturedProducts from '../components/products/FeaturedProducts';
import featuredBanner from '../mocks/en-us/featured-banners.json';
import productCategory from '../mocks/en-us/product-categories.json';
import featuredproductList from '../mocks/en-us/featured-products.json'


const HomePage = () => {

    return (
        <Fragment>
            <section className={classes.home}>
                <SliderBanners data={featuredBanner} />
            </section>
            <section className={classes.category}>
                <CategoryBanner data={productCategory}/>
            </section>
            <section className={classes.products}>
                <FeaturedProducts data={featuredproductList}/>
            </section>
        </Fragment>


    )
}

export default HomePage;
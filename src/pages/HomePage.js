/* eslint-disable max-len */
import classes from './HomePage.module.css'
import SliderBanners from '../components/products/SliderBanners';
import CategoryBanner from '../components/products/CategoryBanner';
import { Fragment } from 'react';
import FeaturedProducts from '../components/products/FeaturedProducts';
import { AllProductsPage, DivButtonCentral } from '../components/styles/FeatureProd.styles';
import { TextAlignItems } from "../components/styles/SideBar.styles";
import { LoadingState } from "../components/styles/LoadingState.styles";

const HomePage = (props) => {
    console.log(props.featuredProducts)
    console.log(props.featuredBanners)
    return (
        <Fragment>
            {props.isLoadingPage ? (<TextAlignItems>
                <LoadingState><h4>Loading ...</h4></LoadingState>
            </TextAlignItems>) : <>
                <section className={classes.home}>
                    <SliderBanners data={props.featuredBanners} />
                </section>
                <section className={classes.category}>
                    <CategoryBanner data={props.categories} />
                </section>
                <section className={classes.products}>
                    <FeaturedProducts data={props.featuredProducts.results} />
                </section>
                <section className={classes.btn}>
                    <DivButtonCentral>
                        <AllProductsPage className='btn' to={`/products`}>View all products</AllProductsPage>
                    </DivButtonCentral>
                </section>
            </>}
        </Fragment>
    )
}

export default HomePage;
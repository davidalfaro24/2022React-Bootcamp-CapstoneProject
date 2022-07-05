import { Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from '../components/styles/HomePage.module.css'
import SliderBanners from '../components/products/SliderBanners';
import CategoryBanner from '../components/products/CategoryBanner';
import FeaturedProducts from '../components/products/FeaturedProducts';
import { AllProductsPage, DivButtonCentral } from '../components/styles/FeatureProd.styles';
import { TextAlignItems } from "../components/styles/SideBar.styles";
import { LoadingState } from "../components/styles/LoadingState.styles";

const HomePage = ({ isLoadingPage, featuredBanners, categories, featuredProducts }) => {
    return (
        <Fragment>
            {isLoadingPage ? (<TextAlignItems>
                <LoadingState><h4>Loading ...</h4></LoadingState>
            </TextAlignItems>) : <>
                <section className={classes.home}>
                    <SliderBanners data={featuredBanners} />
                </section>
                <section className={classes.category}>
                    <CategoryBanner data={categories} />
                </section>
                <section className={classes.products}>
                    <FeaturedProducts data={featuredProducts.results} />
                </section>
                <section className={classes.btn}>
                    <DivButtonCentral>
                        <AllProductsPage className='btn' to={`/products`}>
                            View all products
                        </AllProductsPage>
                    </DivButtonCentral>
                </section>
            </>}
        </Fragment>
    )
}

HomePage.propTypes = {
    featuredBanners: PropTypes.object,
    categories: PropTypes.object,
    featuredProducts: PropTypes.object,
    isLoadingPage: PropTypes.bool,
}

export default HomePage;
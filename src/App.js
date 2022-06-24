import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import NavBarCustom from './components/layout/NavBarCustom';
import HomePage from './pages/HomePage';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import Footer from './components/layout/Footer';
import AllProducts from './pages/AllProducts';
import { useCategoryBanner } from './utils/hooks/useCategoryBanner';
import { useFeaturedProducts } from './utils/hooks/useFeaturedProducts';
import { useProductsFiltered } from './utils/hooks/useProductsFiltered';

import banners from './mocks/en-us/featured-banners.json'
import categories from './mocks/en-us/product-categories.json'
import productsFe from './mocks/en-us/featured-products.json'
import productsTodos from './mocks/en-us/products.json'
import ProductDetail from './pages/ProductDetail';

function App() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const { data, isLoading } = useFeaturedBanners();
  const { dataCategories, isLoadingCategories} = useCategoryBanner();
  const { dataFeaturedProducts, isLoadingfeaturedProducts } = useFeaturedProducts();
  const { dataProductsFiltered, isLoadingProductsFiltered} = useProductsFiltered();
  
  useEffect(() => {
    // if (!isLoading && !isLoadingCategories ) {
    //   setIsLoadingPage(false);
    // }
    if (!isLoading && !isLoadingCategories && !isLoadingfeaturedProducts) {
      setIsLoadingPage(false);
    } 
    // else if (!isLoadingCategories && !isLoadingProductsFiltered) {
    //   setIsLoadingPage(false);
    // }
  }, 
  [isLoading, isLoadingCategories, isLoadingfeaturedProducts ])
  //[isLoading, isLoadingCategories, isLoadingfeaturedProducts])
  // console.log('En APP')
  // console.log(data)
  // console.log(isLoading);
  //isLoadingPage={isLoadingPage}
  return (
    <Fragment>
      <NavBarCustom />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home'/>
        </Route>
        <Route path='/home' >
          <HomePage featuredBanners={data} isLoadingPage={isLoadingPage}
            categories={dataCategories} featuredProducts={dataFeaturedProducts}/>
        </Route>
        <Route path='/products'>
          <AllProducts isLoadingPage={isLoadingPage} categories={dataCategories} 
            dataProductsFiltered={dataProductsFiltered} />
        </Route>
        <Route path='/product/:productId'>
          <ProductDetail/>
        </Route>
      </Switch>
      <Footer/>
    </Fragment>

  );
}

export default App;

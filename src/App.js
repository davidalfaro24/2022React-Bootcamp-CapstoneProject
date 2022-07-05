import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import NavBarCustom from './components/layout/NavBarCustom';
import HomePage from './pages/HomePage';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import Footer from './components/layout/Footer';
import AllProducts from './pages/AllProducts';
import { useCategoryBanner } from './utils/hooks/useCategoryBanner';
import { useFeaturedProducts } from './utils/hooks/useFeaturedProducts';
import ProductDetail from './pages/ProductDetail';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckOutPage';
import ItemNotFound from './components/layout/ItemNotFound';

function App() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const { data, isLoading } = useFeaturedBanners();
  const { dataCategories, isLoadingCategories} = useCategoryBanner();
  const { dataFeaturedProducts, isLoadingfeaturedProducts } = useFeaturedProducts();
  
  useEffect(() => {
    if (!isLoading && !isLoadingCategories && !isLoadingfeaturedProducts) {
      setIsLoadingPage(false);
    } 
  }, 
  [isLoading, isLoadingCategories, isLoadingfeaturedProducts ])

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
          <AllProducts />
        </Route>
        <Route path='/product/:productId'>
          <ProductDetail/>
        </Route>
        <Route path='/search'>
          <SearchPage />
        </Route>
        <Route path='/cart'>
          <CartPage />
        </Route>
        <Route path='/checkout'>
          <CheckOutPage />
        </Route>
        <Route path='*'>
          <ItemNotFound />
        </Route>
      </Switch>
      <Footer/>
    </Fragment>

  );
}

export default App;

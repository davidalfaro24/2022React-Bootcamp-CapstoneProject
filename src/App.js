import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import NavBarCustom from './components/layout/NavBarCustom';
import HomePage from './pages/HomePage';
import { Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import Footer from './components/layout/Footer';
import AllProducts from './pages/AllProducts';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <Fragment>
      <NavBarCustom />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/HomePage' >
          <HomePage />
        </Route>
        <Route path='/allProducts'>
          <AllProducts/>
        </Route>
      </Switch>
      <Footer/>
    </Fragment>

  );
}

export default App;

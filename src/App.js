import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import NavBarCustom from './components/layout/NavBarCustom';
import HomePage from './pages/HomePage';
import { Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import Footer from './components/layout/Footer';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <Fragment>
      <NavBarCustom />
      <Switch>
        <Route path='*' >
          <HomePage />
        </Route>
        <Route path='/HomePage' >
          <HomePage />
        </Route>

      </Switch>
      <Footer/>
    </Fragment>

  );
}

export default App;

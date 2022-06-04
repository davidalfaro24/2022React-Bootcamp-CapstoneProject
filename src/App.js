import logo from './logo.svg';
import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import { Fragment } from 'react';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <Fragment>
      <Header/>
      <HomePage/>
    </Fragment>
  );
}

export default App;

import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from './components/layout/Header';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <Header/>
  );
}

export default App;

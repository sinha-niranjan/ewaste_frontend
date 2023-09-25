
import './App.css';
import Header from './Components/Header/Header';
import Heroic from './Components/Heroic/Heroic';
import HomeDetail from './Components/HomeDetail/HomeDetail';
import LocationSearch from './Components/LocationSearch/LocationSearch';

function App() {
  return (
    <div className="App">
      <Header />
      <Heroic />
      <LocationSearch />
      <HomeDetail />
    </div>
  );
}

export default App;

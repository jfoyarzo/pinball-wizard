import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import MainNav from './Components/Navbar';
import Home from './views/Home';
import UnderConstruction from './views/Under_Construction';
import { getCities } from './redux/topCities/topCities';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  const top = useSelector((state) => state.topCities);
  return (
    <Router>
      <MainNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {top.map((region) => <Route path={`/${region.city}`} element={<UnderConstruction />} key={region.city} />)}
      </Routes>
    </Router>
  );
}

export default App;

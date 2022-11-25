/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import MainNav from './Components/Navbar';
import Home from './views/Home';
import Details from './views/Details';
import { getCities } from './redux/topCities/topCities';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCities());
  }, []);

  const top = useSelector((state) => state.topCities);
  return (
    <Router>
      <MainNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {top.map((region) => <Route path={`/${region.city.split(' ').join('')}`} element={<Details city={region.city} machines={region.machineCount} />} key={region.city} />)}
      </Routes>
    </Router>
  );
}

export default App;

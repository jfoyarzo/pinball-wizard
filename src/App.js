import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainNav from './Components/Navbar';
import Home from './views/Home';
import UnderConstruction from './views/Under_Construction';

function App() {
  return (
    <Router>
      <MainNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;

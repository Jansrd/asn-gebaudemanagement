import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './style/App.css';
import Uberuns from './pages/Uberuns';
import Deinstleistungen from './pages/Deinstleistungen';
import RouterScrollToTop from './RouterScrollToTop';
import Kontaktiereuns from './pages/Kontaktiereuns';
import Rights from './pages/Impressum';
import Datenschutzerklarung from './pages/Datenschutzerklarung';

function App() {
  return (
    <div className="app">
        <Router> 
            <RouterScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/über-uns" element={<Uberuns />} />
                <Route path="/dienstleistungen" element={<Deinstleistungen />} />
                <Route path="/kontaktiere-uns" element={<Kontaktiereuns />} />
                <Route path="/impressum" element={<Rights />} />
                <Route path='/datenschutzerklärung' element={<Datenschutzerklarung />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;

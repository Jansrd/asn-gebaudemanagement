import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './style/App.css';
import Footer from './components/Footer';
import Uberuns from './pages/Uberuns';
import Deinstleistungen from './pages/Deinstleistungen';
import RouterScrollToTop from './RouterScrollToTop';

function App() {
  return (
    <div className="app">
        <Router> 
            <RouterScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/über-uns" element={<Uberuns />} />
                <Route path="/dienstleistungen" element={<Deinstleistungen />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;

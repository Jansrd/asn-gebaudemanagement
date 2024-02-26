import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './style/App.css';

function App() {
  return (
    <div className="app">
        <Router>
            <Header />
            <Routes>
                <Route path="/startseite" element={<Home />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;

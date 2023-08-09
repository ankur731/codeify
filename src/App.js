import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/service" element={<ServicePage />}/>
        <Route path="/service/websitedevelopment" element={<ServiceDetailPage page="web"/>}/>
        <Route path="/service/appdevelopment" element={<ServiceDetailPage page="app"/>}/>
        <Route path="/service/softwaredevelopment" element={<ServiceDetailPage page="software"/>}/>
        <Route path="/service/digitalmarketing" element={<ServiceDetailPage page="digital"/>}/>
        <Route path="/contact" element={<ContactPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

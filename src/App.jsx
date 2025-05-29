import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './components/contact';
import About from './components/About';
import SchoolFinder from './pages/SchoolFinder';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/search-school" element={<SchoolFinder />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

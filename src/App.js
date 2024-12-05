import LoginIndex from './component/views/login.view';
import ProductIndex from './component/views/product.view';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpIndex from './component/views/signup.view';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import Exercises from './component/contents/ProductForm/exercises';
import Profile from './pages/Profile';
import AboutPage from './pages/AboutPage';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductIndex />} />
        <Route path="/exercises/:topic_id" element={<Exercises />} />
        <Route path="/exercise-segments/:segment_id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginIndex />} />
        <Route path="/sign" element={<SignUpIndex />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './components/dashboard/Dashboard';
import Cart from './components/cart/Cart';
import Home from './components/layout/Home';
import Header from './components/header/Header';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} /> {/* Home page */}
          <Route path="/" element={<Home />} /> {/* Ensure home renders correctly */}
          <Route path="/products" element={<Products/>} /> {/* Products route */}
          <Route path="/cart" element={<Cart />} /> {/* Cart route */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

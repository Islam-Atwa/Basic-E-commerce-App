// import logo from './logo.svg';

// import './App.css';
import { Link } from "react-router-dom";

import Navbar from "./compoenents/Navbar"; // Importing Navbar component
import Slider from "./compoenents/Slider";    // Importing Slider component
import About from "./compoenents/About";      // Importing About component
import ProductsList from "./compoenents/ProductsList"; 
import {Routes, Route} from "react-router-dom"; 
import Products from "./compoenents/Product";
import ProductDetails from "./compoenents/ProductsDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
      <About />
    </div>
  );
}

export default App;

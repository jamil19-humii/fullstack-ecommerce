import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
// Import the new pages
import Shop from "./Pages/Shop";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import { CartProvider } from "./CartContext";

import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const MyContext = createContext();

function App() {
    const [countryList, setCountryList] = useState([]);
    const [selectedCountry, setselectedCountry] = useState('');
       
    useEffect(() => {
       getCountry("https://countriesnow.space/api/v0.1/countries/");
    }, []);

    const getCountry = async (url) => {
      try { 
        const response = await axios.get(url);
        setCountryList(response.data.data);
        console.log(response.data.data);
      } catch (error) {
         console.error("Could not fetch countries:", error);
      }
    };
    
    const values = {
      countryList,
      setselectedCountry,
      selectedCountry  
    };

    return (
      <CartProvider>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            {/* New Routes Added Here */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          
        </MyContext.Provider>
      </BrowserRouter>
      </CartProvider>
    );
}

export default App;
export { MyContext };
<<<<<<< HEAD
import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App
=======
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Product from "../Pages/Product";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
>>>>>>> c5871be60692d664b3c1a63a5a2976d811cb1cc7

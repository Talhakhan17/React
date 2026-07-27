<<<<<<< HEAD
// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Navbar from "../Components/Navbar"
import Product from "../Pages/Product";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
=======
<<<<<<< HEAD
// import React from 'react'

import Sec1 from "./Components/Section1/Sec1";
import Sec2 from "./Components/Section2/Sec2";
// import Sec1 from "./Components/Section1/Navbar"
const App = () => {
  const users = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1673976275849-986056b83cae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag: "Satisfied",
    },
    {
      id: 2,
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      tag: "Underserved",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag: "Whatever",
    },
  ];

  return (
    <div>
      <Sec1 users={users} />
      <Sec2 />
>>>>>>> 5f33919344d8aae4d8a4e8c83d6d75ff768195e0
    </div>
  );
};

export default App;
<<<<<<< HEAD
=======
=======
import React from 'react'

const App = () => {
  return (
    <div id="parent">
      <h1 id='child'>Hello World</h1>
      <h2>Hello </h2>

      
    </div>
  )
  
}

export default App
>>>>>>> 66b815bbdcb843141fb0237f692f9b4ef9adc2b7
>>>>>>> 5f33919344d8aae4d8a4e8c83d6d75ff768195e0

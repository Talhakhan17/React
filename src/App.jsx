import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import { Route, Routes } from "react-router-dom";
import Notfound from "./Pages/Notfound";
import Mens from "./Pages/Mens";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Courses from "./Pages/Courses";
import CourseDetail from "./Pages/CourseDetail";
import Navbar2 from "./Pages/Navbar2";
const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Course" element={<Courses />}/>
        <Route path="/Course/:CourseId" element={<CourseDetail />}/>
        {/* <Route path="/Courses/:id" element {<CourseDetail/>}/> */}

        <Route path="/Product" element={<Product />}>
          <Route path="men" element={<Mens />} />
          <Route path="Women" element={<Women />} />
          <Route path="Kids" element={<Kids />} />
        </Route>



        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import { About, Home, Product } from "./Pages";
import styled from "styled-components";
import { NavBar,SideBar,Footer } from "./Components";
function App() {
  
  return (
    < >
       <NavBar  />
       

      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element ={<Product/>}/>

      </Routes>
     
    </>
  );
}

export default App;

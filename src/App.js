import { Route, Routes } from "react-router-dom";
import { About, Home, Products,SingleProduct ,Cart} from "./Pages";

import { NavBar,SideBar,Footer } from "./Components";
function App() {
  
  return (
    < >
       <NavBar  />
       

      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element ={<Products/>}/>
        <Route path="/cart" element ={<Cart/>}/>

        <Route path="/products/:id" element ={<SingleProduct/>}/>


      </Routes>
      <Footer/>
    </>
  );
}

export default App;

import React, { useContext, useState } from "react";
import { createContext } from "react";
const NavContext = createContext();

function NavProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(true);
  };
  const handleCloseClick =()=>{
    setIsOpen(false);
  }

  const navLinks =[
    {name:'Home',path:'/'},
    {name:'About',path:'/about'},
    {name:'Products',path:'/products'}
  ]
  const valueToShare = { isOpen, setIsOpen, handleMenuClick ,handleCloseClick,navLinks};
  return (
    <NavContext.Provider value={valueToShare}>{children}</NavContext.Provider>
  );
}

const useNavContext = () => {
  return useContext(NavContext);
};
export default NavProvider;
export { useNavContext };

import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useNavContext } from "../Context/Nav_Context";
import { useCartContext } from "../Context/CartContext";
function SideBar() {
  const { isOpen, handleCloseClick, navLinks } = useNavContext();
  const {totalCount} = useCartContext();
  return (
    <Wrapper>
      <div className={` ${isOpen ? "show_sidebar sidebar" : "sidebar"}`}>
        <div className="logo_icon_div">
          <span className="logo">
            Shop<span>New</span>
          </span>
          <span className="close-icon" onClick={() => handleCloseClick()}>
            <IoClose />
          </span>
        </div>
        <aside>
          <ul>
            {navLinks.map((link, i) => {
              return (
                <li key={i}>
                  <NavLink
                    to={link.path}
                    className="nav-link"
                    onClick={() => handleCloseClick()}
                    style={({ isActive }) => ({
                      color: isActive ? "#27374D" : "#27374D",
                    })}
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </aside>
        <div className="cart-loginbtn-wrapper">
          <span className="cart">
            <span className="cart-icon">
              <AiOutlineShoppingCart />
              <div>
                <span>{totalCount}</span>
              </div>
            </span>
          </span>
          <div className="login-btn">LogIn</div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  text-align: center;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .sidebar {
    position: fixed;
    top: 20px;
    left: 0;
    right:0;
    width: 100%;
    height: 100%;
    transition: 0.2s ease-in-out;
    z-index: -1;
    transform: translate(-100%);
  }
  .show_sidebar {
    z-index: 99;

    transform: translate(0);
    background-color: white;
    display: flex;
    width: 91%;
    
    margin-top: 10px;
    margin-left: 30px;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    transition: 0.3s ease-out;
  }
  aside {
    
    justify-content: flex-start;
    display: flex;
    width: 100%;
    text-align: left;
    margin-top: 50px;
    margin-bottom: 50px;
    align-items: flex-start;
  }
  ul li {
    list-style-type: none;
    text-decoration: none;
    margin-top: 30px;
  }
  .nav-link {
    text-decoration: none;
    color: #27374d;
      font-size:20px;
      font-weight:500;
  }
  .nav-link:hover {
    border-bottom: 2px solid #213363;
  }
  .logo_icon_div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cart {
    font-size: 32px;
    position: relative;
    cursor: pointer;
    .cart-icon div {
      position: absolute;
      top: 0;
      right: -10px;
      border-radius: 50%;
      display: flex;
      width: 24px;
      height: 24px;
      justify-content: center;
      align-items: center;
      background-color: #f86f03;
      background-color: #f86f03;
      span {
        font-size: 18px;
        color: white;
      }
    }
  }
  .login-btn {
    cursor: pointer;
    font-weight: 600;
    font-size: 24px;
    color: #27374d;
  }
  .cart-loginbtn-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    font-size: 20px;
  }
  .logo {
    font-size: 32px;
    font-style: italic;
    font-weight: 900;
    /* color:#F86F03 */
    span {
      color: #f86f03;
    }
  }
  .close-icon {
    display: block;
    color: #f86f03;
    font-size: 36px;
    font-weight: 900;
  }

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
  }

  @media (max-width: 426px) {
    .show_sidebar {
      width: 92%;
      margin-top: 10px;
      margin-left: 10px;
     
    }
  }

  @media (min-width: 769px) {
    .sidebar {
      display: none;
    }
  }
`;
export default SideBar;

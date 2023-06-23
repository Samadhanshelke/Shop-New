import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { useNavContext } from "../Context/Nav_Context";
import { Link } from "react-router-dom";

function NavBar() {
  const { isOpen, handleMenuClick, navLinks } = useNavContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">
          Shop<span>New</span>
        </span>
        <ul className="nav-links">
          {navLinks.map((link, i) => {
            return (
              <li key={i}>
                <Link to={link.path} className="nav-link">
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="cart-loginbtn-wrapper">
          <span className="cart">
            <span className="cart-icon">
              <AiOutlineShoppingCart />
              <div>
                <span>5</span>
              </div>
            </span>
          </span>
          <div className="login-btn">LogIn</div>
          <div onClick={() => handleMenuClick()} className="hamburger">
            <HiMenu />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .cart,.login-btn{
    display: none;
  }
  .logo {
    font-size: 32px;
    font-style: italic;
    font-weight: 900;

    span {
      color: #f86f03;
    }
  }

  .hamburger {
    display: block;
    color: #f86f03;
    font-size: 36px;
    font-weight: 900;
  }
  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .hamburger {
      display: none;
    }
    .nav-center {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid red;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        list-style-type: none;
        color: #213363;
        font-size: 18px;
        text-decoration: none;
        margin: 0 12px;
      }
    }
    .nav-link {
      text-decoration: none;
    }
    .nav-link:hover {
      border-bottom: 2px solid #213363;
    }

    .cart-loginbtn-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      font-size: 20px;
      
    }

    .cart {
      font-size: 32px;
      position: relative;
      display: block;
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
      display: block;
      cursor: pointer;
      font-weight: 300;
      font-size: 24px;
      color: #27374d;
      color: black;
    }
  }
`;
export default NavBar;

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


  
<!-- navbar -->
 import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {HiMenu} from 'react-icons/hi'
import { useNavContext } from "../Context/Nav_Context";
import { NavLink } from "react-router-dom";

function NavBar() {
  
  const {isOpen,handleMenuClick,navLinks} = useNavContext();
  return (
    <Wrapper>
    <div className={` ${isOpen ?'isclose':'navbar'}`}>

      <span className="logo">
        Shop<span>New</span>
        
      </span>
      <ul>
      {navLinks.map((link,i)=>{
          return(
           <li key={i}>
          <NavLink
            to={link.path}
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "#27374D" : "#27374D",
            })}
          >
            {link.name}
          </NavLink>
        </li>
          )
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
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .navbar{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  }
  .isclose{
    display: none;
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
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    li {
      list-style-type: none;
      color: #213363;
      font-size: 18px;
      text-decoration: none;
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
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    font-size: 20px;
  }
  .hamburger {
    display: none;
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
  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
     ul{
      display: none;
     }
     .cart{
      display: none;
     }
     .login-btn{
      display: none;
     }
     .hamburger{
      display: block;
      color: #f86f03;
      font-size:36px;
      font-weight:900;
     }
     
  }

  @media (min-width: 769px) {
      .isclose{
    /* display: flex; */
    width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  }
  }
`;
export default NavBar;

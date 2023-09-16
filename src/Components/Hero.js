import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useNavContext } from "../Context/Nav_Context";


function Hero() {
  const { isOpen, handleCloseClick, navLinks } = useNavContext();
  return (
    <Wrapper>
      <div className={`main ${isOpen ? "whitebg": " "}`}>
        <div className="main_content">
          <h1 className="main_heading">Get Your Comfort Products</h1>
          <span className="main_para">
            Lorem ipsum dolor sit, amet Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus voluptatem, deleniti corporis minima amet
            porro aliquam eius at blanditiis veniam. consectetur adipisicing
            elit. Aut doloribus ipsam deserunt ducimus deleniti quae
          </span>
          <Link to="/products">
            <button className="btn">Shop Now</button>
          </Link>
        </div>
        <div className="main_img">
          <img
            className="jewlerry_img"
            src="https://3djewelsindia.com/images/new-ecom-images/Banner-1.jpg"
            alt=""
          />
          <img
            className="boy_img"
            src="https://cdn11.bigcommerce.com/s-sp6ookcq2f/products/3990/images/15206/16_MINIHONEY_RESIZEWEBSITE_de5d07c1-ce90-4a4d-945a-1c46c47ea702__62306.1660556659.1280.1280.jpg?c=1"
            alt=""
          />
          {/* <img
            className="abstrt_img"
            src="https://png.pngtree.com/thumb_back/fh260/background/20220428/pngtree-blurred-background-website-blue-texture-image_1105018.jpg"
            alt=""
          /> */}
        </div>
      </div>
   
    </Wrapper>
  );
}
const Wrapper = styled.section`
  width: 90vw;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  margin: 50px auto 0 auto;
  .main {
    display: flex;
    width:100%;
    max-width:1200px;
    justify-content: space-between;
    height: 80vh;
    align-items: center;
    gap: 20px;
    margin:0 auto 30px auto;
    
  }
 
  .main_content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 600px;
  }
  .main_heading {
    font-size: 40px;
    color: #27374d;
    width: 400px;
  }
  .main_para {
    color: #27374d;
    letter-spacing: 1.1px;
    line-height: 1.7;
    word-spacing: 0.5px;
  }
  .btn {
    padding: 12px 16px;
    border-radius: 6px;
    margin-top: 18px;
    border: none;

    background-color: #f86f03;
    color: white;
    cursor: pointer;
    letter-spacing: 1.2px;
    font-size: 16px;
  }
  .main_img {
    display: flex;
    justify-content: center;
    align-items: center;
  
    position: relative;
    .jewlerry_img {
      width: 600px;
      height: 300px;
    }
    .boy_img {
      width: 200px;
      height: 300px;

      position: absolute;
      top: -150px;
      right: 22px;
    }
    .abstrt_img {
      width: 300px;
    }
  }
  @media (max-width: 1025px) {
    width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    .main {
      display: flex;
      width: 90%;
      margin: 0 auto;
      justify-content: flex-start;
      align-items: center;
    }

    .main_content {
      width: 400px;
    }

    .main_img {
      .jewlerry_img {
        width: 500px;
        height: 300px;
      }
      .boy_img {
        width: 150px;
        height: 200px;

        position: absolute;
        top: -85px;
        right: 22px;
      }
    }
  }
  @media (max-width: 768px) {
    .main_img {
      display: none;
    }
    .main_content {
    
    width: 700px;
  }
  }
  @media (max-width: 426px) {
    .main_content {
      width: 400px;
      /* max-width: 100%; */
    }
    .whitebg{
   visibility: hidden;
 height: 100vh;
    z-index: -1;
  }
  }
  @media (max-width: 376px) {
    .main_content {
      width: 350px;
      /* max-width: 100%; */
    }
    .main_heading {
      font-size: 36px;
      color: #27374d;
      width: 350px;
    }
  }

  @media (max-width: 321px) {
    .main_content {
      width: 300px;
      /* max-width: 100%; */
    }
    .main_heading {
      font-size: 34px;
      color: #27374d;
      width: 300px;
    }
  }
`;
export default Hero;
import React from "react";
import { styled } from "styled-components";
import {
  Hero,
  FeaturedProducts,
  Contact,
  Mission,
  Footer,
} from "../Components";

function AboutPage() {
  return (
    <Wrapper>
      <img
        className="jewlerry_img"
        src="https://3djewelsindia.com/images/new-ecom-images/Banner-1.jpg"
        alt=""
      />
      <div className="headers">
         <div>
          <h1>Our Story</h1>
           <span className="undeline"></span>
         </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolores
          odit libero incidunt laborum distinctio esse doloribus? Temporibus
          iste sint aut impedit, pariatur, voluptatem, similique minus a debitis
          architecto voluptatibus! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis eaque reprehenderit minus ad aliquam
          numquam. Eveniet maxime sunt, ex nam iure omnis sed perferendis
          exercitationem fugiat vel inventore adipisci ullam consectetur
   
         
          
        </p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  padding:0 80px;
  height:70vh;
  gap: 50px;
  justify-content: center;
  align-items: flex-start;
  margin: 50px  auto ;
  /* margin-left:-30px; */

  .jewlerry_img {
    width: 600px;
    border-radius: 16px;
    height: 400px;
  }
  p {
    width: 600px;
    margin-top: 20px;
    line-height: 1.9;
    color: #27374d;
    font-size:17px;
    font-weight:500;
  }
  h1{
    font-size: 40px;
    color: #27374d;
  }
  .headers{
    position: relative;
    span{
      position: absolute;
      top:54px;
      left:0;
      width:120px;
      height:3px;
      border-radius: 4px;
      background-color:  #f86f03;
    }

  }
  @media (max-width: 1025px) {
     .jewlerry_img{
       height:300px;
       width:400px;
     }
  }

  @media (max-width: 768px) {
     flex-direction:column;
     width: 100%;
  max-width: 600px;
     margin-top:120px;
     .jewlerry_img{
       height:500px;
       width:500px;
     }
  }
  @media (max-width: 426px) {
  
     p{
      width:400px;
      height:400px;
     }
     .jewlerry_img{
       height:200px;
       width:200px;
     }
  }
`;
export default AboutPage;

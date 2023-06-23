import React from "react";
import styled from "styled-components";
import { TbTargetArrow, TbHistory } from "react-icons/tb";
import { GiDiamondHard } from "react-icons/gi";
function Mission() {
  return (
    <Wrapper>
      <div className="mission_headers">
        <h1>
          Custom Products <br /> Built Only For You
        </h1>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          expedita alias repudiandae 
          quibusdam molestiae enim doloribus quas amet sequi Lorem ipsum dolor
          sit amet, consectetur
        </span>
      </div>
      <div className="mission_container">
        <div>
          <span className="icon">
            <TbTargetArrow />
          </span>
          <h3>Mission</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, qui
            cum? Dolorum quibusdam ducimus Lorem ipsum dolor sit amet. Lorem
            ipsum dolor sit amet.
          </span>
        </div>
        <div>
          <span className="icon">
            <GiDiamondHard />
          </span>
          <h3>Vission</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, qui
            cum? Dolorum quibusdam ducimus Lorem ipsum dolor sit amet. Lorem
            ipsum dolor sit amet.
          </span>
        </div>
        <div>
          <span className="icon">
            <TbHistory />
          </span>
          <h3>History</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, qui
            cum? Dolorum quibusdam ducimus Lorem ipsum dolor sit amet. Lorem
            ipsum dolor sit amet.
          </span>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  background-color: #eaded7;
  height: 400px;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 100%;

  .mission_headers {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
    height: 250px;
    h1 {
      font-size: 35px;
      font-weight: 900;
      color: #453227;
      color: #102a42;
    }
    span {
      color: #595744;
      color: #102a42;
      width:700px;
      font-size: 15px;
      letter-spacing: 0.9px;
    }
  }
  .mission_container {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;

    div {
      display: flex;
      justify-content: center;
      gap: 10px;
      border-radius: 6px;
      align-items: center;
      flex-direction: column;
      width: 350px;
      height: 250px;
      text-align: center;
      background-color: #c5a491;
      padding: 10px 15px;
      h3 {
        color: #453227;
        /* color: #102a42; */
        font-size: 25px;
      }
      span {
        color: #5f4435;
        font-size: 17px;
      }
      .icon {
        background-color: #eaded7;
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 40px;
      }
    }
  }
  @media (max-width:1025px){
    width:100%;
    height:100%;
    
    .mission_container {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
     
    }
     .mission_headers {
         width:100%;
         span{
            width:600px;
            max-width:100%;
            text-align: left;
         }
         
    }
  }
  @media (max-width:769px){
    justify-content:flex-start;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    /* margin: 0 auto; */
    .mission_headers{
      flex-direction: column;
      width:90%;
      margin: 0 auto;
     align-items: flex-start;
     justify-content: center
     
    }
    .mission_container {
      div{
        width:80%;
      }
    }
  }
  @media (max-width:425px){
    .mission_container {
      div{
        width:80%;
      }
    }
  }

  @media (max-width:321px){
    .mission_headers {
      margin-top: 80px;
      margin-bottom: 60px;
    }
  }
`;
export default Mission;

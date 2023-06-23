import React from "react";
import styled from "styled-components";
function Contact() {
  return (
    <Wrapper>
      <div className="left_side">
        <h1>Join our newsletter and get rewards</h1>
        
      </div>
      <div className="right_side">
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <form action="https://formspree.io/f/mdovqbvw" method="POST">
          <input type="text" placeholder="Enter Email" name="_replyto" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`

  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-start;
  margin: 200px auto 0 auto;
  width: 90%;
  .left_side {
    /* width: 52%; */

    h1 {
      font-size: 32px;
      color: #102a42;
      margin-bottom: 20px;
    }
    
  }
  .right_side {
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
    p {
      color: #27374d;
      letter-spacing: 1.1px;
      line-height: 1.9;
      word-spacing: 0.5px;
      width:700px;
    }
    form input {
      width: 400px;
      border: 2px solid black;
      height: 30px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      padding: 6px 8px;
    }
    form input::placeholder {
      color: black;
      padding: 0 5px;
    }
    form button {
      height: 45px;
      border: 2px solid black;
      border-left: none;

      background-color: #c5a491;
      color: black;
      padding: 0px 12px;
      font-weight: 300;
      padding-top: 4px;
      padding-bottom: 6px;
      letter-spacing: 1.1px;
      font-size: 16px;
    }
  }
  @media (max-width: 1025px) {
    margin-top:20px;
    margin-left:auto ;
    margin-right: auto;
    .right_side {
     
      p{
        width:400px;
      }
      form input{
        width:300px;
      }
    }

  }

  @media (max-width: 769px) {
    height:100px;
    margin-top: 200px;
  .right_side{
    flex-direction: column;
    form input{
        width:300px;
        margin-top: 20px;
      }
  }


  }
  @media (max-width: 426px) {
    margin-top: 150px;
    height:200px;
    .right_side{
     
      form input{
        width: 200px;
      }
    }
  }
  @media (max-width: 376px) {
     .right_side{
      p{
        width: 300px;
      }
     }
  }

  @media (max-width: 321px) {
    height:300px;
    margin-top: 100px;
     .right_side{
      form input{
        width: 150px;
      }
     }
  }
`;
export default Contact;

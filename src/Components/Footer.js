import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Wrapper>
      <div>
        © {new Date().getFullYear()} <span className="logo"> Shop<span>New </span></span>
        All rights reserved
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin-top: 180px;
  display: flex;
  /* overflow-x: hidden; */
  
  /* width:98.9vw; */
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  height: 80px;
  background-color: #222222;
  div {
    font-size: 20px;
    word-spacing: 1.4px;

    span {
      font-size: 20px;
    }
  }
  .logo {
    /* font-size: 32px; */
    font-style: italic;
    font-weight: 900;
    letter-spacing: 1.2px;
    /* color:#F86F03 */
    span {
      color: #f86f03;

    }
  }
  @media (max-width: 1024px) {
  }
`;
export default Footer;

import React from "react";
import { styled } from "styled-components";
import Product from "./Product";
function GridView({ Products }) {
  return (
    <Wrapper>
      <div className="grid-container">
        {Products &&
              Array.isArray(Products) && Products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .grid-container {
    display: grid;
    row-gap: 30px;
    column-gap: 10px;
  }
  @media (min-width: 992px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1200px) {
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export default GridView;

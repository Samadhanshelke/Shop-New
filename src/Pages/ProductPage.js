import React from "react";
import { styled } from "styled-components";
import {Filter,Sort,ProductList} from '../Components'
function ProductPage() {
  return (
    <Wrapper>
      <div className="section_center">
        <Filter />

        <div>
          <Sort/>
          <ProductList/>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  
  .section_center{
    margin: 50px auto 0 auto;
    display: grid;
    width: 90%;
  height: 100%;
  max-width: 1200px;

  }
  @media (min-width: 768px) {
    .section_center{
      grid-template-columns: 200px 1fr;
      column-gap:40px;
    }
  }
`;
export default ProductPage;

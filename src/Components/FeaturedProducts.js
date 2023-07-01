import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../Components";
import { useDataContext } from "../Context/DataContext";
function FeaturedProducts() {
  const { isLoading, data }= useDataContext();

 
  // console.log(data);
  return (
    <Wrapper>
      <div className="featured">
        <div className="main_featured_div">
          <h1>Featured Products</h1>

          <span></span>
        </div>

        {isLoading ? (
          <div>Loading</div>
        ) : (
          <div className="featured_products">
            {data &&
              Array.isArray(data) &&
              data.slice(0, 3).map((product) => {
                return <Product  product={product} />;
              })}
          </div>
        )}

        <Link to="/products">
          <button className="btn">All Products</button>
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #f1f5f8;
  margin: 0 auto;
  align-items: center;

  .featured {
    width: 100%;
    max-width: 1200px;
    margin: 50px auto 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 2px solid red; */
  }
  .main_featured_div {
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    h1 {
      margin-bottom: 6px;
      font-size: 30px;
      color: #102a42;
    }
    span {
      position: absolute;
      width: 120px;
      height: 4px;
      background-color: #f86f03;
      border-radius: 12px;
    }
  }

  .featured_products {
    display: flex;
    gap: 30px;
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin: 30px auto 0 auto;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .btn {
    padding: 12px 16px;
    border-radius: 8px;
    margin-top: 18px;
    border: none;
    /* background-color:#a83432; */
    background-color: #f86f03;
    font-size: 16px;
    color: white;
    cursor: pointer;
    letter-spacing: 1.2px;
  }

  @media (max-width: 1025px) {
    .featured_products {
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 426px) {
    width: 100%;

    .featured_products {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 426px) {
    width: 100%;

    .featured {
      width: 100%;
      margin: 50px auto 50px auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
export default FeaturedProducts;

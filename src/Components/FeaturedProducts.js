import React from "react";
import { useQuery } from "react-query";
import customFetch from "../Components/Utils";
import { Link } from "react-router-dom";
import styled from "styled-components";
function FeaturedProducts() {
  const result = useQuery({
    queryKey: ["Products"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });
  const { data, isLoading } = result;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Wrapper>
      <div className="featured">
        <div className="main_featured_div">
          <h1>Featured Products</h1>

          <span></span>
        </div>
        <div className="featured_products">
          {data.slice(0, 3).map((Product) => {
            return (
              <div className="product_div">
                <img src={Product.image} alt="" />
                <div>
                  <span className="title">
                    {Product.title.length > 20
                      ? `${Product.title.slice(0, 20)}...`
                      : Product.title}
                  </span>
                  <span>$ {Product.price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/products">
          <button className="btn">All Products</button>
        </Link>
      </div>
    </Wrapper>
  );
}
// color: #102a42;
// background-color: #f86f03;
// background-color: #f86f03;
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
    /* border:4px solid black; */
    /* justify-content: space-between; */
    align-items: center;
    justify-content: center;
    margin: 30px auto 0 auto;
    flex-wrap: wrap;
    box-sizing: border-box;

  }

  .product_div {
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 370px;
    max-width: 300px;
    img {
      width: 90%;
      height: 220px;
      border: 2px solid black;
      padding: 12px;
      border-radius: 6px;
    }
    .title {
      color: #102a42;
      letter-spacing: 1.2px;
      font-size: 16px;
    }
    div {
      display: flex;
      justify-content: space-between;
    }
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
    
   
    .featured {
      width: 100%;
      margin: 50px auto 50px auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
     
    }
    .featured_products {
      width:100%;
      display: flex;
      justify-content: center;
      align-items: center;
     
    }
  }
  @media (max-width: 321px) {
    .product_div {
      justify-content: center;
      margin: 0 auto;
     max-width: 260px;
      
    }
  }
`;
export default FeaturedProducts;

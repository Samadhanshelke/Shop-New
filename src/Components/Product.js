import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { BsSearch } from "react-icons/bs";
function Product({ product }) {
  const { image, title, price, id } = product;
  return (
    <Wrapper>
      <div className="product_div">
        <div className="image_div">
          <img src={image} alt="" />
          <Link className="search_icon" to={`/products/${id}`}>
            <BsSearch />
          </Link>
        </div>

        <div>
          <span className="title">
            {title.length > 20 ? `${title.slice(0, 20)}...` : title}
          </span>
          <span>$ {price}</span>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .image_div {
    position: relative;
    /* background-color: #222; */
  }
  .image_div:hover .search_icon {
    display: flex;
  }
  .search_icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: hsl(22, 31%, 52%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: all 0.3s linear;
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: #fff;
    }
  }
  .product_div:hover img {
    opacity: 0.5;
  }
  .product_div:hover .search_icon {
    opacity: 1;
  }
  .product_div {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    gap: 22px;
    width: 300px;
    /* max-width: 300px; */
    img {
      width: 92%;
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

  @media (max-width: 321px) {
    .product_div {
      justify-content: center;
      margin: 0 auto;
      max-width: 260px;
    }
  }
`;
export default Product;

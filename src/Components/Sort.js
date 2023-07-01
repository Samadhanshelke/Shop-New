import React from "react";

import { styled } from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../Context/Filter_Context";
function Sort() {
  const {
    setgridview,
    setlistview,
    gridView,
    filtered_products: Products,
    isLoading,
    updateSort,sorted
  } = useFilterContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Wrapper>
      <div className="btn-container">
        <button
          className={`${gridView ? "active" : null}`}
          onClick={() => setgridview()}
        >
          <BsFillGridFill />
        </button>
        <button
          className={`${gridView ? null : "active"} `}
          onClick={() => setlistview()}
        >
          <BsList />
        </button>
      </div>

      <p>
        {Products && Array.isArray(Products) && Products.length} Products found
      </p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select name="sort" id="sort" onChange={updateSort} value={sorted}>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  column-gap: 20px;
  margin-bottom: 40px;
  .btn-container {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      width: 25px;
      height: 25px;
      border: 1px solid black;
      cursor: pointer;
      color: black;
      background: transparent;
      svg {
        font-size: 16px;
      }
    }
    .active {
      background-color: black;
      color: white;
    }
  }
  p {
    color: #27374d;
  }
  form {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    column-gap:10px;
    color: #27374d;
    label{
      font-size: 16px; 
    }
    select {
      font-size: 16px;
      border: none;
      color: #27374d;
      font-weight: 500;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
`;
export default Sort;

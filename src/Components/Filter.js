import React from "react";
import { styled } from "styled-components";
import { useFilterContext } from "../Context/Filter_Context";
import { getUniqueValues } from "./Utils";
function Filter() {
  const { filter, updateFilters, data: products,clearFilters } = useFilterContext();
  const { text, category, min_price, max_price, price } = filter;

  const categories = getUniqueValues(products, "category").sort((a, b) => a.localeCompare(b));;

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="search"
              onChange={updateFilters}
              className="search-input"
              autoComplete="off"
            />
          </div>
          {/* ********---------******* */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* *********--------------******* */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">$ {price}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .form-control {
    margin-bottom: 20px;
    h5 {
      margin-bottom: 8px;
      font-size: 16px;
      letter-spacing: 1.5px;
      color: #27374d;
    }
    p {
      color: hsl(210, 22%, 49%);
    }
  }
  .search-input {
    padding: 0.5rem;
    background: hsl(210, 36%, 96%);
    border-radius: 4px;
    border-color: transparent;
    letter-spacing: 1px;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 4px 0;
    padding: 4px 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: 1px;
    color: hsl(210, 22%, 49%);
    cursor: pointer;
  }
  .active {
    border-color: hsl(210, 22%, 49%);
  }
  .clear-btn {
    background: hsl(360, 67%, 44%);
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }
`;

export default Filter;

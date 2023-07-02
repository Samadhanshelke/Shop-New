import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { useDataContext } from "./DataContext";
const FilterContext = createContext();

function FilterProvider({ children }) {
  const { data, isLoading } = useDataContext();
  const [filtered_products, setFiltered_products] = useState([]);
  const [sorted, setSorted] = useState("price-lowest");
  const [max, setMax] = useState(0);
  const [gridView, setGridView] = useState(true);
  const [filter, setFilter] = useState({
    text: "",
    category: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
  });

  let tempProducts = [];
  const { text, category, min_price, max_price, price } = filter;

  useEffect(() => {
    setFiltered_products(data);
    if (data && data.length > 0) {
      let maxPrice =
        data && data.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);
      console.log(maxPrice);
      setFilter({ ...filter, price: maxPrice, max_price: maxPrice });
      setMax(maxPrice);
    }
  }, [data,]);

  const setgridview = () => {
    setGridView(true);
  };

  const setlistview = () => {
    setGridView(false);
  };
  const updateSort = (e) => {
    setSorted(e.target.value);
  };

  const updateFilters = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    

    if (name === "category") {
      value = e.target.textContent.toLowerCase();
      if (value === "all") {
        setFiltered_products(data);
      } else {
        const filteredProducts = data.filter((product) => {
          return product.category === value;
        });
        setFiltered_products(filteredProducts);
      }
     
    }

    if (name === "price") {
      value = parseInt(e.target.value);
      const filteredProducts = data.filter((product)=>{
        return product.price <= value + 1;

      })
      setFiltered_products(filteredProducts)
    }
    setFilter({...filter,text:value})
    if(name === "text"){
        console.log(text);
       const filteredProducts = data.filter((product)=>{
        return product.title.toLowerCase().startsWith(value.toLowerCase());
       })
       setFiltered_products(filteredProducts);
       
    }

    setFilter({ ...filter, [name]: value });
  };


  // ***********------*****************

  
  const clearFilters = () => {
    setFilter({
      ...filter,
      text: "",
      category: "all",
      price: max,
    });
    setFiltered_products(data)
  };

  if (sorted === "price-lowest") {
    tempProducts =
      filtered_products &&
      filtered_products.sort((a, b) => {
        return a.price - b.price;
      });
  }

  if (sorted === "price-highest") {
    tempProducts =
      filtered_products &&
      filtered_products.sort((a, b) => {
        return b.price - a.price;
      });
  }
  if (sorted === "name-a") {
    tempProducts =
      filtered_products &&
      filtered_products.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
  }

  if (sorted === "name-z") {
    tempProducts =
      filtered_products &&
      filtered_products.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
  }

  const valueToShare = {
    data,
    isLoading,
    filtered_products,
    gridView,
    setgridview,
    setlistview,
    setFiltered_products,
    updateSort,
    sorted,
    filter,
    updateFilters,
    clearFilters,
  };
  return (
    <FilterContext.Provider value={valueToShare}>
      {children}
    </FilterContext.Provider>
  );
}
const useFilterContext = () => {
  return useContext(FilterContext);
};
export default FilterProvider;
export { useFilterContext };

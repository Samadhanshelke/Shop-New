import React, { useContext } from "react";
import { useQuery } from "react-query";
import { createContext } from "react";
import customFetch from "../Components/Utils";
// import { useParams } from "react-router-dom";

const DataContext = createContext();
const DataProvider = ({ children }) => {
  // const {id} = useParams();
  
  const fetchAllProducts = useQuery({
    queryKey: ["Products"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });
const {data,isLoading} = fetchAllProducts;
const ValueToShare = {data,isLoading}

  return <DataContext.Provider value={ValueToShare}>{children}</DataContext.Provider>;
};
const useDataContext = () => {
  return useContext(DataContext);
};
export default DataProvider;
export { useDataContext };

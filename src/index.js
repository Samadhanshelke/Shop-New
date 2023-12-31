import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import NavProvider from "./Context/Nav_Context";
import DataProvider from "./Context/DataContext";
import FilterProvider from "./Context/Filter_Context";
import CartProvider from "./Context/CartContext";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <FilterProvider>
          <NavProvider>
            <CartProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </CartProvider>
          </NavProvider>
        </FilterProvider>
      </DataProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

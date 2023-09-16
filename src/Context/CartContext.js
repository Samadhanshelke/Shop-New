import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";
const cartContext = createContext();
function CartProvider({ children }) {
  const getLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(localStorage.getItem("cart"));
    } else {
      return [];
    }
  };
  const [cart, setCart] = useState(getLocalStorage());
  const [totalCount, setTotalCount] = useState(0);
  const [total ,setTotal] = useState(0)


  const addToCart = (image, title, id, price) => {
    const itemExist = cart.filter((cartItem) => cartItem.id === id);
    if (itemExist.length === 0) {
      // Item is not present in the cart, add it
      setCart([...cart, { image, title, id, price }]);
    }
  };

  const getTotalCount = () => {
    let count = 0;
    cart.forEach((item) => {
      const storedCount = localStorage.getItem(`count_${item.id}`) || '1';
      if (storedCount) {
        count += parseInt(storedCount);
      }
    });
    setTotalCount(count);
  };
  const calculateTotal = () => {
    let subtotal = 0;
    cart.forEach((item) => {
      const storedCount = localStorage.getItem(`count_${item.id}`);
      if (storedCount) {
        const count = parseInt(storedCount);
        subtotal += count * item.price;
      }
    });
    setTotal(subtotal.toFixed(2));
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    getTotalCount();
  }, [cart, getTotalCount]);

  const deleteItem = (id) => {
    localStorage.setItem(`count_${id}`, "1");
    const remItems = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(remItems);
  };
  const clearCart=()=>{
    cart.map((item)=>{
      localStorage.setItem(`count_${item.id}`, "1");

    })
     setCart([])
     setTotal(0)
  }
  const valueToShare = {
    addToCart,
    cart,
    deleteItem,
    totalCount,
    getTotalCount,
      clearCart,
      calculateTotal,
      total
    }
  return (
    <cartContext.Provider value={valueToShare}>{children}</cartContext.Provider>
  );
}
const useCartContext = () => {
  return useContext(cartContext);
};
export default CartProvider;
export { useCartContext };

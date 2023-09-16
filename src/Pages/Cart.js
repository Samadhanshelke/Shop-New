import React, { useState,useEffect } from "react";
import { useCartContext } from "../Context/CartContext";
import { styled } from "styled-components";
import {Link} from 'react-router-dom'
import { CartHeaders, CartItemRow } from "../Components";

function Cart() {
  const { cart,clearCart,total,calculateTotal } = useCartContext();
useEffect(()=>{
   calculateTotal();
},[cart])


  return (
    <Wrapper>
      <CartHeaders />
      <hr className="hr" />
      {cart.map((item) => {
        const { image, title, id, price } = item;
        return (
          <div className="cart" key={id}>
            <CartItemRow item={item} />
          </div>
        );
      })}
      <div className="buttons">
        <Link to='/products' className=" btn btn_1">Continue Shopping</Link>
        <button className="btn btn_2" onClick={clearCart}>Clear Cart</button>
      </div>
      <div className="total">
        <span></span>
        <h2>Order Total: {total} </h2>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 40px 0;
  width: 90vw;
  margin: 0 auto;
  max-width: 1200px;
  .buttons {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn {
      padding: 8px 6px;
      display: flex;
      justify-content: center;
      background-color: #f86f03;
      border: none;
      border-radius: 4px;
      letter-spacing: 1.4px;
      font-size: 15px;
      color: white;
      cursor: pointer;
      text-decoration: none;
    }
    .btn_1 {
      background-color: #f86f03;
    }
    .btn_2 {
      background-color: black;
    }
  }
  .cart{
    margin-top:40px;
  }
  .total{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:50px;
   
    h2{
      border: 1px solid black;
     width:200px;
     padding: 20px 40px;
    }
  }
`;
export default Cart;

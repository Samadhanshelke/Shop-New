import React from 'react'
import {styled} from 'styled-components'
import { useState,useEffect } from 'react'
import {FaPlus,FaMinus} from 'react-icons/fa'
import { useCartContext } from '../Context/CartContext'
function PriceCounter({ count, onCountChange }) {

    const incrementQuantity = ()=>{
   
        onCountChange(count + 1)
        
      }
      const decrementQuantity = ()=>{
        if (count <= 1) {
          return;
        }
        onCountChange(count - 1);
        
      }
     

  return (
    <Wrapper>
        <button onClick={()=>decrementQuantity()}><FaMinus/></button>
        <span>{count}</span>
        <button  onClick={()=>incrementQuantity()}><FaPlus/></button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:10px;
/* border: 1px solid red; */
button{
    font-size:20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
span{
    font-size:24px;
    font-weight:900;
    display: block;
}
`
export default PriceCounter
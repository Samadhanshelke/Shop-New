import React from 'react'
import { styled } from "styled-components";
import { useState,useEffect } from 'react';
import PriceCounter from './PriceCounter';
import { useCartContext } from '../Context/CartContext';
import {MdDelete} from 'react-icons/md'

function CartItemRow({item}) {
  const {deleteItem,getTotalCount,calculateTotal} = useCartContext();
    const {image,title,id,price } = item;
    
const [count,setCount] = useState(1)
    
    let total = count*price;
    total = total.toFixed(2)

    // ***********
    useEffect(() => {
      const storedCount = localStorage.getItem(`count_${id}`);
      if (storedCount) {
        setCount(parseInt(storedCount));
      }
    }, [id]);
  
   
    
    const handleCountChange = (newCount) => {
      setCount(newCount);
      localStorage.setItem(`count_${id}`, newCount.toString());
      getTotalCount();
      calculateTotal();
    };
    
    // ************************
   
  return (
    <Wrapper>
       <div>
       <img src={image} alt={title} />
       <span>{title.length > 10 ? `${title.slice(0, 10)}...` : title}</span>
       </div>
       <span className='price'>$ {price}</span>
       <PriceCounter count={count} onCountChange={handleCountChange}/>
       <h3>$ {total}</h3>
       <span className='delete' onClick={()=>{deleteItem(id)}}><MdDelete/></span>

    </Wrapper>
  )
}
const Wrapper = styled.section`
 display: grid;
  grid-template-columns:1fr 1fr 1fr 1fr auto;
  /* grid-template-rows: 80px; */
  /* gap: 1rem 1rem; */
  justify-items: center;
  /* margin-bottom: 20px; */
  align-items: center;
  /* border:1px solid red; */
  .delete{
    font-size:24px;
    background-color:red;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:2px;
    padding: 2px;
    cursor: pointer;
    svg{
      fill:white;
    }
  }
 div{
     display: flex;
     /* justify-content: center; */
     align-items: center;
     text-align: left;
     img{
         width:100px;
         height:80px;
        }
    }
    .price{
        color: #f86f03;
      font-size: 16px;
      font-weight: 900;
      
    }
`
export default CartItemRow;
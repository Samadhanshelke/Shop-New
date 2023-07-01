import React from 'react'
import { styled } from 'styled-components';
import {Link} from 'react-router-dom';
function ListView({Products}) {
    return (
        <Wrapper>
        {Products &&
              Array.isArray(Products) && Products.map((Product)=>{
        const {image,title,description,price,id} = Product;
            
             return(
                <article key={id}>
                      <img src={image} alt={title} />
                      <div>
                          <h1>{title}</h1>
                          <span>${price}</span>
                          <p>{description.substring(0,150)}...</p>
                          <Link className='btn' to={`/products/${id}`}>Details</Link>
                      </div>

                </article>
             )
        })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
margin-top:30px;
img{
    width:200px;
    height:200px;
    border:1px solid black;
    padding: 8px;
    border-radius:8px;
}
article{
    display: grid;
    column-gap: 30px;
     margin-bottom:80px;
}
h1{
    line-height: 1.2;
    font-size:20px;
    width:700px;
    margin-bottom:8px;
    color: #27374d;
}
span{
    color: #f86f03;
    font-weight:600;
    margin-bottom:10px;
    display: block;
    font-size: 18px;
}
p{
    color: #27374d;
    margin-bottom:10px;
    line-height: 1.4;
}
.btn{
    color:white;
    background-color: #f86f03;
    text-decoration:none;
    padding:2px 6px;
    font-size:14px;
    border-radius: 4px;
    display: flex;
    width: 45px;
    align-items: center;
    justify-content: center;
}
@media (min-width:768px){
article{
    grid-template-columns: auto 1fr;
    align-items: center;
}
}
`
export default ListView
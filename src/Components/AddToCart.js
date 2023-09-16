import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { useCartContext } from '../Context/CartContext'
function AddToCart({data}) {
  const {image,title,id,price} = data
  const {addToCart} = useCartContext();
  return (
    <Wrapper>

    <Link to='/cart' className='btn' onClick={()=>addToCart(image,title,id,price)}>AddToCart</Link>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    
`
export default AddToCart
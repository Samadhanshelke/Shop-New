import React from 'react'
import { styled } from "styled-components";
function CartHeaders() {
  return (
    

    <Wrapper>
    <div className='content'>

              <h4>Item</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Subtotal</h4>
              <span></span>
    </div>
    
    </Wrapper>
    
  )
}
const Wrapper = styled.div`

.content {
      display: grid;
      grid-template-columns: 340px 1fr 1fr 1fr auto;
      justify-content: center;
      column-gap: 1rem;
      margin-bottom:20px;
      padding-left:40px;
      
}
h4{
    color: #27374d;
    font-weight: 300;
}
`
export default CartHeaders










// import React from 'react'
// import { styled } from "styled-components";
// function CartHeaders() {
//   return (
//     <Wrapper>
//               <h4>item</h4>
//               <h4>price</h4>
//               <h4>quantity</h4>
//               <h4>subtotal</h4>
//               <span></span>
//     </Wrapper>
//   )
// }
// const Wrapper = styled.section`
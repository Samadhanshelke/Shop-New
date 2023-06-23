import React from 'react'
import { styled } from 'styled-components'
function ProductPage() {
  return (
    <Wrapper>ProductPage</Wrapper>
  )
}
const Wrapper = styled.section`
width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  margin: 50px auto 0 auto;
`
export default ProductPage
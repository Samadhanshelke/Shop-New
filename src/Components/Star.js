import React from 'react'
import {styled} from 'styled-components'
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'
function Star({star,review}) {
   
    const tempStars = Array.from({length:5},(_,index) =>{
        const number = index + 0.5
        return(
            <span key={index}>
                {star >= index + 1 ? (<BsStarFill/>) :star >= number ? (<BsStarHalf/>) :(<BsStar/>)}
            </span>
        )
    })
  return (
    <Wrapper>
       <div>{tempStars}</div>
        <div>({review} Customer reviews)</div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    display: flex;
    gap:20px;
    margin-top: 10px;
    margin-bottom:10px;
    align-items: center;

    justify-content: flex-start;

    div {
        color: #27374d;
        svg{
            fill:#FF8551;
        }
    }
`
export default Star
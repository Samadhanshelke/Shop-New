import React from "react";
import { useParams,Link } from "react-router-dom";
import { styled } from "styled-components";
import { useQuery } from "react-query";
import customFetch from "../Components/Utils";
import { Star,AddToCart } from "../Components";
function SingleProduct() {
  // const {fetchSingleProduct} = useDataContext();

  const { id } = useParams();
  const fetchSingleProduct = useQuery({
    queryKey: ["singleProduct"],
    queryFn: async () => {
      const { data } = await customFetch.get(`/${id}`);
      return data;
    },
  });
  const { data, isLoading } = fetchSingleProduct;

  if (isLoading) {
    return <div>Loading..</div>;
  }
  return (
    <Wrapper>
      <div className="container">
     

        <Link to='/products' className="btn">Back To Products</Link>
     
        <img className="image_container" src={data.image} alt="" />
        <div className="info_container">
          <h1>{data.title}</h1>
          <Star star={data.rating.rate} review={data.rating.count} />
          <span className="price">$ {data.price}</span>
          <p>{data.description}</p>
          <AddToCart data = {data}/>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  .container {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    margin: 0 auto;
    gap: 40px;
  }
  .image_container {
    width: 400px;
    height: 400px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 16px;
  }
  .info_container {
    width: 600px;
    h1 {
      font-size: 36px;
      color: #27374d;
      margin-bottom: 10px;
    }
    p {
      margin: 15px 0;
      color: #27374d;
      letter-spacing: 0.5px;
      line-height: 1.7;
    }
    .price {
      color: #f86f03;
      font-size: 22px;
      font-weight: 900;
      margin-top: 30px;
    }
   
  }
  .btn {
    grid-column: 1/3;
    width: 160px;
    padding: 8px 2px;
    display: flex;
    justify-content:center;
    background-color: #f86f03;
    border: none;
    border-radius: 4px;
    letter-spacing: 1.4px;
    font-size: 15px;
    color: white;
    cursor: pointer;
    text-decoration:none;
  }
`;
export default SingleProduct;

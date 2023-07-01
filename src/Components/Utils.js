import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
});


const getUniqueValues = (data, type) => {
  let unique = data && data.map((item) => item[type])
 
  return ['all', ...new Set(unique)]
}

export default customFetch;
export {getUniqueValues}
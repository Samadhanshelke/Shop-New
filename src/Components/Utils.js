import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
});

export default customFetch;
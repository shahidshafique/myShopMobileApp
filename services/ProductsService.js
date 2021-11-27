import axios from 'axios';
const baseUrl = 'https://my-json-server.typicode.com/benirvingplt/products';

export async function getProducts() {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}/products`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
  return response.data;
}

export async function getProduct(id) {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}/products/${id}`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
  return response.data;
}

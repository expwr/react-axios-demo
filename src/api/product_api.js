import axios from "axios";

export function getProducts(params) {
  const searchParams = new URLSearchParams(params).toString();

  const response = axios.get(
    `https://fakestoreapi.com/products?${searchParams}`
  );
  return response;
}

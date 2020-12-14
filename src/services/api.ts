import axios from 'axios';

const url = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

const api = {
  products: {
    list: () => url.get('/products'),
    details: (productId: string) => url.get(`/products/${productId}`),
    listByCategory: (category: string) =>
      url.get(`/products/category/${category}`),
  },
};

export default api;

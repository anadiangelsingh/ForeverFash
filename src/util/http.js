import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://foreverfash-dc4f6-default-rtdb.firebaseio.com/',
});

export function fetchCategories(categoryId) {
  return instance.get(`/categories/${categoryId}.json`);
}

export function fetchProductsByCategory(productId) {
  return instance
    .get(`/products/${productId}.json`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching products:', error);
      throw error;
    });
}

export function fetchProduct() {
  return instance.get(`/products.json`);
}

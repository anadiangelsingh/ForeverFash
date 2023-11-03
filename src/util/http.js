import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://foreverfash-dc4f6-default-rtdb.firebaseio.com/',
});

export function fetchCategories(categoryId) {
  return instance.get(`/categories/${categoryId}.json`);

  // Modify the URL to include the categoryId in the request
  // return instance.get(`/categories/${categoryId}.json`).then(response => {
  //   // Handle the response data here
  //   console.log(response.data);
  //   console.log('API Response:', response);
  // });
}

//fetchCategories('Men');

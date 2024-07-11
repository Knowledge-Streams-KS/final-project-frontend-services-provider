// src/utils/apiConfig.js
import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:3004/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

API.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      console.error('Token expired or invalid, please login again.');
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default API;

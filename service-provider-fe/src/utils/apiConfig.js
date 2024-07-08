import axios from 'axios'
const API = axios.create({
  baseURL: "http://localhost:3004/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('autToken')
  if (token){
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API

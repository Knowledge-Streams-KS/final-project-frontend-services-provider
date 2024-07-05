const API = axios.create({
  baseURL: "http://localhost:3004/api",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.header.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

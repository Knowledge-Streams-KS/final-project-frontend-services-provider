import API from "./apiConfig.js";


export const login = (formData) => API.post('/users/login', formData);
export const register = (formData) => API.post('/users/register', formData);
export const fetchServices = () => API.get('/services');
export const fetchCategories = () => API.get('/categories');
export const fetchBookings = () => API.get('/bookings');
export const createBooking = (bookingData) => API.post('/bookings', bookingData);

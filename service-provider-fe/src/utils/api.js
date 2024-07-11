import api from "./apiConfig.js";


export const login = (formData) => api.post('/users/login', formData);
export const register = (formData) => api.post('/users/register', formData);
export const fetchServices = () => api.get('/services');
export const fetchCategories = () => api.get('/categories');
export const fetchBookings = () => api.get('/bookings');
export const fetchCleaning = () => api.get('/cleaning');
export const fetchSolar = () => api.get('/solar');
export const createBooking = (bookingData) => api.post('/bookings', bookingData);
export const createServiceListing = (serviceData) => api.post('/services', serviceData)
export const fetchServicesByCategory = (category) => api.get(`/services/category/${category}`);
export const fetchAllServices = () => api.get('/services');
// export const createServiceListing = (serviceData) => api.post('/solar-services', serviceData)
// export const createServiceListing = (serviceData) => api.post('/home-inspections', serviceData)






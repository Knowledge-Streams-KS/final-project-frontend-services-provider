// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import bookingReducer from './slices/bookingSlice.js';
import serviceReducer from './slices/serviceSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    bookings: bookingReducer,
    services: serviceReducer,
  },
});

export default store;

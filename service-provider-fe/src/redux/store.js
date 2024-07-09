// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import bookingReducer from './slices/bookingSlice.js';
import serviceReducer from './slices/serviceSlice.js';
import personalServiceReducer from './slices/personalServiceSlice';
import homeServiceReducer from './slices/homeServiceSlice';
import cleaningServiceReducer from './slices/cleaningServicesSlice.js';
import solarServiceReducer from './slices/solarServiceSlice';
import homeInspectionReducer from './slices/homeInspectionSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    bookings: bookingReducer,
    services: serviceReducer,
    personalService: personalServiceReducer,
    homeService: homeServiceReducer,
    cleaningService: cleaningServiceReducer,
    solarService: solarServiceReducer,
    homeInspection: homeInspectionReducer,
  },
});

export default store;

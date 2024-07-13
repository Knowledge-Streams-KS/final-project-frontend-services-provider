import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import bookingReducer from './slices/bookingSlice';
import serviceReducer from './slices/serviceSlice';
import personalServiceReducer from './slices/personalServiceSlice';
import homeServiceReducer from './slices/homeServiceSlice';
import cleaningServiceReducer from './slices/cleaningServicesSlice';
import solarServiceReducer from './slices/solarServiceSlice';
import homeInspectionReducer from './slices/homeInspectionSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    bookings: bookingReducer,
    services: serviceReducer,
    personalService: personalServiceReducer,
    homeService: homeServiceReducer,
    cleaningServices: cleaningServiceReducer,
    solarServices: solarServiceReducer,
    homeInspection: homeInspectionReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import bookingReducer from "./slices/bookingSlice";
import serviceReducer from "./slice/serviceSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer,
    services: serviceReducer,
  },
});

export default store;

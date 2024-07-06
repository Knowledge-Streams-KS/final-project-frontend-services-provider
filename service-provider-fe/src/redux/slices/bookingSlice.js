import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api.js";

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async (_, { rejectedWithValue }) => {
    try {
      const response = await api.fetchBookings();
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.response.data);
    }
  }
);

export const createBooking = createAsyncThunk(
  "bookings/createBooking",
  async (bookingData, { rejectedWithValue }) => {
    try {
      const response = await api.createBooking(bookingData);
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.response.data);
    }
  }
);
const bookingSlice = createSlice({
  nam: "bookings",
  initialState: { booking: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(createBooking.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.bookings.push(payload);
      })
      .addCase(createBooking.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default bookingSlice.reducer;

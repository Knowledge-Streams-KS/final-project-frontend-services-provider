// src/redux/slices/bookingSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../utils/api.js';

export const fetchBookings = createAsyncThunk(
  'bookings/fetchBookings',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchBookings();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: { bookings: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.bookings = payload;
      })
      .addCase(fetchBookings.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default bookingSlice.reducer;

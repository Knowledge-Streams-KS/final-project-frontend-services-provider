// src/redux/slices/solarServicesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/apiConfig';

export const fetchSolarServices = createAsyncThunk(
  'solarServices/fetchSolarServices',
  async () => {
    try {
      const response = await API.get('/services/category/c6671fe6-e6c0-4957-a1cb-04d73d2a7e09');
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

const solarServicesSlice = createSlice({
  name: 'solarServices',
  initialState: {
    services: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSolarServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSolarServices.fulfilled, (state, action) => {
        state.services = action.payload;
        state.loading = false;
      })
      .addCase(fetchSolarServices.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default solarServicesSlice.reducer;

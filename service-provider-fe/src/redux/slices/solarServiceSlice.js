// src/redux/slices/solarServiceSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/apiConfig.js';

export const fetchSolarServices = createAsyncThunk('solarService/fetchSolarServices', async () => {
  const response = await api.get('/solarServices');
  return response.data;
});

const solarServiceSlice = createSlice({
  name: 'solarService',
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

export default solarServiceSlice.reducer;

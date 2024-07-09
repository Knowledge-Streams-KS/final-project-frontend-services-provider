// src/redux/slices/homeServiceSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/apiConfig.js';

export const fetchHomeServices = createAsyncThunk('homeService/fetchHomeServices', async () => {
  const response = await api.get('/homeServices');
  return response.data;
});

const homeServiceSlice = createSlice({
  name: 'homeService',
  initialState: {
    services: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHomeServices.fulfilled, (state, action) => {
        state.services = action.payload;
        state.loading = false;
      })
      .addCase(fetchHomeServices.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default homeServiceSlice.reducer;

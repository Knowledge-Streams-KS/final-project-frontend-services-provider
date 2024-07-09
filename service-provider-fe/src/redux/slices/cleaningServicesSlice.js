// src/redux/slices/cleaningServiceSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/apiConfig.js';

export const fetchCleaningServices = createAsyncThunk('cleaningService/fetchCleaningServices', async () => {
  const response = await api.get('/cleaningServices');
  return response.data;
});

const cleaningServiceSlice = createSlice({
  name: 'cleaningService',
  initialState: {
    services: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCleaningServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCleaningServices.fulfilled, (state, action) => {
        state.services = action.payload;
        state.loading = false;
      })
      .addCase(fetchCleaningServices.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default cleaningServiceSlice.reducer;

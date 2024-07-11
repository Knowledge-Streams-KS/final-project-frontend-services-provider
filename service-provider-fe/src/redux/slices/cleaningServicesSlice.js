// src/redux/slices/cleaningServicesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/apiConfig';

export const fetchCleaningServices = createAsyncThunk(
  'cleaningServices/fetchCleaningServices',
  async () => {
    try {
      const response = await API.get('/cleaning');
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

const cleaningServicesSlice = createSlice({
  name: 'cleaningServices',
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
        state.error = null;
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

export default cleaningServicesSlice.reducer;

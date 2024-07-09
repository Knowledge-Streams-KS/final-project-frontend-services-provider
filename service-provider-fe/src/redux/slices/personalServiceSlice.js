// src/redux/slices/personalServiceSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/apiConfig.js';

export const fetchPersonalServices = createAsyncThunk('personalService/fetchPersonalServices', async () => {
  const response = await api.get('/personalServices');
  return response.data;
});

const personalServiceSlice = createSlice({
  name: 'personalService',
  initialState: {
    services: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonalServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPersonalServices.fulfilled, (state, action) => {
        state.services = action.payload;
        state.loading = false;
      })
      .addCase(fetchPersonalServices.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default personalServiceSlice.reducer;

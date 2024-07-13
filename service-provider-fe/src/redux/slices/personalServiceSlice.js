import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/apiConfig';

export const fetchPersonalServices = createAsyncThunk('personalServices/fetchPersonalServices', async () => {
  const response = await API.get('/services/category/87966a8f-8a6e-4444-95fd-d8e4b34faaf3');
  return response.data;
});

const personalServiceSlice = createSlice({
  name: 'personalServices',
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

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/apiConfig';

export const fetchHomeServices = createAsyncThunk(
  'homeServices/fetchHomeServices', 
  async () => {
     try {
  const response = await API.get('/services/category/dee74dfd-a757-43ad-b5b7-8c3b14222cb9');
  return response.data;
} catch (error) {
      throw Error(error.message);
    }
  }
);

const homeServiceSlice = createSlice({
  name: 'homeServices',
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

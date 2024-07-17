import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/apiConfig';

export const fetchHomeInspections = createAsyncThunk(
  'homeInspection/fetchHomeInspections', 
  async () => {
    try {
      const response = await API.get('/services/category/f90b5f75-e256-4382-9887-8308b59d9fd7');
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

const homeInspectionSlice = createSlice({
  name: 'homeInspection',
  initialState: {
    services: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeInspections.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHomeInspections.fulfilled, (state, action) => {
        state.services = action.payload;
        state.loading = false;
      })
      .addCase(fetchHomeInspections.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default homeInspectionSlice.reducer;

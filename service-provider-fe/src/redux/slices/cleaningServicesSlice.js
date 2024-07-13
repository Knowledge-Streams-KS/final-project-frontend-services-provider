import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/apiConfig';

// Access the environment variable directly
// const CLEANING_CATEGORY_ID = process.env.REACT_APP_CLEANING_CATEGORY_ID;

export const fetchCleaningServices = createAsyncThunk(
  'cleaningServices/fetchCleaningServices',
  async () => {
    try {
      const response = await API.get('/services/category/463e20db-88e6-42af-a90f-e6adacf5c0a4');
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

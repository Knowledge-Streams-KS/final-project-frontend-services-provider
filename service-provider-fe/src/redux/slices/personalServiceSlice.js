import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utils/apiConfig';

export const fetchPersonalServices = createAsyncThunk(
  'personalServices/fetchPersonalServices', 
  async () => {
    try{
  const response = await API.get('/services/category/be94d130-ce94-4c3c-935f-79afa0fd5d88');
  return response.data;
} catch (error) {
      throw Error(error.message);
    }
  }
);


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

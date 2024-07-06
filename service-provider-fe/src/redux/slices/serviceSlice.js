import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.fetchServices();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const serviceSlice = createSlice({
  name: "services",
  initialState: { services: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.services = payload;
      })
      .addCase(fetchServices.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default serviceSlice.reducer;

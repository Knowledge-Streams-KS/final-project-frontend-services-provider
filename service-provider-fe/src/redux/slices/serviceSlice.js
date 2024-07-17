import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from '../../utils/apiConfig';

// Thunk to fetch services by category
export const fetchServicesByCategory = createAsyncThunk(
  "services/fetchServicesByCategory",
  async (category, { rejectWithValue }) => {
    try {
      const response = await API.get(`/services/category/${category}`);
      return response.data;
    } catch (err) {
      console.error('Error fetching services by category:', err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

// Thunk to fetch all services
export const fetchAllServices = createAsyncThunk(
  "services/fetchAllServices",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get('/services');
      return response.data;
    } catch (err) {
      console.error('Error fetching all services:', err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

// Thunk to fetch a service by ID
export const fetchServiceById = createAsyncThunk(
  "services/fetchServiceById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await API.get(`/services/${id}`);
      return response.data;
    } catch (err) {
      console.error('Error fetching service by id:', err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

// Thunk to create a new service listing
export const createServiceListing = createAsyncThunk(
  "services/createServiceListing",
  async (serviceData, { rejectWithValue }) => {
    try {
      const response = await API.post('/services/create-service', serviceData);
      return response.data;
    } catch (err) {
      console.error('Error creating service:', err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

// Slice for managing service-related state
const serviceSlice = createSlice({
  name: "services",
  initialState: { services: [], service: null, loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServicesByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServicesByCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.services = payload;
      })
      .addCase(fetchServicesByCategory.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchAllServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllServices.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.services = payload;
      })
      .addCase(fetchAllServices.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchServiceById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServiceById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.service = payload;
      })
      .addCase(fetchServiceById.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(createServiceListing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createServiceListing.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.services.push(payload);
      })
      .addCase(createServiceListing.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default serviceSlice.reducer;

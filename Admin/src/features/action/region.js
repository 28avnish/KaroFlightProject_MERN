import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../services/axiosInterceptor';


//get all regions api
export const getAllRegions = createAsyncThunk(
  'getRegions',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/region`, payload, {
        withCredentials: true,
      });
      
      return response?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//delete region api
export const deleteRegion = createAsyncThunk(
  'deleteRegion',
  async (id, { rejectWithValue }) => {
    try {
    
      const response = await instance.delete(
        `/region/${id}`,

        { withCredentials: true }
      );
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//update Region api
export const updateRegion= createAsyncThunk(
  'updateRegion',
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/region/${id}`, payload, {
        withCredentials: true,
        headers: {
          'Content-type': 'application/json',
        },
      });
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//create Region api
export const createRegion = createAsyncThunk(
  'createRegion',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/region`, payload, {
        withCredentials: true,
        headers: {
          'Content-type': 'application/json',
        },
      });
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../services/axiosInterceptor';


//get all tours api
export const getAllTours = createAsyncThunk(
  'getTours',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/tour`, payload, {
        withCredentials: true,
      });
      
      return response?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//delete tour api
export const deleteTour = createAsyncThunk(
  'deleteTour',
  async (id, { rejectWithValue }) => {
    try {
    
      const response = await instance.delete(
        `/tour/${id}`,

        { withCredentials: true }
      );
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//update Tour api
export const updateTour= createAsyncThunk(
  'updateTour',
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/tour/${id}`, payload, {
        withCredentials: true,
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//create Tour api
export const createTour = createAsyncThunk(
  'createTour',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/tour`, payload, {
        withCredentials: true,
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

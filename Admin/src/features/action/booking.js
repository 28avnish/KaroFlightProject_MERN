import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../services/axiosInterceptor';


//get all bookings api
export const getAllBookings = createAsyncThunk(
  'getAllBookings',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/booking`, payload, {
        withCredentials: true,
      });
      
      return response?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

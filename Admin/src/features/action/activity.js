import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../services/axiosInterceptor';


//get all activitys api
export const getAllActivities = createAsyncThunk(
  'getActivities',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/activity`, payload, {
        withCredentials: true,
      });
      
      return response?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//delete activity api
export const deleteActivity = createAsyncThunk(
  'deleteActivity',
  async (id, { rejectWithValue }) => {
    try {
    
      const response = await instance.delete(
        `/activity/${id}`,

        { withCredentials: true }
      );
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);


//create Activity api
export const createActivity = createAsyncThunk(
  'createActivity',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/activity`, payload, {
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

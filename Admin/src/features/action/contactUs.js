import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../services/axiosInterceptor';


//get all contactUss api
export const getAllContactUs = createAsyncThunk(
  'getContactUss',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/contactUs`, payload, {
        withCredentials: true,
      });
      
      return response?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//delete contactUs api
export const deleteContactUs = createAsyncThunk(
  'deleteContactUs',
  async (id, { rejectWithValue }) => {
    try {
    
      const response = await instance.delete(
        `/contactUs/${id}`,

        { withCredentials: true }
      );
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);


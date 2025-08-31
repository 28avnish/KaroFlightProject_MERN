import { createSlice } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
import {deleteContactUs, getAllContactUs } from "../action/contactUs";

const initialState = {
  isLoading: false,
  isDeleted: false,
  errorMessage: "",
  contactUsData: [],
};

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllContactUs.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllContactUs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isDeleted = false;
        state.contactUsData = action.payload.data;
      })
      .addCase(getAllContactUs.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(deleteContactUs.pending, (state, action) => {
        state.isLoading = true;
        state.isDeleted = false;
      })
      .addCase(deleteContactUs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = true;
        state.contactUsData = state.contactUsData.filter(
          (contactUs) => contactUs._id !== action?.payload?.payload
        );
        toast.success("ContactUs Deleted successfully", {
          position: "top-right",
        });
      })
      .addCase(deleteContactUs.rejected, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
   
  },
});

export default contactUsSlice.reducer;
export const {} = contactUsSlice.actions;

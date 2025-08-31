import { createSlice } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
import { createTour, deleteTour, getAllTours, updateTour } from "../action/tour";

const initialState = {
  isLoading: false,
  isDeleted: false,
  errorMessage: "",
  tourData: [],
};

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllTours.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllTours.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isDeleted = false;
        state.tourData = action.payload.data;
      })
      .addCase(getAllTours.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(deleteTour.pending, (state, action) => {
        state.isLoading = true;
        state.isDeleted = false;
      })
      .addCase(deleteTour.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = true;
        state.tourData = state.tourData.filter(
          (tour) => tour._id !== action?.payload?.payload
        );
        toast.success("Tour Deleted successfully", {
          position: "top-right",
        });
      })
      .addCase(deleteTour.rejected, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
      .addCase(updateTour.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateTour.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tourData = action.payload.data;
        toast.success("Tour Updated successfully", {
          position: "top-right",
        });
      })
      .addCase(updateTour.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(action.payload, {
          position: "top-right",
        });
      })

      .addCase(createTour.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createTour.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tourData = action.payload.data;
        toast.success("Tour Added successfully", {
          position: "top-right",
        });
      })

      .addCase(createTour.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload
          ? action.payload
          : "An error occurred while creating the tour.";
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      });
  },
});

export default tourSlice.reducer;
export const {} = tourSlice.actions;

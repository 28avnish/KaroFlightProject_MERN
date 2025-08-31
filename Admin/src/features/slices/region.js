import { createSlice } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
import { createRegion, deleteRegion, getAllRegions, updateRegion } from "../action/region";

const initialState = {
  isLoading: false,
  isDeleted: false,
  errorMessage: "",
  regionData: [],
};

const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllRegions.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllRegions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isDeleted = false;
        state.regionData = action.payload.data;
      })
      .addCase(getAllRegions.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(deleteRegion.pending, (state, action) => {
        state.isLoading = true;
        state.isDeleted = false;
      })
      .addCase(deleteRegion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = true;
        state.regionData = state.regionData.filter(
          (region) => region._id !== action?.payload?.payload
        );
        toast.success("Region Deleted successfully", {
          position: "top-right",
        });
      })
      .addCase(deleteRegion.rejected, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
      .addCase(updateRegion.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateRegion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.regionData = action.payload.data;
        toast.success("Region Updated successfully", {
          position: "top-right",
        });
      })
      .addCase(updateRegion.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(action.payload, {
          position: "top-right",
        });
      })

      .addCase(createRegion.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createRegion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.regionData = action.payload.data;
        toast.success("Region Added successfully", {
          position: "top-right",
        });
      })

      .addCase(createRegion.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload
          ? action.payload
          : "An error occurred while creating the region.";
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      });
  },
});

export default regionSlice.reducer;
export const {} = regionSlice.actions;

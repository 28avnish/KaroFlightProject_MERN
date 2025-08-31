import { createSlice } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
import { createTrek, deleteTrek, getAllTreks, updateTrek } from "../action/trek";

const initialState = {
  isLoading: false,
  isDeleted: false,
  errorMessage: "",
  trekData: [],
};

const trekSlice = createSlice({
  name: "trek",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllTreks.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllTreks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isDeleted = false;
        state.trekData = action.payload.data;
      })
      .addCase(getAllTreks.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(deleteTrek.pending, (state, action) => {
        state.isLoading = true;
        state.isDeleted = false;
      })
      .addCase(deleteTrek.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = true;
        state.trekData = state.trekData.filter(
          (trek) => trek._id !== action?.payload?.payload
        );
        toast.success("Trek Deleted successfully", {
          position: "top-right",
        });
      })
      .addCase(deleteTrek.rejected, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
      .addCase(updateTrek.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateTrek.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trekData = action.payload.data;
        toast.success("Trek Updated successfully", {
          position: "top-right",
        });
      })
      .addCase(updateTrek.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(action.payload, {
          position: "top-right",
        });
      })

      .addCase(createTrek.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createTrek.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trekData = action.payload.data;
        toast.success("Trek Added successfully", {
          position: "top-right",
        });
      })

      .addCase(createTrek.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload
          ? action.payload
          : "An error occurred while creating the trek.";
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      });
  },
});

export default trekSlice.reducer;
export const {} = trekSlice.actions;

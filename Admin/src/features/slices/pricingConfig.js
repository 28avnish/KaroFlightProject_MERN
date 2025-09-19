import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
  addPricingConfig,
  deletePricingConfig,
  getAllPricingConfig,
  updatePricingConfig,
} from "../action/pricingConfig";

// -------------------------------------------------------------------------------------------

// initialState -- initial state of authentication
const initialState = {
  isLoading: false,
  errorMessage: "",
  response: null,
  pricingConfigData: [],
  isDeleted: false,
};

// -------------------------------------- Slices------------------------------------------------
const pricingConfigSlice = createSlice({
  name: "pricingConfig",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllPricingConfig.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllPricingConfig.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pricingConfigData = action.payload.data;
      })
      .addCase(getAllPricingConfig.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
      .addCase(addPricingConfig.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(addPricingConfig.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
        toast.success("Added Pricing Config Successfully", {
          position: "top-right",
        });
      })
      .addCase(addPricingConfig.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
      .addCase(updatePricingConfig.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updatePricingConfig.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload;
        toast.success("Pricing Config Updated successfully", {
          position: "top-right",
        });
      })
      .addCase(updatePricingConfig.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(action.payload, {
          position: "top-right",
        });
      })
      .addCase(deletePricingConfig.pending, (state, action) => {
        state.isLoading = true;
        state.isDeleted = false;
      })
      .addCase(deletePricingConfig.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = true;
        toast.success(" Pricing Config Deleted successfully", {
          position: "top-right",
        });
      })
      .addCase(deletePricingConfig.rejected, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      });
  },
});

// ===========================================Exports==================================================
export default pricingConfigSlice.reducer;
export const {} = pricingConfigSlice.actions;

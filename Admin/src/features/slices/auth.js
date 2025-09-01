import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
  createAdminUser,
  deleteAdminUser,
  getAdminUsers,
  logIn,
  logout,
  updateAdminUser,
} from "../action/auth";
// -------------------------------------------------------------------------------------------

// initialState -- initial state of authentication
const initialState = {
  isLoading: false,
  errorMessage: "",
  isUserLoggedIn: false,
  userData: {},
  adminsData: [],
  isDeleted: false,
};

// -------------------------------------- Slices------------------------------------------------
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearReduxStore: () => initialState,
  },
  extraReducers: (builder) => {
    builder

      // Login cases
      .addCase(logIn.pending, (state, action) => {
        state.isLoading = true;
        state.isUserLoggedIn = false;
        state.errorMessage = "";
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUserLoggedIn = true;
        state.userData = action.payload.user;
        toast.success("Login Successfully", {
          position: "top-right",
        });
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isUserLoggedIn = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
      // Logout lifecycle methods
      .addCase(logout.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isUserLoggedIn = false;
        localStorage.clear();
        toast.success("Logout Successfully", {
          position: "top-right",
        });
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
      .addCase(getAdminUsers.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAdminUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adminsData = action.payload.data;
      })
      .addCase(getAdminUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
      .addCase(createAdminUser.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(createAdminUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adminsData = action.payload;
        toast.success("Created User Successfully", {
          position: "top-right",
        });
      })
      .addCase(createAdminUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
      .addCase(updateAdminUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateAdminUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adminsData = action.payload;
        toast.success("User Updated successfully", {
          position: "top-right",
        });
      })
      .addCase(updateAdminUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(action.payload, {
          position: "top-right",
        });
      })
      .addCase(deleteAdminUser.pending, (state, action) => {
        state.isLoading = true;
        state.isDeleted = false;
      })
      .addCase(deleteAdminUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = true;
        toast.success("Admin Deleted successfully", {
          position: "top-right",
        });
      })
      .addCase(deleteAdminUser.rejected, (state, action) => {
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
export default authSlice.reducer;
export const { clearReduxStore } = authSlice.actions;

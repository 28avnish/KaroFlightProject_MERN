import { createSlice } from "@reduxjs/toolkit";
import { localSignUp, logIn, logout, verifySignupEmail } from "../actions/auth";
import { toast } from "sonner";
// -------------------------------------------------------------------------------------------

// initialState -- initial state of authentication
const initialState = {
  isLoading: false,
  errorMessage: "",
  isUserLoggedIn: false,
  userData: {},
  signupData: null,
  signupMailSentResponse: {},
  signupOtpVerifyResponse: {},
};

// -------------------------------------- Slices------------------------------------------------
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignupEmail: (state, action) => {
      state.signupEmail = action.payload;
    },
    clearSignupEmail: (state) => {
      state.signupData = null;
    },
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
      .addCase(localSignUp.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(localSignUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.signupMailSentResponse = action.payload;
        toast.success("Otp sent successfully", {
          position: "top-right",
        });
      })
      .addCase(localSignUp.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
      .addCase(verifySignupEmail.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(verifySignupEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.signupOtpVerifyResponse = action.payload;
        toast.success("Otp verified successfully", {
          position: "top-right",
        });
      })
      .addCase(verifySignupEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      });
  },
});

// ===========================================Exports==================================================
export default authSlice.reducer;
export const { setSignupEmail } = authSlice.actions;

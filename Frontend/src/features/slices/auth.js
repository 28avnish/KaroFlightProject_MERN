import { createSlice } from "@reduxjs/toolkit";
import { forgotPassword, localSignUp, logIn, logout, resetForgotPassword, verifySignupEmail } from "../actions/auth";
import { toast } from "sonner";
// -------------------------------------------------------------------------------------------

// initialState -- initial state of authentication
const initialState = {
  isLoading: false,
  isVerifyLoading: false,
  isResetLoading:false,
  errorMessage: "",
  isUserLoggedIn: false,
  userData: null,
  signupData: null,
  forgotPasswordEmail: null,
  signupMailSentResponse: null,
  signupOtpVerifyResponse: null,
  forgotPassMailSentResponse:null,
  forgotPassOtpVerifyResponse:null
};

// -------------------------------------- Slices------------------------------------------------
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignupData: (state, action) => {
      state.signupData = action.payload;
    },
    setForgotPasswordEmail: (state, action) => {
      state.forgotPasswordEmail = action.payload;
    },
    clearAllStates: () => initialState,
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
        state.isVerifyLoading = true;
        state.errorMessage = "";
      })
      .addCase(verifySignupEmail.fulfilled, (state, action) => {
        state.isVerifyLoading = false;
        state.signupOtpVerifyResponse = action.payload;
        toast.success("Account created successfully", {
          position: "top-right",
        });
      })
      .addCase(verifySignupEmail.rejected, (state, action) => {
        state.isVerifyLoading = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
       .addCase(forgotPassword.pending, (state, action) => {
        state.isResetLoading = true;
        state.errorMessage = "";
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isResetLoading = false;
        state.forgotPassMailSentResponse = action.payload;
        toast.success("Otp sent for password reset", {
          position: "top-right",
        });
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isResetLoading = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
       .addCase(resetForgotPassword.pending, (state, action) => {
        state.isVerifyLoading = true;
        state.errorMessage = "";
      })
      .addCase(resetForgotPassword.fulfilled, (state, action) => {
        state.isVerifyLoading = false;
        state.forgotPassOtpVerifyResponse = action.payload;
        toast.success("Reset password successfully", {
          position: "top-right",
        });
      })
      .addCase(resetForgotPassword.rejected, (state, action) => {
        state.isVerifyLoading = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
  },
});

// ===========================================Exports==================================================
export default authSlice.reducer;
export const { setSignupData ,clearAllStates,setForgotPasswordEmail } = authSlice.actions;

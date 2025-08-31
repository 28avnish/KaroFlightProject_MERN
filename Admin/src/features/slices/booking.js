import { createSlice } from "@reduxjs/toolkit";
import { getAllBookings } from "../action/booking";


const initialState = {
  isLoading: false,
  errorMessage: "",
  bookingData: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllBookings.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.bookingData = action.payload.data;
      })
      .addCase(getAllBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
  },
});

export default bookingSlice.reducer;
export const {} = bookingSlice.actions;

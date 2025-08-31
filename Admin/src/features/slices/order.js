import { createSlice } from "@reduxjs/toolkit";
import { getAllOrders } from "../action/order";


const initialState = {
  isLoading: false,
  errorMessage: "",
  orderData: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllOrders.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.orderData = action.payload.data;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
  },
});

export default orderSlice.reducer;
export const {} = orderSlice.actions;

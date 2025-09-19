import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch all offers
export const fetchOffers = createAsyncThunk(
  "offers/fetchOffers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://server-render-kflight-0d3r.onrender.com/api/offers"
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server did not return JSON");
      }
      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Failed to fetch offers:", err);
      return rejectWithValue(err.message);
    }
  }
);


const offersSlice = createSlice({
  name: "offers",
  initialState: {
    offers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.loading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default offersSlice.reducer;

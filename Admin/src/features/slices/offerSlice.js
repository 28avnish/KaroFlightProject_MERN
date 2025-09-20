import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch all offers
export const fetchOffers = createAsyncThunk(
  "offers/fetchOffers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(
        "https://server-render-kflight-0d3r.onrender.com/api/offers/list"
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      
      // Debug: Log the actual response structure
      console.log("API Response:", data);
      console.log("Type of data:", typeof data);
      console.log("Is data an array?", Array.isArray(data));
      
      // Check common response patterns
      if (data.offers) {
        console.log("Found data.offers:", data.offers);
        return data.offers; // Return the offers array if nested
      } else if (data.data) {
        console.log("Found data.data:", data.data);
        return data.data; // Return the data array if nested
      } else {
        console.log("Using data directly:", data);
        return data; // Return data directly if it's the array
      }
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
        // Debug: Log what we're setting
        console.log("Setting offers to:", action.payload);
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default offersSlice.reducer;
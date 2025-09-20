import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Base API URL
const API_BASE_URL = "https://server-render-kflight-0d3r.onrender.com/api";

// Fetch all offers
export const fetchOffers = createAsyncThunk(
  "offers/fetchOffers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/offers/list`);
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`HTTP error! status: ${res.status} - ${errorText}`);
      }
      const data = await res.json();
      return data.offers || data.data || data;
    } catch (err) {
      console.error("Failed to fetch offers:", err);
      return rejectWithValue(err.message);
    }
  }
);

// Update an offer
export const editOffer = createAsyncThunk(
  "offers/editOffer",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/offers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to update offer: ${res.status} - ${errorText}`);
      }

      const response = await res.json();
      const updatedOffer = response.data || response.offer || response;

      if (!updatedOffer._id && !updatedOffer.id) {
        updatedOffer._id = id;
      }

      return updatedOffer;
    } catch (err) {
      console.error("Edit offer error:", err);
      return rejectWithValue(err.message);
    }
  }
);

// Toggle offer status
export const toggleOfferStatus = createAsyncThunk(
  "offers/toggleOfferStatus",
  async ({ id, active }, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/offers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(
          `Failed to update status: ${res.status} - ${errorText}`
        );
      }

      let updatedOffer = { _id: id, active };
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const json = await res.json();
        updatedOffer = json.data || json.offer || updatedOffer;
      }

      updatedOffer.active = active;
      return updatedOffer;
    } catch (err) {
      console.error("Toggle offer status error:", err);
      return rejectWithValue(err.message);
    }
  }
);

// Delete offer
export const deleteOffer = createAsyncThunk(
  "offers/deleteOffer",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/offers/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to delete offer: ${res.status} - ${errorText}`);
      }

      return id; // Return deleted ID
    } catch (err) {
      console.error("Delete offer error:", err);
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
  reducers: {
    updateOfferInState: (state, action) => {
      const updatedOffer = action.payload;
      const index = state.offers.findIndex(
        (offer) =>
          offer._id === updatedOffer._id || offer.id === updatedOffer.id
      );
      if (index !== -1) {
        state.offers[index] = { ...state.offers[index], ...updatedOffer };
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch offers
      .addCase(fetchOffers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.loading = false;

        // Deduplicate by _id before setting
        const seen = new Set();
        state.offers = action.payload.filter((offer) => {
          const id = offer._id || offer.id;
          if (seen.has(id)) return false;
          seen.add(id);
          return true;
        });
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Edit offer
      .addCase(editOffer.fulfilled, (state, action) => {
        state.loading = false;
        const updatedOffer = action.payload;
        const updatedId = updatedOffer._id || updatedOffer.id;

        const index = state.offers.findIndex(
          (offer) => (offer._id || offer.id) === updatedId
        );

        if (index !== -1) {
          state.offers[index] = { ...state.offers[index], ...updatedOffer };
        } else {
          // In case offer was not found, add it once
          state.offers.push(updatedOffer);
        }

        // Deduplicate again just in case
        state.offers = state.offers.filter(
          (offer, idx, arr) =>
            idx === arr.findIndex((o) => (o._id || o.id) === (offer._id || offer.id))
        );
      })
      .addCase(editOffer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Toggle status
      .addCase(toggleOfferStatus.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        const updatedId = updatedOffer._id || updatedOffer.id;

        const index = state.offers.findIndex(
          (offer) => (offer._id || offer.id) === updatedId
        );

        if (index !== -1) {
          state.offers[index] = { ...state.offers[index], ...updatedOffer };
        }
      })
      .addCase(toggleOfferStatus.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Delete offer
      .addCase(deleteOffer.fulfilled, (state, action) => {
        const deletedId = action.payload;
        state.offers = state.offers.filter(
          (offer) => offer._id !== deletedId && offer.id !== deletedId
        );
      })
      .addCase(deleteOffer.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { updateOfferInState, clearError } = offersSlice.actions;
export default offersSlice.reducer;

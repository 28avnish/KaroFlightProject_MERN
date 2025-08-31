import { createSlice } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
import { createActivity, deleteActivity, getAllActivities} from "../action/activity";

const initialState = {
  isLoading: false,
  isDeleted: false,
  errorMessage: "",
  activityData: [],
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getAllActivities.pending, (state, action) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllActivities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = "";
        state.isDeleted = false;
        state.activityData = action.payload.data;
      })
      .addCase(getAllActivities.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(deleteActivity.pending, (state, action) => {
        state.isLoading = true;
        state.isDeleted = false;
      })
      .addCase(deleteActivity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleted = true;
        state.activityData = state.activityData.filter(
          (activity) => activity._id !== action?.payload?.payload
        );
        toast.success("Activity Deleted successfully", {
          position: "top-right",
        });
      })
      .addCase(deleteActivity.rejected, (state, action) => {
        state.isLoading = false;
        state.isDeleted = false;
        state.errorMessage = action.payload;
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      })
    //   .addCase(updateActivity.pending, (state, action) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(updateActivity.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.activityData = action.payload.data;
    //     toast.success("Activity Updated successfully", {
    //       position: "top-right",
    //     });
    //   })
    //   .addCase(updateActivity.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.errorMessage = action.payload;
    //     toast.error(action.payload, {
    //       position: "top-right",
    //     });
    //   })

      .addCase(createActivity.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createActivity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.activityData = action.payload.data;
        toast.success("Activity Added successfully", {
          position: "top-right",
        });
      })

      .addCase(createActivity.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload
          ? action.payload
          : "An error occurred while creating the activity.";
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      });
  },
});

export default activitySlice.reducer;
export const {} = activitySlice.actions;

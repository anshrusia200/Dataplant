import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addSchedule, getSchedule } from "../../api";

export interface ScheduleState {
  title: string;
  description: string;
  subject: string;
  frequency: string;
  repeat: String[];
  time: string;
}
export interface SliceState {
  isLoading: boolean;
  schedules: ScheduleState[];
}

const initialState: SliceState = {
  isLoading: false,
  schedules: [],
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSchedule.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSchedule.fulfilled, (state, action) => {
        state.isLoading = false;
        state.schedules = [...state.schedules, action.payload];
        toast.success(`schedule added`);
      })
      .addCase(addSchedule.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("error adding schedule");
      })
      .addCase(getSchedule.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSchedule.fulfilled, (state, action) => {
        state.isLoading = false;
        state.schedules = [...state.schedules, action.payload];
        // toast.success(`schedule added`);
      })
      .addCase(getSchedule.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("error fetching schedule");
      });
  },
});

// export const { addSchedule, getSchedule } = scheduleSlice.actions;
export default scheduleSlice.reducer;

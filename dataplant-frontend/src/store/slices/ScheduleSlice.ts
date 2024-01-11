import { createSlice } from "@reduxjs/toolkit";

export interface ScheduleState {
  title: string;
  description: string;
  subject: string;
  frequency: string;
  repeat: String[];
  time: string;
}

const initialState: ScheduleState[] = [];

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addSchedule(state, action) {
      state.push(action.payload);
    },
    getSchedule(state, action) {
      action.payload.forEach((meet: any) => {
        state.push(meet);
      });
    },
  },
});

export default scheduleSlice.reducer;

export const { addSchedule, getSchedule } = scheduleSlice.actions;

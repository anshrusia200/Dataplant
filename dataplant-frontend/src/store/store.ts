import { configureStore } from "@reduxjs/toolkit";
import meetingSlice from "./slices/ScheduleSlice";

export const store = configureStore({
  reducer: {
    meetings: meetingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

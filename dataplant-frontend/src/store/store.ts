import { configureStore } from "@reduxjs/toolkit";
import scheduleSlice from "./slices/ScheduleSlice";

export const store = configureStore({
  reducer: {
    schedules: scheduleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

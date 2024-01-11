import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { ScheduleState } from "../store/slices/ScheduleSlice";

const instance = axios.create({
  baseURL: "https://dataplant-backend-zftx.onrender.com/",
});

export const addSchedule = createAsyncThunk(
  "addSchedule",
  async (newSchedule: ScheduleState, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(newSchedule);

      const res = await instance.post("/schedules", body, config);

      return res.data;
    } catch (error: any) {
      const { msg } = error.response.data.errors[0];
      console.log(error);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const getSchedule = createAsyncThunk(
  "getSchedule",
  async (_, thunkAPI) => {
    try {
      const res = await instance.get("/schedules");
      return res.data;
    } catch (error: any) {
      const { msg } = error.response.data.errors[0];
      console.log(error);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const deleteSchedule = createAsyncThunk(
  "deleteSchedule",
  async (scheduleId: string, thunkAPI) => {
    try {
      const res = await instance.delete(`/schedules/${scheduleId}`);
      return res.data;
    } catch (error: any) {
      const { msg } = error.response.data.errors[0];
      console.log(error);
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

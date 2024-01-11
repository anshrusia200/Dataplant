import axios from "axios";

import { ScheduleState } from "../store/slices/ScheduleSlice";

const instance = axios.create({
  baseURL: "https://dataplant-backend-zftx.onrender.com/",
});

export const getAllSchedules = async () => {
  try {
    const res = await instance.get("/");

    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
export const addNewSchedule = async (newSchedule: ScheduleState) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(newSchedule);

    const res = await instance.post("/", body, config);

    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

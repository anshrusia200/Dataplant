import { useState } from "react";
import { addNewSchedule } from "../api";

interface ModalProps {
  open: boolean;
  setOpen: any;
}
export const AddModal = ({ open, setOpen }: ModalProps) => {
  const times = [
    "00:00 AM",
    "00:30 AM",
    "01:00 AM",
    "01:30 AM",
    "02:00 AM",
    "02:30 AM",
    "03:00 AM",
    "03:30 AM",
    "04:00 AM",
    "04:30 AM",
    "05:00 AM",
    "05:30 AM",
    "06:00 AM",
    "06:30 AM",
    "07:00 AM",
    "07:30 AM",
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
    "08:30 PM",
    "09:00 PM",
    "09:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [frequency, setFrequency] = useState("Weekly");
  const [repeat, setRepeat] = useState("");
  const [checkedDays, setCheckedDays] = useState([""]);
  const [time, setTime] = useState("");

  const toggleDay = (day: string) => {
    if (checkedDays.includes(day)) {
      setCheckedDays(checkedDays.filter((d) => d !== day));
    } else {
      setCheckedDays([...checkedDays, day]);
    }
  };

  const handleAdd = async () => {
    if (frequency == "Weekly") {
      var repeatDays: string = "";
      var days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      days.forEach((day) => {
        if (checkedDays.includes(day)) {
          repeatDays += day;
        }
      });
      setRepeat(repeatDays);
    }
    if (
      title &&
      description &&
      subject &&
      frequency &&
      (frequency != "Daily" ? repeat : true) &&
      time
    ) {
      var schedule = {
        title: title,
        description: description,
        subject: subject,
        frequency: frequency,
        repeat: repeat,
        time: time,
      };
      const res = await addNewSchedule(schedule);
      console.log(res);
    } else {
      console.log("something missing");
    }
  };

  return (
    <div
      className={`${
        open ? "flex" : "hidden"
      } flex-col w-[350px] bg-[#fff] z-99 absolute right-[100px] rounded-[5px] shadow-xl p-4 font-nunito-sans `}
    >
      <div className="text-[18px] font-semibold mb-2">Add Schedule</div>
      <div className="my-2 text-[15px] font-semibold">
        <div className="flex w-full justify-between my-2 items-center">
          <div className="w-[30%]">Title</div>
          <div className="w-[70%]">
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="w-full border rounded py-1 px-3 text-sm focus:outline-none font-medium"
              placeholder="Please enter title"
            />
          </div>
        </div>
        <div className="flex w-full justify-between my-2 ">
          <div className="w-[30%]">Description</div>
          <div className="w-[70%]">
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="w-full py-2 px-3 text-sm border rounded focus:outline-none resize-none font-medium"
              placeholder="Please enter description"
            />
          </div>
        </div>
        <div className="flex w-full justify-between my-2 items-center">
          <div className="w-[30%]">Subject</div>
          <div className="w-[70%]">
            <input
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              className="w-full border rounded py-1 px-3 text-sm focus:outline-none font-medium"
              placeholder="Please enter subject"
            />
          </div>
        </div>
        <div className="flex w-full justify-between my-2 items-center">
          <div className="w-[30%]">Frequency</div>
          <div className="w-[70%]">
            <select
              onChange={(e) => setFrequency(e.target.value)}
              name="frequency"
              id="frequency"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 focus:outline-none"
            >
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Daily">Daily</option>
            </select>
          </div>
        </div>
        {frequency != "Daily" ? (
          <div className="flex w-full justify-between my-4 items-center">
            <div className="w-[30%]">Repeat</div>
            <div className="w-[70%]">
              {frequency == "Weekly" ? (
                <div className="flex">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day, index) => (
                      <label
                        key={index}
                        className="flex items-center justify-center h-6 w-6 mx-1  cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={checkedDays.includes(day)}
                          onChange={() => toggleDay(day)}
                          className={`hidden ${
                            checkedDays.includes(day)
                              ? "bg-slate-400"
                              : "bg-white"
                          }`}
                        />
                        <div
                          className={`h-6 w-6 rounded-full flex text-[13px] items-center justify-center pt-[1px] border ${
                            checkedDays.includes(day)
                              ? "bg-blue-200"
                              : "bg-transparent"
                          }`}
                        >
                          {day[0]}
                        </div>
                      </label>
                    )
                  )}
                </div>
              ) : (
                <select
                  onChange={(e) => setRepeat(e.target.value)}
                  name="frequency"
                  id="frequency"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 focus:outline-none"
                >
                  <option value="First Monday">First Monday</option>
                  <option value="Last Friday">Last Friday</option>
                </select>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="flex w-full justify-between my-2 items-center">
          <div className="w-[30%]">Time</div>
          <div className="w-[70%]">
            <select
              name="frequency"
              id="frequency"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 focus:outline-none"
              onChange={(e) => setTime(e.target.value)}
            >
              {times.map((time) => (
                <option value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex w-full justify-end mt-5 text-[13px]">
          <button
            onClick={() => setOpen(false)}
            className="bg-[#EBE8EF] w-[100px] py-2 px-5 rounded-[5px] ml-4"
          >
            Cancel
          </button>
          <button
            className="bg-[#391E5A] text-white w-[100px] py-2 px-5 rounded-[5px] ml-4"
            onClick={handleAdd}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

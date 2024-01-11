import { useState } from "react";

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
  const [frequency, setFrequency] = useState("");
  const [repeat, setRepeat] = useState("");

  return (
    <div
      className={`${
        open ? "flex" : "hidden"
      } flex-col w-[350px] bg-[#fff] z-99 absolute rounded-[5px] shadow-lg p-4 font-nunito-sans`}
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
              <option value="volvo">Weekly</option>
              <option value="saab">Monthly</option>
              <option value="opel">Daily</option>
            </select>
          </div>
        </div>
        <div className="flex w-full justify-between my-2 items-center">
          <div className="w-[30%]">Repeat</div>
          
        </div>
        <div className="flex w-full justify-between my-2 items-center">
          <div className="w-[30%]">Time</div>
          <div className="w-[70%]">
            <select
              name="frequency"
              id="frequency"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 focus:outline-none"
            >
              {times.map((time) => (
                <option value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <button onClick={() => setOpen(false)}>Cancel</button>
          <button>Done</button>
        </div>
      </div>
    </div>
  );
};

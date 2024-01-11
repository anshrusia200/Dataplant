import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { EditModal } from "./EditModal";
import { deleteSchedule, getSchedule } from "../api";
import { useAppDispatch } from "../store/hooks";
import { useSelector } from "react-redux";
import { ScheduleState } from "../store/slices/ScheduleSlice";

export const DataTable = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const [modalTop, setModalTop] = useState(0);
  const dispatch = useAppDispatch();
  const data = useSelector((state: any) => state.schedules);
  console.log(data);
  useEffect(() => {
    if (data.schedules.length == 0) {
      dispatch(getSchedule());
    }
  }, []);

  const handleDelete = (id: string) => {
    dispatch(deleteSchedule(id));
  };
  const handleOpen = (e: any, schedule: any) => {
    const clickedButton = e.currentTarget;
    const topPosition = clickedButton.getBoundingClientRect().top;
    setEditModalOpen(!editModalOpen);
    setModalTop(topPosition);
    setModalData(schedule);
  };

  return (
    <>
      <div className="flex mt-6 font-nunito-sans w-[100%]">
        <table className="table-auto w-[100%] border-2 text-sm">
          <thead className="bg-[#e1deea] p-4 font-semibold">
            <tr className="text-left">
              <th className="w-[15%] p-2">Title</th>
              <th className="w-[45%] ">Description</th>
              <th>Subject</th>
              <th className="w-[20%] ">Schedule</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="w-full bg-[#ffffff]">
            {data.schedules.map((schedule: any) => (
              <tr className="border-b-2 font-medium ">
                <td className="ml-1 pl-2">{schedule.title}</td>
                <td className="line-clamp-2 mr-1 my-2">
                  {schedule.description}
                </td>
                <td>{schedule.subject}</td>
                <td>
                  {schedule.frequency == "Daily"
                    ? schedule.frequency + " at " + schedule.time
                    : schedule.frequency == "Weekly"
                    ? schedule.repeat.join(", ") + " at " + schedule.time
                    : schedule.repeat[0] + " at " + schedule.time}
                </td>
                <td>
                  <button
                    className="mx-1"
                    onClick={(e) => handleOpen(e, schedule)}
                  >
                    <Pencil size="18px" />
                  </button>
                  <button
                    className="mx-1"
                    onClick={() => handleDelete(schedule._id)}
                  >
                    <Trash2 size="18px" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editModalOpen && (
        <EditModal
          open={editModalOpen}
          setOpen={setEditModalOpen}
          data={modalData}
          top={modalTop}
        />
      )}
    </>
  );
};

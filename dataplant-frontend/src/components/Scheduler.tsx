import { Search } from "./Search";
import { Button } from "./Button";
import { DataTable } from "./DataTable";
import { AddModal } from "./AddModal";
import { useState } from "react";

export const Scheduler = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex justify-between w-[100%]">
        <Search />
        <Button open={openModal} setOpen={setOpenModal} />
        <AddModal open={openModal} setOpen={setOpenModal} />
      </div>
      <div className="flex">
        <DataTable />
      </div>
    </div>
  );
};

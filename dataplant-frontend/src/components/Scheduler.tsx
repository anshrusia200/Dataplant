import { Search } from "./Search";
import { Button } from "./Button";
import { DataTable } from "./DataTable";
import { AddModal } from "./AddModal";
import { useState } from "react";

export const Scheduler = () => {
  const [openModal, setOpenModal] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex justify-between w-[95%]">
        <Search input={searchInput} setInput={setSearchInput} />
        <Button open={openModal} setOpen={setOpenModal} />
        <AddModal open={openModal} setOpen={setOpenModal} />
      </div>
      <div className="flex w-[95%]">
        <DataTable input={searchInput} setInput={setSearchInput} />
      </div>
    </div>
  );
};

import { PlusCircle } from "lucide-react";
interface ButtonProps {
  open: boolean;
  setOpen: any;
}
export const Button = ({ open, setOpen }: ButtonProps) => {
  return (
    <div>
      <button
        className="flex bg-[#391E5A] text-[#E4E4EE] p-2 rounded-[5px]"
        onClick={() => setOpen(!open)}
      >
        <PlusCircle className="mr-2" />
        Add
      </button>
    </div>
  );
};

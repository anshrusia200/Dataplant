import SideBar from "./SideBar";
import { SubNavbar } from "./SubNavbar";
type Props = {
  children: JSX.Element;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col calc-w-full-minus-72 bg-cyan-500">
          <SubNavbar />
          <div className=" absolute top-[88px] left-[72px] p-[15px] calc-w-full-minus-72 bg-[#f3f3f9]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;

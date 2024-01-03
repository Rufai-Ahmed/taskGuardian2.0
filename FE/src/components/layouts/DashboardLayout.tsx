import { DashboardSider } from "../../pages/Dashboard/DashboardSider";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div className="flex overflow-">
      <div className="w-[250px]">
        <DashboardSider />
      </div>
      <div className=" w-[calc(100vw-250px)]">
        <Outlet />
      </div>
    </div>
  );
};

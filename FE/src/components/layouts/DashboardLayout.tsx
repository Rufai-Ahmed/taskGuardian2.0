import React from "react";
import { DashboardSider } from "../../pages/Dashboard/DashboardSider";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div className="flex">
      <DashboardSider />
      <Outlet />
    </div>
  );
};

import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layouts/Layout";
import { HomeScreen } from "../pages/HomeScreen";
import { Register } from "../pages/Auth/Register";
import { Verify } from "../pages/Auth/Verify";
import { Login } from "../pages/Auth/Login";
import { DashboardLayout } from "../components/layouts/DashboardLayout";
import { TaskList } from "../pages/Dashboard/TaskList";
import { PrivateRouter } from "./PrivateRouter";
import { PTaskList } from "../pages/Dashboard/PTaskList";
import { Pricing } from "../pages/Pricing";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/signup/:plan",
    element: <Register />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/upgrade/:plan",
    element: <Register />,
  },
  {
    path: "/dashboard/:userID",
    element: (
      <PrivateRouter>
        <DashboardLayout />
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        path: "/dashboard/:userID/tasklist",
        element: <TaskList />,
      },
      {
        path: "/dashboard/:userID/:projectID/projectlist",
        element: <PTaskList />,
      },
    ],
  },
]);

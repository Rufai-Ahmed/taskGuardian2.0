import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layouts/Layout";
import { HomeScreen } from "../pages/HomeScreen";
import { Register } from "../pages/Auth/Register";
import { Verify } from "../pages/Auth/Verify";
import { Login } from "../pages/Auth/Login";
import { DashboardLayout } from "../components/layouts/DashboardLayout";
import { TaskList } from "../pages/Dashboard/TaskList";

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
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard/:userID",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: "/dashboard/:userID/tasklist",
        element: <TaskList />,
      },
    ],
  },
]);

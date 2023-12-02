import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { HomeScreen } from "../pages/HomeScreen";
import { Register } from "../pages/Auth/Register";

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
]);

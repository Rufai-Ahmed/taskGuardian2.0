import { Header } from "../common/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../common/Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-base-200 min-h-[calc(100vh-70px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

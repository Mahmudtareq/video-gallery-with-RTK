import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

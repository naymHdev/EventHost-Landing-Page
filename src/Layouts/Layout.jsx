import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
  return (
    <>
      <div className=" w-11/12 mx-auto">
        <Header />
        <div className=" min-h-screen">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

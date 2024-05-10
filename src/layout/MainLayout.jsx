import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";


const MainLayout = () => {
    return (
        <div className="font-display ">
          <div className="container  mx-auto shadow-md bg-fixed rounded-b-md">
          <Navbar/>
          </div>
           <div className=" container  mx-auto">
           <Outlet/>
           </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;
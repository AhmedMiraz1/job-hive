import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllJobs from "../pages/AllJobs";
import AppliedJobs from "../pages/AppliedJobs";
import AddJob from "../pages/AddJob";
import MyJob from "../pages/MyJob";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JobDetails from "../pages/JobDetails";










const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path:'/',
          element: <Home/>,
         
        },
        {
          path:'/allJobs',
          element: <AllJobs/>
        },
         {
          path: '/appliedJobs',
          element: <AppliedJobs/>
        }, 
        {
          path: '/addJob',
          element: <AddJob/>
        },
        {
          path: '/myJob',
          element: <MyJob/>
        },
        {
          path:'/login',
          element:<Login/>
        }, 
        {
          path:'/register',
          element:<Register/>

        },
        {
          path:'/jobDetails/:id',
          element:<JobDetails/>
        }
      ]
    },
  ]);




  export default router
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
import SingleJobDetails from "../pages/SingleJobDetails";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobDetails/:_id",
        element: <PrivateRoute><JobDetails /></PrivateRoute>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/jobs/${params._id}`)
      },
      {
        path: "/allJobs",
        element: <AllJobs />,
        
        
      },
      {
        path:'/job/:_id',
        element:<PrivateRoute><SingleJobDetails/></PrivateRoute>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/jobs/${params._id}`)
      },
      {
        path: "/appliedJobs",
        element: <PrivateRoute><AppliedJobs /></PrivateRoute>,
      },
      {
        path: "/addJob",
        element: <PrivateRoute><AddJob /></PrivateRoute>,
      },
      {
        path: "/myJob",
        element: <PrivateRoute><MyJob /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:'/update-job/:_id',
        element:<PrivateRoute><UpdateJob/></PrivateRoute>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/jobs/${params._id}`)
      },
      
    ],
  },
]);

export default router;

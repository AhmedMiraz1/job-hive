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
        element: <JobDetails />,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/jobs/${params._id}`)
      },
      {
        path: "/allJobs",
        element: <AllJobs />,
        
        
      },
      {
        path:'/job/:_id',
        element:<SingleJobDetails/>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/jobs/${params._id}`)
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
      },
      {
        path: "/addJob",
        element: <AddJob />,
      },
      {
        path: "/myJob",
        element: <MyJob />,
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
        element:<UpdateJob/>,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/jobs/${params._id}`)
      },
      
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Errorpage from "../Component/Errorpage/Errorpage";
import Home from "../Component/Home/Home";
import Jobs from "../Component/Job/Jobs";
import Appliedjobs from "../Component/Appliedjobs/Appliedjobs";
import Statistics from "../Component/Statistics/Statistics";
import Blogs from "../Component/Blog/Blog";
import Jobdetails from "../Component/Jobdetails/Jobdetails";
const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
        loader: () => fetch("../../public/jobs.json"),
      },
      {
        path: "/appliedjobs",
        element: <Appliedjobs />,
        loader: () => fetch("../../public/jobs.json"),
      },

      {
        path: "/job/:id",
        element: <Jobdetails />,
        loader: () => fetch("../../public/jobs.json"),
      },
    ],
  },
]);

export default Route;

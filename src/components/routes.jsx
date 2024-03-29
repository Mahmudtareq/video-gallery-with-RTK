import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLyout/MainLayout";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/videos/:videoId",
        element: <Video />,
      },
      {
        path: "/videos/add",
        element: <Add />,
      },
      {
        path: "/videos/edit/:videoId",
        element: <Edit />,
      },
    ],
  },
]);
export default router;

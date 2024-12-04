import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <div>404</div>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ]
    },
  ]);

export default router;
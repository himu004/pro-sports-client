import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllEquipment from "../pages/AllEquipment/AllEquipment";
import PrivateRoutes from "./PrivateRoutes";
import AddEquipment from "../pages/AddEquipment/AddEquipment";
import MyEquipment from "../pages/MyEquipment/MyEquipment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
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
          path: "/all-equipment",
          element: <AllEquipment />,
        },
        {
          path: "/add-equipment",
          element: <PrivateRoutes>
            <AddEquipment />
          </PrivateRoutes>,
        },
        {
          path: "/my-equipment",
          element: <PrivateRoutes>
            <MyEquipment />
          </PrivateRoutes>,
        },
      ]
    },
  ]);

export default router;
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
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyProfile from "../pages/MyProfile/MyProfile";
import ViewDetails from "../pages/AllEquipment/ViewDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import AboutUs from "../pages/AboutUs/AboutUs";

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
        loader: () =>
          fetch("https://pro-sports-server.vercel.app/all-equipment"),
      },
      {
        path: "/add-equipment",
        element: (
          <PrivateRoutes>
            <AddEquipment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-equipment",
        element: (
          <PrivateRoutes>
            <MyEquipment />
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://pro-sports-server.vercel.app/my-equipment"),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
        loader: async () => {
          const res = await fetch(
            "https://pro-sports-server.vercel.app/products"
          );
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoutes>
            <MyProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/all-equipment/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://pro-sports-server.vercel.app/all-equipment/${params.id}`
          ),
      },
      {
        path: "/update-equipment/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://pro-sports-server.vercel.app/update-equipment/${params.id}`
          ),
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;

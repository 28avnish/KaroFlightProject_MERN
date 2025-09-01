import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Auth/Login";
import ViewAdminUsers from "../pages/SuperAdmin/AdminUser/ViewAdminUsers";
import ViewTours from "../pages/Tour/ViewTour";
import CreateTour from "../pages/Tour/createTour";
import ViewContactUs from "../pages/ContactUs/ViewContactUs";
import ViewBooking from "../pages/Booking/ViewBooking";
import ViewOrder from "../pages/Order/ViewOrder";
import CreateAdminUser from "../pages/SuperAdmin/AdminUser/CreateAdminUser";
import UpdateAdminUser from "../pages/SuperAdmin/AdminUser/UpdateAdminUser";
import EditProfile from "../pages/Auth/EditProfile";

export const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/update-profile",
        element: <EditProfile />,
      },
      {
        path: "/admins",
        element: <ViewAdminUsers />,
      },
      {
        path: "/create-new-admin",
        element: <CreateAdminUser />,
      },
      {
        path: "/update-admin",
        element: <UpdateAdminUser />,
      },
      {
        path: "/tour",
        element: <ViewTours />,
      },
      {
        path: "/createTour",
        element: <CreateTour />,
      },
      {
        path: "/contactUs",
        element: <ViewContactUs />,
      },
      {
        path: "/booking",
        element: <ViewBooking />,
      },
      {
        path: "/order",
        element: <ViewOrder />,
      },
    ],
  },
]);

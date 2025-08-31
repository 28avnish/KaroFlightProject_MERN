import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import ViewActivities from "../pages/Activity/ViewActivity";
import CreateActivity from "../pages/Activity/CreateActivity";
import ViewTours from "../pages/Tour/ViewTour";
import CreateTour from "../pages/Tour/createTour";
import ViewContactUs from "../pages/ContactUs/ViewContactUs";
import ViewProduct from "../pages/Product/ViewProduct";
import CreateProduct from "../pages/Product/CreateProduct";
import ViewBooking from "../pages/Booking/ViewBooking";
import ViewOrder from "../pages/Order/ViewOrder";
import ViewRegion from "../pages/Region/ViewRegion";
import CreateRegion from "../pages/Region/CreateRegion";
import Layout from "../layout/Layout";
import Login from "../pages/Auth/Login";

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
        path: "/activity",
        element: <ViewActivities />,
      },
      {
        path: "/createActivity",
        element: <CreateActivity />,
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

      // {
      //   path: "/createActivity",
      //   element: <CreateActivity />
      // },

      {
        path: "/product",
        element: <ViewProduct />,
      },
      {
        path: "/createProduct",
        element: <CreateProduct />,
      },
      {
        path: "/booking",
        element: <ViewBooking />,
      },
      {
        path: "/order",
        element: <ViewOrder />,
      },
      {
        path: "/region",
        element: <ViewRegion />,
      },
      {
        path: "/createRegion",
        element: <CreateRegion />,
      },
    ],
  },

]);

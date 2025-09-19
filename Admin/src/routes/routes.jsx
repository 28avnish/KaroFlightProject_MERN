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
import { ViewPricingConfig } from "../pages/SuperAdmin/PricingConfig/ViewPricingConfig";
import { CreatePricingConfig } from "../pages/SuperAdmin/PricingConfig/CreatePricingConfig";
import FlightsList from "../components/Flights/FlightLists";
import AddFlight from "../components/Flights/AddFlights";
import HotelLists from "../components/Hotels/HotelLists";
import AddHotelPage from "../components/Hotels/AddHotels";
import OffersPage from "../components/Offers/AllOffers";
import AddNewOffersPage from "../components/Offers/AddNewOffers";
import AllBlogs from "../components/Blogs/AllBlogs";
import CreateNewBlog from "../components/Blogs/CreateNewBlog";
import AllBookings from "../components/Bookings/AllBookings";
import HotelBookingList from "../components/Bookings/HotelBookedList";
import FlightBookingList from "../components/Bookings/FlightBookedList";

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
        path: "/pricing-config",
        element: <ViewPricingConfig />,
      },
      {
        path: "/add-pricing-config",
        element: <CreatePricingConfig />,
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
      {
        path: "/flights-lists",
        element: <FlightsList />,
      },
      {
        path: "/flights/add",
        element: <AddFlight />,
      },
      {
        path: "/hotel-lists",
        element: <HotelLists />,
      },
      {
        path: "/hotels/add",
        element: <AddHotelPage />,
      },
      {
        path: "/offers",
        element: <OffersPage />,
      },
      {
        path: "/offers/add",
        element: <AddNewOffersPage />,
      },
      {
        path: "/blog-and-articles",
        element: <AllBlogs />,
      },
      {
        path: "/blog-and-articles/add",
        element: <CreateNewBlog />,
      },
      {
        path: "/all-booking",
        element: <AllBookings />,
      },
      {
        path: "/booking/flights",
        element: <FlightBookingList />,
      },
      {
        path: "/booking/hotels",
        element: <HotelBookingList />,
      },
    ],
  },
]);

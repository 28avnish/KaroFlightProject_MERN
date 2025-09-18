// -----------------------------------------------Imports---------------------------------------------
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import SignUp from "../pages/Auth/Signup";
import SignupOtp from "../pages/Auth/SignupOtp";
import Login from "../pages/Auth/Login";
import ForgotPasswordOtp from "../pages/Auth/ForgotPasswordOtp";
import SuccessAuth from "../pages/Auth/OAuth/SuccessAuth";
import FailedAuth from "../pages/Auth/OAuth/FailedAuth";
import NotFound from "../pages/NotFound/NotFound";
import Maintenance from "../pages/Maintenance/Maintenance";
import Home from "../pages/Home/Home";
import HotelHome from "../components/HomeComponents/HotelHome";
import FlightHome from "../components/HomeComponents/FlightHome";
import AboutUs from "../pages/AboutUs/AboutUs";
import Career from "../pages/Career/Career";
import Blog from "../pages/Blog/Blog";
import Offers from "../pages/Offers/Offers";
import RefundPolicy from "../components/Refund/RefundPolicy";
import RefundCalculator from "../components/Refund/RefundCalculator";
import RefundIntegration from "../components/tripjack/Refund";
import HotelBooking from "../components/Hotel/HotelBooking";
import HotelBookingCancellation from "../components/Hotel/HotelBookingCancellation";
import AdminApprovalFlow from "../components/Admin/AdminApproval";
import NewsletterSubscription from "../components/Newsletter/Newsletter";
import Info from "../pages/Info/Info";
import { Demo } from "../pages/demo";

// Lazy Loading 😴
// const Blog = lazy(() => import("../pages/Blog"));

// ---------------------------------------------------------------------------------------------------
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "demo",
        element: <Demo />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signup/otp",
        element: <SignupOtp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password-otp",
        element: <ForgotPasswordOtp />,
      },
      {
        path: "/successAuth",
        element: <SuccessAuth />,
      },
      {
        path: "/failedAuth",
        element: <FailedAuth />,
      },
      {
        path: "/hotel-home",
        element: <HotelHome />,
      },
      {
        path: "/flight-home",
        element: <FlightHome />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/info",
        element: <Info />,
      },
      {
        path: "/offer",
        element: <Offers />,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },
      {
        path: "/refund-calculator",
        element: <RefundCalculator />,
      },
      {
        path: "/tripjack",
        element: <RefundIntegration />,
      },
      {
        path: "/hotel-booking",
        element: <HotelBooking />,
      },
      {
        path: "/hotel-booking-cancellation",
        element: <HotelBookingCancellation />,
      },
      {
        path: "/admin-approval",
        element: <AdminApprovalFlow />,
      },
      {
        path: "/newsletter",
        element: <NewsletterSubscription />,
      },

      {
        path: "*",
        element: <NotFound />, // 404 fallback
      },
      //   {
      //     path: "/blog/:slug",
      //     element: (
      //       <Suspense fallback={<Loader />}>
      //         <Blog />
      //       </Suspense>
      //     ),
      //   },
    ],
  },
]);

export const maintenanceAppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Maintenance />,
  },
]);

// -----------------------------------------------Imports---------------------------------------------
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Maintenance from "../pages/Maintenance";
import SignUp from "../pages/Auth/Signup";
import NotFound from "../pages/NotFound";
import SignupOtp from "../pages/Auth/SignupOtp";
import Login from "../pages/Auth/Login";
import ForgotPasswordOtp from "../pages/Auth/ForgotPasswordOtp";
import SuccessAuth from "../pages/Auth/OAuth/SuccessAuth";
import FailedAuth from "../pages/Auth/OAuth/FailedAuth";

// Lazy Loading 😴
// const Blog = lazy(() => import("../pages/Blog"));

// ---------------------------------------------------------------------------------------------------
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
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

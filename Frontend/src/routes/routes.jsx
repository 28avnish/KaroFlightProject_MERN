// -----------------------------------------------Imports---------------------------------------------
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Maintenance from "../pages/Maintenance";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import SignUp from "../pages/Auth/Signup";
import NotFound from "../pages/NotFound";
import SignupOtp from "../pages/Auth/SignupOtp";

// Lazy Loading 😴
// const Blog = lazy(() => import("../pages/Blog"));

// ---------------------------------------------------------------------------------------------------
console.log("enter inside the routes page");
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-up/otp",
        element: <SignupOtp />,
      },
      {
        path: "/productDetails",
        element: <ProductDetails />,
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

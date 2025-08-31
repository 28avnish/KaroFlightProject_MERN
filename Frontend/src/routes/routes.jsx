// -----------------------------------------------Imports---------------------------------------------
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import Maintenance from "../pages/Maintenance";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";

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
        path: "/productDetails",
        element: <ProductDetails />,
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

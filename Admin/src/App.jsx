import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./layout/Layout.jsx";
import { appRouter } from "./routes/routes.jsx";

function App() {
  return (
    <div className="font-helvetica-regular bg-gray-50">
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <RouterProvider router={appRouter}>
        <Layout />
      </RouterProvider>
    </div>
  );
}

export default App;

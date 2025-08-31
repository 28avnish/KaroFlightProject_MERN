import { RouterProvider } from "react-router-dom";
import "./App.css";
import { appRouter, maintenanceAppRouter } from "./routes/routes";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

function App() {
  return (
    <HelmetProvider>
      <Toaster richColors containerClassName="overflow-auto" />
      <RouterProvider
        // key={siteSetting?.setting_data?.page_is_home || "default"} // Ensures re-render when settings change
        router={true ? appRouter : maintenanceAppRouter}
      />
    </HelmetProvider>
  );
}

export default App;

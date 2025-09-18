import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import persistStore from "redux-persist/es/persistStore.js";
import { injectStore } from "./services/axiosInterceptor.js";
import store from "./features/store.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";

let persistor = persistStore(store);
injectStore(store);

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </LanguageProvider>
);

// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider, useSelector } from "react-redux";
import { persistor, store } from "./store/store.js";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { setAuthToken } from "./helpers/axiosInstance.js";
import { selectToken } from "./store/reducers/authSlice.js";

const AsyncAuthToken = () => {
  const token = useSelector(selectToken);
  setAuthToken(token);
  return null;
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AsyncAuthToken />
        <App />
      </PersistGate>
      <ToastContainer />
    </Provider>
  </BrowserRouter>
);

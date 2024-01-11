import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.min.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
);

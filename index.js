import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ShopContextProvider from "./Context/ShopContext"; // ✅ import the provider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContextProvider>
    {" "}
    {/* ✅ wrap here */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShopContextProvider>
);

reportWebVitals();

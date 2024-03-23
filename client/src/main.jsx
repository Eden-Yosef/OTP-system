import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./form.jsx";
import AppRoutes from "./AppRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes>
      <Form />
    </AppRoutes>
  </React.StrictMode>
);

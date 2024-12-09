import React from "react";
import ReactDOM from "react-dom/client";
import App from "./_app";
import "./index.css"; // Opsional, untuk gaya global

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

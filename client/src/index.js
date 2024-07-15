import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
// import "react-toastify/dist/ReactToastify.css"; //import react toastify in _app.js
import "semantic-ui-css/semantic.min.css"; //semantic ui css package

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { BrainwaveProvider } from "./context/BrainwaveContext.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <BrainwaveProvider>
      <App />
    </BrainwaveProvider>
  </Router>
);

import React, { useState } from "react";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import EventInfo from "./pages/EventInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const MainApp = () => {
  const [theme, setTheme] = useState("dark-theme");

  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<App toggleTheme={toggleTheme} theme={theme} />}
          />
          <Route
            path="/EventInfo"
            element={<EventInfo toggleTheme={toggleTheme} theme={theme} />}
          />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

root.render(<MainApp />);

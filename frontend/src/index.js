import React, { useState } from "react";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import EventInfo from "./pages/EventInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const MainApp = () => {
  //Login handler

  const [loggedIn, setLoggedIn] = useState(false)
  const toggleLoggedIn = () => {
    const newstatus = loggedIn === false ? true : false;
    setLoggedIn(newstatus)
  }

  // Theme handler
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
            element={
              <App
                toggleTheme={toggleTheme}
                theme={theme}

                toggleLoggedIn={toggleLoggedIn}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/EventInfo"
            element={
              <EventInfo
                toggleTheme={toggleTheme}
                theme={theme}

                toggleLoggedIn={toggleLoggedIn}
                loggedIn={loggedIn}
              />
            }
          />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

root.render(<MainApp />);

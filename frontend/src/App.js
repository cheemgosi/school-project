import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";
import "./App.css";
import "./themes.css";
import { useState } from "react";
import EventForm from "./components/EventForm";

function App() {
  const [theme, setTheme] = useState("dark-theme");

  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  const [showEventForm, setShowEventForm] = useState(false);

  return (
    <div className="App">
      <Container>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Navbar
          showEventForm={showEventForm}
          setShowEventForm={setShowEventForm}
          theme={theme}
        />
        {showEventForm && <EventForm theme={theme} />}
        <EventSection theme={theme} />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";
import "./App.css";
import "./themes.css";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark-theme");

  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className="App">
      <Container>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Navbar />
        <EventSection />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

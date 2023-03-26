import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";
import "./themes.css";
import { useState } from "react";
import EventForm from "./components/EventForm";

function App({ toggleTheme, theme }) {
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

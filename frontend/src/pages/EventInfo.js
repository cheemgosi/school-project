import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import EventDetails from "../components/EventDetails";
import EventForm from "../components/EventForm";

const EventInfo = ({
  toggleTheme,
  theme,
  showEventForm,
  setShowEventForm,
  loggedIn,
  toggleLoggedIn,
}) => {
  const location = useLocation();
  const event = location.state?.event;

  if (!event) {
    return (
      <Container>
        <Header toggleLoggedIn={toggleLoggedIn} loggedIn={loggedIn} />
        <Navbar
          showEventForm={showEventForm}
          setShowEventForm={setShowEventForm}
          theme={theme}
        />
        {showEventForm && <EventForm theme={theme} />}
        <div className="">Event not found</div>
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        toggleLoggedIn={toggleLoggedIn}
        loggedIn={loggedIn}
      />
      <Navbar
        showEventForm={showEventForm}
        setShowEventForm={setShowEventForm}
        theme={theme}
      />
      {showEventForm && <EventForm theme={theme} />}
      <EventDetails event={event} theme={theme} />
      <Footer theme={theme} />
    </Container>
  );
};

export default EventInfo;

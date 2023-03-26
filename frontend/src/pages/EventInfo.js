import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import EventDetails from "../components/EventDetails";

const EventInfo = ({ toggleTheme, theme }) => {
  const location = useLocation();
  const event = location.state?.event;

  if (!event) {
    return (
      <Container>
        <Header />
        <Navbar />
        <div className="">Event not found</div>
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Navbar theme={theme} />
      <EventDetails event={event} theme={theme} />
      <Footer theme={theme} />
    </Container>
  );
};

export default EventInfo;

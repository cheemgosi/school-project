import React from "react";
import { Container } from "react-bootstrap";
import EventBanner from "./EventBanner";
import EventDescription from "./EventDescription";

const EventDetails = ({ event, theme }) => {
  return (
    <Container className={theme}>
      <EventBanner event={event} />
      <EventDescription event={event} theme={theme} />
    </Container>
  );
};

export default EventDetails;

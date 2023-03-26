import React from "react";
import { Container } from "react-bootstrap";

const EventDetails = ({ event, theme }) => {
  return (
    <Container className={theme}>
      <div className="event-details">
        <h1>{event.name}</h1>
        <img
          src={event.thumbnail}
          alt={event.name}
          style={{ width: "600px", height: "600px" }}
        />
        <p>{event.location}</p>
        <p>{event.timeAndDate}</p>
        <p>{event.endTimeAndDate}</p>
        <p>{event.price}</p>
        <p>{event.city}</p>
        <p>{event.address}</p>
        <p>{event.eventDescription}</p>
        <p>{event.performersDescription}</p>
        <p>{event.tags}</p>
      </div>
    </Container>
  );
};

export default EventDetails;

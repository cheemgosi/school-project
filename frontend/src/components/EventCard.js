import React from 'react';
import { Card, Button } from 'react-bootstrap';

const EventCard = ({ event }) => {
  return (
    <Card className="event-card">
      <Card.Body className="d-flex">
        <img
          src={event.thumbnail}
          alt={event.name}
          className="event-thumbnail mr-3"
        />
        <div>
          <Card.Title className="font-weight-bold">{event.name}</Card.Title>
          <Card.Text>{event.location}</Card.Text>
          <Card.Text>{event.timeAndDate}</Card.Text>
          <Button>Add to Favourites</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
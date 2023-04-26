import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const [isFav, setIsFav] = useState(false);
  const toggleFavClass = () => {
    setIsFav(!isFav);
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/EventInfo", { state: { event } });
  };

  return (
    <Card className="event-card clickable me-1 mt-1" onClick={handleClick}>
      <Card.Body className="d-flex">
        <img
          src={event.thumbnailUrl}
          alt={event.eventName}
          className="event-thumbnail me-3"
        />
        <div>
          <Card.Title className="font-weight-bold">
            {event.eventName}
          </Card.Title>
          <Card.Text>{event.address}</Card.Text>
          <Card.Text>
            {new Date(event.startTime).toLocaleString()} -{" "}
            {new Date(event.endTime).toLocaleString()}
          </Card.Text>
          <Button
            className={isFav ? "btn-favs-active" : "btn-favs"}
            onClick={(e) => {
              e.stopPropagation();
              toggleFavClass();
            }}
          >
            {isFav ? "Remove from favourites" : "Add to favourites"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;

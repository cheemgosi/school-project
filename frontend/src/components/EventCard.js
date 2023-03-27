import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
          src={event.thumbnail}
          alt={event.name}
          className="event-thumbnail me-3"
        />
        <div>
          <Card.Title className="font-weight-bold">{event.name}</Card.Title>
          <Card.Text>{event.location}</Card.Text>
          <Card.Text>{event.timeAndDate}</Card.Text>
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

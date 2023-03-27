import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const EventBanner = ({ event }) => {
  const [showTags, setShowTags] = useState(false);

  const toggleTags = () => {
    setShowTags(!showTags);
  };

  const [isFav, setIsFav] = useState(false);
  const toggleFavClass = () => {
    setIsFav(!isFav);
  };

  return (
    <Card
      className="mb-3"
      style={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}
    >
      <Card.Img
        className="m-3"
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
        src={event.thumbnail}
        alt="Event"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <Card.Body>
          <Card.Title className="h1">{event.name}</Card.Title>
          <Card.Text>{event.location}</Card.Text>
          <Card.Text className="h2">{event.timeAndDate}</Card.Text>
          <Card.Text className="h2">{event.price + " eur"}</Card.Text>
        </Card.Body>
        <Card.Body
          className="additional-info me-2 mb-2 rounded"
          style={{ flexGrow: 1 }}
        >
          <Card.Text>Favourited by: {event.favouritesCount} people</Card.Text>
          <Card.Text>Artists: {event.organizers}</Card.Text>
          <Card.Text>Event Length: {event.length}</Card.Text>
          <Button
            className={showTags ? "btn-favs-active mb-2" : "btn-custom mb-2"}
            onClick={toggleTags}
          >
            {showTags ? "Hide tags" : "Reveal event tags"}
          </Button>
          {showTags && <Card.Text>Tags: {event.tags.join(", ")}</Card.Text>}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              className={isFav ? "btn-favs-active me-2" : "btn-custom me-2"}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavClass();
              }}
            >
              {isFav ? "Remove from favourites" : "Add to favourites"}
            </Button>
            <Button className="btn-custom">Tickets</Button>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default EventBanner;

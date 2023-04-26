import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import EventCard from "./EventCard";

const EventSection = ({ theme }) => {
  const [eventSections, setEventSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upcomingEvents = await fetch(
          "http://localhost:8080/api/events/upcoming"
        ).then((res) => res.json());

        const currentEvents = await fetch(
          "http://localhost:8080/api/events/current"
        ).then((res) => res.json());

        const newestEvents = await fetch(
          "http://localhost:8080/api/events/newest"
        ).then((res) => res.json());

        setEventSections([
          { title: "Currently Happening", events: currentEvents },
          { title: "Upcoming Events", events: upcomingEvents },
          { title: "Newly Added Events", events: newestEvents },
        ]);
      } catch (err) {
        console.error("Error fetching events data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <Row className={["mb-5", theme].join(" ")}>
      {eventSections.map((section, index) => (
        <Col key={index} xs={12} md={4} className="event-section">
          <h3>{section.title}</h3>
          <div className="event-list">
            {section.events.map((event, eventIndex) => (
              <EventCard key={eventIndex} event={event} />
            ))}
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default EventSection;

import React from "react";
import { Row, Col } from "react-bootstrap";
import EventCard from "./EventCard";

const eventSections = [
  {
    title: "Currently Happening",
    events: [
      {
        thumbnail: "",
        name: "curName1",
        location: "curLoc1",
        timeAndDate: "curTime1",
      },
      {
        thumbnail: "",
        name: "curName2",
        location: "curLoc2",
        timeAndDate: "curTime2",
      },
      {
        thumbnail: "",
        name: "curName3",
        location: "curLoc3",
        timeAndDate: "curTime3",
      },
    ], // Add the relevant events data here
  },
  {
    title: "Upcoming Events",
    events: [
      {
        thumbnail: "",
        name: "upName1",
        location: "upLoc1",
        timeAndDate: "upTime1",
      },
      {
        thumbnail: "",
        name: "upName2",
        location: "upLoc2",
        timeAndDate: "upTime2",
      },
      {
        thumbnail: "",
        name: "upName3",
        location: "upLoc3",
        timeAndDate: "upTime3",
      },
    ], // Add the relevant events data here
  },
  {
    title: "Newly Added Events",
    events: [
      {
        thumbnail: "",
        name: "newName1",
        location: "newLoc1",
        timeAndDate: "newTime1",
      },
      {
        thumbnail: "",
        name: "newName2",
        location: "newLoc2",
        timeAndDate: "newTime2",
      },
      {
        thumbnail: "",
        name: "newName3",
        location: "newLoc3",
        timeAndDate: "newTime3",
      },
      {
        thumbnail: "",
        name: "newName3",
        location: "newLoc3",
        timeAndDate: "newTime3",
      },
    ], // Add the relevant events data here
  },
];

const EventSection = ({ theme }) => {
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

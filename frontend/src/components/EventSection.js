import React from 'react';
import { Row, Col } from 'react-bootstrap';
import EventCard from './EventCard';

const eventSections = [
  {
    title: 'Currently Happening',
    events: [], // Add the relevant events data here
  },
  {
    title: 'Upcoming Events',
    events: [], // Add the relevant events data here
  },
  {
    title: 'Newly Added Events',
    events: [], // Add the relevant events data here
  },
];

const EventSection = () => {
  return (
    <Row className="mb-5">
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
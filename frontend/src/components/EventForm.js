import React, { useState } from "react";
import {
  Form,
  Button,
  Col,
  Row,
  ToggleButtonGroup,
  ToggleButton,
  Image,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventForm = ({ theme }) => {
  // State for form inputs
  const [eventName, setEventName] = useState("");
  const [eventStartDate, setEventStartDate] = useState(new Date());
  const [eventEndDate, setEventEndDate] = useState(new Date());
  const [eventPrice, setEventPrice] = useState("");
  const [eventCity, setEventCity] = useState("");
  const [eventAddress, setEventAddress] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [performersDescription, setPerformersDescription] = useState("");
  const [eventTags, setEventTags] = useState([]);
  const [eventThumbnail, setEventThumbnail] = useState(null);

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
  };

  return (
    <Form onSubmit={handleSubmit} className={theme} autoComplete={"off"}>
      {/* Event name */}
      <Form.Group controlId="eventName">
        <Form.Label>Event Name</Form.Label>
        <Form.Control
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
      </Form.Group>

      {/* Event start and end dates and times */}
      <Form.Group as={Row}>
        <Col>
          <Form.Label>Start Date and Time</Form.Label>
          <DatePicker
            selected={eventStartDate}
            onChange={(date) => setEventStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
            required
          />
        </Col>
        <Col>
          <Form.Label>End Date and Time</Form.Label>
          <DatePicker
            selected={eventEndDate}
            onChange={(date) => setEventEndDate(date)}
            showTimeSelect
            dateFormat="Pp"
            required
          />
        </Col>
      </Form.Group>

      {/* Event price */}
      <Form.Group controlId="eventPrice">
        <Form.Label>Event Price</Form.Label>
        <Form.Control
          type="number"
          value={eventPrice}
          onChange={(e) => setEventPrice(e.target.value)}
          required
        />
      </Form.Group>

      {/* Event city */}
      <Form.Group controlId="eventCity">
        <Form.Label>City</Form.Label>
        <Form.Control
          as="select"
          value={eventCity}
          onChange={(e) => setEventCity(e.target.value)}
          required
        >
          <option>Select City</option>
          <option>City 1</option>
          <option>City 2</option>
          <option>City 3</option>
          {/* Add more city options */}
        </Form.Control>
      </Form.Group>

      {/* Event address */}
      <Form.Group controlId="eventAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          value={eventAddress}
          onChange={(e) => setEventAddress(e.target.value)}
          required
        />
      </Form.Group>

      {/* Event description */}
      <Form.Group controlId="eventDescription">
        <Form.Label>Event Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          required
        />
      </Form.Group>

      {/* Performers' description */}
      <Form.Group controlId="performersDescription">
        <Form.Label>Performers' Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={performersDescription}
          onChange={(e) => setPerformersDescription(e.target.value)}
          required
        />
      </Form.Group>

      {/* Event tags */}
      <Form.Group controlId="eventTags">
        <Form.Label>Event Tags</Form.Label>
        <Form.Control
          type="text"
          value={eventTags}
          onChange={(e) => setEventTags(e.target.value.split(","))}
          placeholder="Enter comma-separated tags"
          required
        />
      </Form.Group>

      {/* Event thumbnail */}
      <Form.Group controlId="eventThumbnail">
        <Form.Label>Event Thumbnail</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setEventThumbnail(e.target.files[0])}
          required
        />
        {eventThumbnail && (
          <Image
            src={URL.createObjectURL(eventThumbnail)}
            thumbnail
            className="mt-3"
          />
        )}
      </Form.Group>

      {/* Submit button */}
      <Button variant="primary" type="submit" className="mt-3 btn-custom">
        Submit
      </Button>
    </Form>
  );
};

export default EventForm;

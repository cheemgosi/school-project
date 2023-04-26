import React, { useState, useCallback, useEffect } from "react";
import { Form, Button, Col, Row, Image, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";

const EventForm = ({ theme }) => {
  // State for form inputs
  const [eventName, setEventName] = useState("");
  const [artists, setArtists] = useState([]);
  const [artistsDescription, setArtistsDescription] = useState("");
  const [venueName, setVenueName] = useState("");
  const [address, setAddress] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [thumbnail, setThumbnail] = useState(null);
  const [eventDescription, setEventDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tickets, setTickets] = useState("");
  const [tags, setTags] = useState([]);
  const [contactInfo, setContactInfo] = useState("");
  const [croppedImage, setCroppedImage] = useState(null);
  const [imageRef, setImageRef] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (thumbnail) {
      setCroppedImage(null);
    }
  }, [thumbnail]);

  const handleCloseModal = () => setShowModal(false);

  const handleOpenModal = () => setShowModal(true);

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onImageLoaded = (image) => {
    setImageRef(image);
  };

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const generateCroppedImage = async () => {
    try {
      const croppedImageBlob = await getCroppedImg(
        URL.createObjectURL(thumbnail),
        croppedAreaPixels
      );
      setCroppedImage(croppedImageBlob);
      handleCloseModal();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const newTags = [];

    if (eventName) {
      newTags.push(eventName);
    }

    if (artists) {
      newTags.push(...artists);
    }

    if (venueName) {
      newTags.push(venueName);
    }

    setTags(newTags);
  }, [eventName, artists, venueName]);

  // Event handler for form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  // Create a FormData object to handle the file upload
  const imageToUpload = croppedImage || thumbnail; // Use croppedImage if available, otherwise use thumbnail
  formData.append("thumbnail", imageToUpload, "thumbnail.jpg");

  // Add other form data as JSON
  formData.append(
    "eventData",
    JSON.stringify({
      eventName,
      artists,
      artistsDescription,
      venueName,
      address,
      startTime,
      endTime,
      eventDescription,
      price,
      tickets,
      tags,
      contactInfo,
    })
  );

  try {
    const response = await fetch("http://localhost:8080/api/event", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to submit the form");
    }

    // Retrieve and parse the response plain text message
    const message = await response.text();

    // Log the message from backend
    console.log("Message from backend:", message);
    // console.log();
  } catch (err) {
    console.error("Error submitting the form:", err);
  }
};


  const handleArtistsChange = (e) => {
    setArtists(e.target.value.split(","));
  };

  return (
    <>
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

        {/* Artists */}
        <Form.Group controlId="artists">
          <Form.Label>Artists</Form.Label>
          <Form.Control
            type="text"
            value={artists.join(",")}
            onChange={handleArtistsChange}
            placeholder="Enter comma-separated artists"
            required
          />
          <div className="mt-2 d-flex flex-wrap">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="artist-item px-2 py-1 mx-1 my-1 rounded"
                style={{
                  backgroundColor: "lightgrey",
                  borderColor: "black",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              >
                {artist}
              </div>
            ))}
          </div>
        </Form.Group>

        {/* Artists description */}
        <Form.Group controlId="artistsDescription">
          <Form.Label>Artists Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={artistsDescription}
            onChange={(e) => setArtistsDescription(e.target.value)}
            required
          />
        </Form.Group>

        {/* Venue name */}
        <Form.Group controlId="venueName">
          <Form.Label>Venue Name</Form.Label>
          <Form.Control
            type="text"
            value={venueName}
            onChange={(e) => setVenueName(e.target.value)}
            required
          />
        </Form.Group>

        {/* Address */}
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>

        {/* Start time and end time */}
        <Form.Group as={Row}>
          <Col>
            <Form.Label>Start Time</Form.Label>
            <DatePicker
              selected={startTime}
              onChange={(date) => setStartTime(date)}
              showTimeSelect
              dateFormat="Pp"
              required
            />
          </Col>
          <Col>
            <Form.Label>End Time</Form.Label>
            <DatePicker
              selected={endTime}
              onChange={(date) => setEndTime(date)}
              showTimeSelect
              dateFormat="Pp"
              required
            />
          </Col>
        </Form.Group>

        {/* Thumbnail */}
        <Form.Group controlId="thumbnail">
          <Form.Label>Thumbnail</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => {
              setThumbnail(e.target.files[0]);
              handleOpenModal();
            }}
            required
          />
          <Image
            src={croppedImage ? URL.createObjectURL(croppedImage) : null}
            thumbnail
            className="mt-3"
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

        {/* Price */}
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            a
            required
          />
        </Form.Group>

        {/* Tickets */}
        <Form.Group controlId="tickets">
          <Form.Label>Tickets</Form.Label>
          <Form.Control
            type="text"
            value={tickets}
            onChange={(e) => setTickets(e.target.value)}
            required
          />
        </Form.Group>

        {/* Tags */}
        <Form.Group controlId="tags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            value={tags.join(",")}
            onChange={(e) => setTags(e.target.value.split(","))}
            placeholder="Enter comma-separated tags"
            required
          />
          <div className="mt-2 d-flex flex-wrap">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="tag-item px-2 py-1 mx-1 my-1 rounded"
                style={{
                  backgroundColor: "lightgrey",
                  borderColor: "black",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </Form.Group>

        {/* Contact info */}
        <Form.Group controlId="contactInfo">
          <Form.Label>Contact Info</Form.Label>
          <Form.Control
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </Form.Group>

        {/* Submit button */}
        <Button variant="primary" type="submit" className="mt-3 btn-custom">
          Submit
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Crop Thumbnail</Modal.Title>
        </Modal.Header>
        <Modal.Body className="cropper-size">
          <div>
            {thumbnail && (
              <>
                <Cropper
                  image={URL.createObjectURL(thumbnail)}
                  crop={crop}
                  zoom={zoom}
                  aspect={1 / 1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                  style={{ width: "800px !important", height: "auto" }}
                />

                <Button
                  className="mt-2"
                  variant="primary"
                  onClick={generateCroppedImage}
                  style={{ zIndex: 1000, position: "relative" }} // Add zIndex and position to make the button clickable
                >
                  Crop Image
                </Button>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EventForm;

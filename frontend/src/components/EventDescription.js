import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { Client } from "@googlemaps/google-maps-services-js";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const darkModeStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];

const EventDescription = ({ event, theme }) => {
  const {
    eventName,
    eventDescription,
    artistName,
    artistDescription,
    location,
  } = event;
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const client = new Client({});
      try {
        const response = await client.geocode({
          params: {
            address: location,
            key: "AIzaSyCCeEIdZaJOKoD3-Rm1SMYKJGaSbLR1D04",
          },
        });

        if (response.data.results && response.data.results.length > 0) {
          setCoordinates(response.data.results[0].geometry.location);
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, [location]);

  const isDarkTheme = theme === "dark-theme";

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h3>About the Event</h3>
          <p>{eventDescription}</p>
        </Col>
        <Col xs={12} md={6}>
          <h3>About the Artists</h3>
          <p>{artistDescription}</p>
        </Col>
      </Row>
      {coordinates && (
        <Row>
          <Col>
            <GoogleMap
              id="event-map"
              mapContainerStyle={mapContainerStyle}
              zoom={15}
              center={coordinates}
              options={{
                styles: isDarkTheme ? darkModeStyle : null,
              }}
            >
              <Marker
                position={coordinates}
                onClick={() => {
                  setSelectedPlace(coordinates);
                }}
              />
              {selectedPlace && (
                <InfoWindow
                  position={selectedPlace}
                  onCloseClick={() => {
                    setSelectedPlace(null);
                  }}
                >
                  <div>
                    <h4>{eventName}</h4>
                    <p>{artistName}</p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default EventDescription;

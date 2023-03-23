import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const SiteNavbar = () => {
  return (
    <Navbar expand="lg" className="mb-3">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100">
          <Nav.Item className="mr-auto">
            <Nav.Link>Add Event</Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-auto">
            <Nav.Link>Search for Events</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>City Filter</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SiteNavbar;
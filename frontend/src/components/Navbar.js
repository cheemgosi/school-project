import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

const SiteNavbar = ({ showEventForm, setShowEventForm, theme }) => {
  return (
    <Navbar expand="lg" className="mb-3">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100">
          <Nav.Item className="mr-auto">
            <Button
              variant="primary"
              onClick={() => setShowEventForm(!showEventForm)}
              className="btn-custom ms-3"
            >
              Add Event
            </Button>
          </Nav.Item>
          <Nav.Item className="mx-auto">
            <Form className={theme}>
              <FormControl
                type="text"
                placeholder="Search for events"
                className="mr-sm-2"
              />
              <Button variant="outline-secondary">Search</Button>
            </Form>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SiteNavbar;

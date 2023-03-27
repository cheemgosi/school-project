import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button, Modal } from "react-bootstrap";
import EventForm from "./EventForm";

const SiteNavbar = ({ theme }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(!showModal);

  return (
    <>
      <Navbar expand="lg" className="mb-3">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <Nav.Item className="mr-auto">
              <Button
                variant="primary"
                onClick={handleShowModal}
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

      <Modal show={showModal} onHide={handleShowModal} size="lg">
        <Modal.Header
          closeButton
          closeVariant={theme === "dark-theme" ? "white" : ""}
          className={
            theme === "dark-theme"
              ? "custom-modal-header-dark border-secondary"
              : "custom-modal-header-light"
          }
        >
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={
            theme === "dark-theme"
              ? "custom-modal-body-dark border-secondary"
              : "custom-modal-body-light"
          }
        >
          <EventForm />
        </Modal.Body>
        <Modal.Footer
          className={
            theme === "dark-theme"
              ? "custom-modal-footer-dark border-secondary"
              : "custom-modal-footer-light"
          }
        >
          <Button variant="secondary" onClick={handleShowModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleShowModal}>
            Save Event
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SiteNavbar;

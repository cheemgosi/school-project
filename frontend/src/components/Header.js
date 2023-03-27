import React, { useState } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Header({ toggleTheme, theme, loggedIn, toggleLoggedIn }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleClick = () => {
    navigate("/");
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleToggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleLogin = () => {
    toggleLoggedIn();
    setShowLoginModal(false);
  };

  const renderFavouritesModal = () => (
    <Modal
      show={showModal}
      onHide={handleToggleModal}
      className={
        theme === "dark-theme" ? "custom-modal-dark" : "custom-modal-light"
      }
    >
      <Modal.Header
        closeButton
        closeVariant={theme === "dark-theme" ? "white" : ""}
        className={
          theme === "dark-theme"
            ? "custom-modal-header-dark border-secondary"
            : "custom-modal-header-light"
        }
      >
        <Modal.Title>Favourites</Modal.Title>
      </Modal.Header>
      <Modal.Body
        className={
          theme === "dark-theme"
            ? "custom-modal-body-dark border-secondary"
            : "custom-modal-body-light"
        }
      >
        {/* Your favourites content will go here */}
      </Modal.Body>
      <Modal.Footer
        className={
          theme === "dark-theme"
            ? "custom-modal-footer-dark border-secondary"
            : "custom-modal-footer-light"
        }
      >
        <Button variant="secondary" onClick={handleToggleModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const renderLoginModal = () => (
    <Modal
      show={showLoginModal}
      onHide={handleToggleLoginModal}
      className={
        theme === "dark-theme" ? "custom-modal-dark" : "custom-modal-light"
      }
    >
      <Modal.Header
        closeButton
        closeVariant={theme === "dark-theme" ? "white" : ""}
        className={
          theme === "dark-theme"
            ? "custom-modal-header-dark border-secondary"
            : "custom-modal-header-light"
        }
      >
        <Modal.Title>Log in</Modal.Title>
      </Modal.Header>
      <Modal.Body
        className={
          theme === "dark-theme"
            ? "custom-modal-body-dark border-secondary"
            : "custom-modal-body-light"
        }
      >
        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer
        className={
          theme === "dark-theme"
            ? "custom-modal-footer-dark border-secondary"
            : "custom-modal-footer-light"
        }
      >
        <Button variant="secondary" onClick={handleToggleLoginModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          Log in
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      <Row className="align-items-center my-3">
        <Col xs={6} onClick={handleClick} className="clickable">
          <h1 className={theme}>Eitherwhere</h1>
        </Col>
        <Col xs={6} className="d-flex justify-content-end">
          <button className="btn btn-custom ml-2" onClick={toggleTheme}>
            <FontAwesomeIcon icon={theme === "light-theme" ? faMoon : faSun} />
          </button>
          {loggedIn && (
            <Button className="mx-2 btn-custom" onClick={handleToggleModal}>
              Favourites
            </Button>
          )}
          {loggedIn && (
            <Button className="btn-custom" onClick={toggleLoggedIn}>
              Log Off
            </Button>
          )}
          {!loggedIn && (
            <Button
              className="btn-custom mx-2"
              onClick={handleToggleLoginModal}
            >
              Log in
            </Button>
          )}
          {!loggedIn && (
            <Button className="btn-custom" onClick={toggleLoggedIn}>
              Register
            </Button>
          )}
        </Col>
      </Row>
      {renderFavouritesModal()}
      {renderLoginModal()}
    </>
  );
}

export default Header;

import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Header({ toggleTheme, theme }) {
  return (
    <Row className="align-items-center my-3">
      <Col xs={6}>
        <h1>Website Logo</h1>
      </Col>
      <Col xs={6} className="d-flex justify-content-end">
        <button className="btn btn-custom ml-2" onClick={toggleTheme}>
          <FontAwesomeIcon icon={theme === "light-theme" ? faMoon : faSun} />
        </button>
        <Button className="mx-2">Favourites</Button>
        <Button>Log Off</Button>
      </Col>
    </Row>
  );
}

export default Header;

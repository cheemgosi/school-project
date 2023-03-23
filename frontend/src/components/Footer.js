import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <Row className="my-3">
      <Col xs={12}>
        <Nav>
          <Nav.Item>
            <Nav.Link>Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Website Rules</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  );
};

export default Footer;
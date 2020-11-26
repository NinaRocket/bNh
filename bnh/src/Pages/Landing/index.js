import React from "react";
import "./landing.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GraphicForm from "../../Components/GraphicForm";

function Landing() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={10}>
            <h1>Welcome to Boats 'n Hoes</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <h3>Enter the values below</h3>
          </Col>
        </Row>
        <GraphicForm />
      </Container>
    </div>
  );
}

export default Landing;

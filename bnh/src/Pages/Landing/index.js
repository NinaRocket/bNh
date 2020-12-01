import React from "react";
import "./landing.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import GraphicForm from "../../Components/GraphicForm";
// import FontPicker from "font-picker-react";

function Landing() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Welcome to Boats</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={10}>
            <h3>Registration Numbers</h3>
            <h6>
              Create your registration number by entering the values below
            </h6>
            <br></br>
          </Col>
        </Row>
        <GraphicForm />
      </Container>
    </div>
  );
}

export default Landing;

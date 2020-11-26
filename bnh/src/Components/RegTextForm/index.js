import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class RegTextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { regText: "" };
  }

  handleChange = (event) => {
    this.setState({ regText: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={8}>
              <h3>{this.state.regText}</h3>
            </Col>
          </Row>
        </Container>

        <Form.Group
          className="regText"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label htmlFor="regText">Registration Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            value={this.state.regText}
            onChange={this.handleChange}
          />
        </Form.Group>
      </React.Fragment>
    );
  }
}
export default RegTextForm;

import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import ImageUpload from "../ImageUpload";
import RegTextForm from "../RegTextForm";

function GraphicForm() {
  return (
    <>
      <RegTextForm />

      <Form.Group className="color" controlId="exampleForm.ControlSelect1">
        <Form.Label>Font</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group
        className="background-color"
        controlId="exampleForm.ControlSelect1"
      >
        <Form.Label>Background Color</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className="color" controlId="exampleForm.ControlSelect1">
        <Form.Label>Color</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>

      <Form.Group
        className="outline-color"
        controlId="exampleForm.ControlSelect1"
      >
        <Form.Label>Outline Shadow</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>

      <ImageUpload />
    </>
  );
}
export default GraphicForm;

import React, { useState, useEffect } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import ImageUpload from "../ImageUpload";
import Select from "react-select";
import colors from "../../data/colors.json";
import FontPicker from "../../Components/FontPicker";

function GraphicForm() {
  const [regText, setRegText] = useState();
  const [regTextColor, setRegTextColor] = useState();
  const [bgColor, setBgColor] = useState();
  const [labelColor, setLabelColor] = useState();
  const [labelBgColor, setLabelBgColor] = useState();

  const handleChange = (event) => {
    setRegText(event.target.value);
  };

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "white",
      backgroundColor: state.data.color,
      fontSize: state.selectProps.myFontSize,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
      fontSize: state.selectProps.myFontSize,
    }),
  };

  const changeColor = (e) => {
    console.log(`On change working and is grabbing: ${e.color}`);
    setLabelColor(e.label);
    //setColor(colors);
    setRegTextColor(e.color);
  };

  const changeBackground = (e) => {
    setLabelBgColor(e.label);
    console.log(e.label);
    setBgColor(e.color);
  };

  return (
    <>
      <React.Fragment>
        <Container>
          <div
            className="apply-font boatText"
            style={{ color: regTextColor, backgroundColor: bgColor }}
          >
            {regText}
          </div>

          <br></br>
        </Container>

        <Form.Group
          className="regText"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Registration Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            value={regText}
            onChange={handleChange}
            placeholder="NR 1234 NJ"
          />
        </Form.Group>
      </React.Fragment>

      <Container className="inputContainer">
        <Form.Label>Choose Font</Form.Label>
        <FontPicker />
        <br></br>

        <Form.Label>Color</Form.Label>
        <Select
          className="colorPick"
          myFontSize="20px"
          //value={regTextColor}
          styles={styles}
          options={colors}
          value={colors.filter(function (color) {
            return color.value === labelColor;
          })}
          onChange={changeColor}
        />
        <br></br>
        {/* <Form.Group
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
        </Form.Group> */}
        <Form.Label>Background Color</Form.Label>
        <Select
          className="bgColorPick"
          myFontSize="20px"
          //value={label}
          //label={label}
          styles={styles}
          options={colors}
          value={colors.filter(function (color) {
            return color.value === labelBgColor;
          })}
          onChange={changeBackground}
        />

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
      </Container>
      <ImageUpload />
    </>
  );
}
export default GraphicForm;

{
  /* <Form.Group className="color" controlId="exampleForm.ControlSelect1">
        <Form.Label>Font</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group> */
}

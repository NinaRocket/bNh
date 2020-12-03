import React, { useState } from "react";
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
  //const [strokeColor, setStrokeColor] = useState();
  const [addStrokeClass, setAddStrokeClass] = useState(false);
  const [removeStrokeClass, setRemoveStrokeClass] = useState();

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
    setRegTextColor(e.color);
  };

  const changeBackground = (e) => {
    setLabelBgColor(e.label);
    console.log(e.label);
    setBgColor(e.color);
  };

  const toggleStrokeToText = (e) => {
    setAddStrokeClass(!addStrokeClass);
    console.log("add it");
  };

  return (
    <>
      <React.Fragment>
        <Container>
          <div
            className={`apply-font boatText ${
              addStrokeClass ? "addStroke" : null
            }`}
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
            placeholder="NR 1234 NO"
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

        <Form.Label>Background Color</Form.Label>
        <Select
          className="bgColorPick"
          myFontSize="20px"
          styles={styles}
          options={colors}
          value={colors.filter(function (color) {
            return color.value === labelBgColor;
          })}
          onChange={changeBackground}
        />
        <br></br>
        <Form.Group
          className="outline-color"
          controlId="exampleForm.ControlSelect1"
        >
          <Form.Label>Outline</Form.Label>
          <Form.Control as="select" onChange={toggleStrokeToText}>
            <option></option>
            <option value={addStrokeClass}>yes daddy</option>
            <option value={null}>no mama</option>
          </Form.Control>
        </Form.Group>
      </Container>
      <ImageUpload />
    </>
  );
}
export default GraphicForm;

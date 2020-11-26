import React, { useState } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function RegTextForm(props) {
  //   constructor(props) {
  //     super(props);
  //     this.state = { regText: "" };
  //   }
  const [regText, setRegText] = useState("");

  const handleChange = (event) => {
    setRegText(event.target.value);
  };

  return (
    <React.Fragment>
      <Container>
        <div className="boat-text">{regText}</div>

        <br></br>
      </Container>

      <Form.Group className="regText" controlId="exampleForm.ControlTextarea1">
        <Form.Label htmlFor="regText">Registration Text</Form.Label>
        <Form.Control
          as="textarea"
          rows={1}
          value={regText}
          onChange={handleChange}
          placeholder="NR 1234 NJ"
        />
      </Form.Group>
    </React.Fragment>
  );
}

export default RegTextForm;

// class RegTextForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { regText: "" };
//   }

//   handleChange = (event) => {
//     this.setState({ regText: event.target.value });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <Container>
//           <div className="boat-text">{this.state.regText}</div>

//           <br></br>
//         </Container>

//         <Form.Group
//           className="regText"
//           controlId="exampleForm.ControlTextarea1"
//         >
//           <Form.Label htmlFor="regText">Registration Text</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={1}
//             value={this.state.regText}
//             onChange={this.handleChange}
//           />
//         </Form.Group>
//       </React.Fragment>
//     );
//   }
// }
// export default RegTextForm;

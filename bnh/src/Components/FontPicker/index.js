import React, { Component } from "react";
import "./style.css";
import FontPicker from "font-picker-react";

export default class FontPickers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFontFamily: "Open Sans",
    };
  }

  render() {
    return (
      <div>
        <FontPicker
          apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
          activeFontFamily={this.state.activeFontFamily}
          onChange={(nextFont) =>
            this.setState({
              activeFontFamily: nextFont.family,
            })
          }
        />
        {/* <p className="apply-font">The font will be applied to this text.</p> */}
      </div>
    );
  }
}

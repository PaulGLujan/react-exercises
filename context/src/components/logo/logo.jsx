import React from "react";
import "./logo.css";
import { ThemeContext } from "../../context/theme-context";

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.hanldeClick = this.hanldeClick.bind(this);
  }

  hanldeClick() {
    if (this?.context?.toggleColor) {
      this.context.toggleColor();
    }
  }

  render() {
    const { logoBackground } = this.props;

    return (
      <div
        className="logo-box"
        onClick={this.hanldeClick}
        style={{ backgroundColor: logoBackground || this.context.color }}
      >
        <span className="logo-letter">Y</span>
      </div>
    );
  }
}

Logo.contextType = ThemeContext;

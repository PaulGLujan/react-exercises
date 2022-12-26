import React from "react";
import Logo from "../logo";
import "./header.css";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        {this.props.caption}
        <nav>
          <Logo logoBackground={this.props.logoBackground} />
        </nav>
      </header>
    );
  }
}

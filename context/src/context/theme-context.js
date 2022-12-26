import React from 'react';

export const ThemeContext = React.createContext();

export default class ThemeProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'blue'
    };
    this.toggleColor = this.toggleColor.bind(this);
  }

  toggleColor() {
    if (this.state.color === 'blue') {
      this.setState({ ...this.state, color: 'purple' });
    } else {
      this.setState({ ...this.state, color: 'blue' });
    }
  }

  render() {
    const { color } = this.state;
    return (
      <ThemeContext.Provider value={{ color, toggleColor: this.toggleColor }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
};
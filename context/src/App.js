import React, { createContext } from 'react';
import Header from './components/header';
import ThemeProvider from './context/theme-context';

export default class App extends React.Component {


  render() {
    return (
      <div>
        <h1>Simple Classical Context Example</h1>
        <p>The upper example has "red" passed down as a prop. The bottom example is using purple from the provider.</p>
        <Header caption='Header with Prop' logoBackground='red' />
        <ThemeProvider>
          <Header caption='Header with Context. Click to toggle.' />
        </ThemeProvider>
      </div>
    )
  }
};
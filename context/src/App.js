import React from 'react';
import Header from './components/header';
import ThemeProvider from './context/theme-context';
import CounterProvider from './context/counter-context';
import ClockBody from './components/ClockBody';
import ClockButton from './components/ClockButton/ClockButton';
import './App.css'

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

        <h1>Functional Component Example</h1>
        <CounterProvider>
          <div className='counter-cont'>
            <ClockBody />
            <ClockButton />
          </div>
        </CounterProvider>
      </div>
    )
  }
};
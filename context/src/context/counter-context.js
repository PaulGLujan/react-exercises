import React, { createContext } from 'react';
import { useState } from 'react';

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(5);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <CounterContext.Provider value={{ count, incrementCounter }}>
      {children}
    </CounterContext.Provider>
  )
};

export default CounterProvider;
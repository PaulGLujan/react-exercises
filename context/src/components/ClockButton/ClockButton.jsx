import React, { useContext } from "react";
import { CounterContext } from "../../context/counter-context";
import "./ClockButton.css";

const ClockButton = () => {
  const { incrementCounter } = useContext(CounterContext);

  return (
    <button className="clock-button" onClick={incrementCounter}>
      Add
    </button>
  );
};

export default ClockButton;

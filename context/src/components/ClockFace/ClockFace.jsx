import React, { useContext } from "react";
import { CounterContext } from "../../context/counter-context";

const ClockFace = () => {
  const { count } = useContext(CounterContext);
  return (
    <div className="clock-face">
      <span>{count}</span>
    </div>
  );
};

export default ClockFace;

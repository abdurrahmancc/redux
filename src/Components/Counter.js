import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../services/actions/counterAction";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count);

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  return (
    <div>
      <h2>counter {count}</h2>
      <button onClick={handleIncrement}>increase</button>
      <button onClick={handleDecrement}>decrease</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Counter;

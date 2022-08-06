import React from "react";
import { useSelector } from "react-redux";
import store from "../../app/store";
import { useDispatch } from "react-redux";
import { decrement, increaseByAmount, increment, reset } from "./counterSlice";

const CounterViews = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>counter {count}</h2>
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(increaseByAmount(5))}>increase5</button>
    </div>
  );
};

export default CounterViews;

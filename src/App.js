import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counter";
function App() {
  const counter = useSelector((state) => {
    return (state.counter.counter);
  });

  const dispatcher = useDispatch();

  const handleIncrement = () => {
    dispatcher(increment());
  };

  return (
    <div className="App">
      <h1>counter: {counter}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={() => dispatcher(decrement(10))}>-</button>
    </div>
  );
}

export default App;

import React, { useReducer } from "react";
import { State } from "./types";
import { reducer } from "./utils";

const initialState: State = {
  count: 0,
};

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
    </div>
  );
};

export default Counter;

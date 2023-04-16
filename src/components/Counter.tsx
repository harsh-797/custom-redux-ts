import React from "react";

import { useSelector } from "../redux/custom-redux";
import { Context, StateType } from "../redux/Provider";

export default function Counter() {
  const counter = useSelector((a: StateType) => a.counter);
  const store = React.useContext(Context);
  return (
    <div>
      <button
        onClick={() => {
          store?.dispatch({ type: "counter/increment" });
          // else
          //   store.dispatch({ type: "counter/decrement" })
        }}>
        Counter: {counter}
      </button>
    </div>
  );
}

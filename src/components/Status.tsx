import React from "react";

import { useSelector } from "../redux/custom-redux";
import { Context, StateType } from "../redux/Provider";

export default function Status() {
  const status = useSelector((a: StateType) => a.status);
  const store = React.useContext(Context);
  return (
    <div>
      <button
        onClick={() => {
          if (status === "pending")
            store?.dispatch({ type: "status/resolved" });
          else store?.dispatch({ type: "status/pending" });
        }}>
        Status: {status}
      </button>
    </div>
  );
}

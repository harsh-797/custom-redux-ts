import React from "react";

import { useSelector } from "../redux/custom-redux";
import { Context, StateType } from "../redux/Provider";

export default function Theme() {
  const theme = useSelector((a: StateType) => a.theme);
  const store = React.useContext(Context);
  return (
    <div>
      <button
        onClick={() => {
          if (theme === "light") store?.dispatch({ type: "theme/dark" });
          else store?.dispatch({ type: "theme/light" });
        }}>
        Theme: {theme}
      </button>
    </div>
  );
}

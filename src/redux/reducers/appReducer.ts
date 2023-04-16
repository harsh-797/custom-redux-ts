import { themeReducer } from "./themeReducer";
import { counterReducer } from "./counterReducers";
import { statusReducer } from "./statusReducer";

import { StateType } from "../Provider";

export function appReducer(state: StateType, action: { type: string }) {
  return {
    theme: themeReducer(state.theme, action),
    status: statusReducer(state.status, action),
    counter: counterReducer(state.counter, action),
  };
}

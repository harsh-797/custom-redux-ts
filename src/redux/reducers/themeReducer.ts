const initialState: "light" | "dark" = "light";

function themeReducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    case "theme/light":
      return "light";
    case "theme/dark":
      return "dark";
    default:
      return state;
  }
}

export { initialState, themeReducer };

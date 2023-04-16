const initialState: number = 0;

function counterReducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    case "counter/increment":
      return state + 1;
    case "counter/decrement":
      return state - 1;
    default:
      return state;
  }
}

export { initialState, counterReducer };

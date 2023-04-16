const initialState: "pending" | "resolved" | "rejected" = "pending";

function statusReducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    case "status/pending":
      return "pending";
    case "status/resolved":
      return "resolved";
    default:
      return state;
  }
}

export { initialState, statusReducer };

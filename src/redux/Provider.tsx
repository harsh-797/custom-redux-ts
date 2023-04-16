import React from "react";

import { appReducer } from "./reducers/appReducer";

export type StateType = {
  counter: number;
  status: "pending" | "resolved" | "rejected";
  theme: "light" | "dark";
};

export type ContextType = null | {
  dispatch: React.Dispatch<{
    type: string;
  }>;
  subscribe: (func: () => void) => () => void;
  getState: () => StateType;
};

export const Context = React.createContext<ContextType>(null);

const initialState: StateType = {
  counter: 0,
  status: "pending",
  theme: "dark",
};

export default function Provider({ children }: { children: React.ReactNode }) {
  const [store, dispatch] = React.useReducer(appReducer, initialState);

  const subscriberRef = React.useRef<Array<() => void>>([]);
  const storeRef = React.useRef<StateType>(store);
  storeRef.current = store;

  React.useLayoutEffect(() => {
    subscriberRef.current.forEach((f) => f());
  }, [store]);

  const value: ContextType = React.useMemo(
    () => ({
      dispatch,
      subscribe: (func) => {
        subscriberRef.current.push(func);
        return () => {
          subscriberRef.current.filter((e) => e !== func);
        };
      },
      getState: () => storeRef.current,
    }),
    []
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

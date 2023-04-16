import React from "react";

import { Context, StateType } from "./Provider";


export function useSelector(selector: (arg: StateType) => StateType[keyof StateType]) {
  const [, forceRerender] = React.useReducer((s) => s + 1, 0);

  const store = React.useContext(Context);

  const selectorRef = React.useRef(selector);
  selectorRef.current = selector;
  const selectedStateRef = React.useRef(selector(store?.getState()!));
  selectedStateRef.current = selector(store?.getState()!);

  const rerender = React.useCallback(() => {
    const newState = selectorRef.current(store?.getState()!);
    if (newState === selectedStateRef.current) return;
    forceRerender();
  }, [store]);

  React.useEffect(() => {
    const unSubscribe = store?.subscribe(rerender);
    return () => unSubscribe && unSubscribe();
  }, [rerender, store, store?.subscribe]);

  return selectedStateRef.current;
}

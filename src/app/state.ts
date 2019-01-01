import { exhaustiveCheck } from "ts-exhaustive-check";
import { Action } from "./actions";

export interface State {}

export const initialState: State = {};
export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "Dummy1":
    case "Dummy2": {
      return state;
    }
    default: {
      exhaustiveCheck(action);
      return state;
    }
  }
}

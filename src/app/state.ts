import { exhaustiveCheck } from "ts-exhaustive-check";
import { Action } from "./actions";

export interface State {
  readonly pantbrev: number;
  readonly price: number;
  readonly interest: number;
  readonly operatingCost: number;
}

export const initialState: State = {
  pantbrev: 0,
  price: 0,
  interest: 2.25,
  operatingCost: 5000
};
export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SetPantBrev": {
      return {
        ...state,
        pantbrev: action.payload
      };
    }
    case "SetPrice": {
      return {
        ...state,
        price: action.payload
      };
    }
    case "SetInterest": {
      return {
        ...state,
        interest: action.payload
      };
    }
    case "SetOperatingCost": {
      return {
        ...state,
        operatingCost: action.payload
      };
    }
    default: {
      exhaustiveCheck(action);
      return state;
    }
  }
}

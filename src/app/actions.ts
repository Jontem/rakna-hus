export type Action = SetPantBrev | SetPrice | SetInterest;
export interface SetPantBrev {
  readonly type: "SetPantBrev";
  readonly payload: number;
}

export function setPantBrev(pantBrev: number): SetPantBrev {
  return {
    type: "SetPantBrev",
    payload: pantBrev
  };
}

export interface SetPrice {
  readonly type: "SetPrice";
  readonly payload: number;
}

export function setPrice(price: number): SetPrice {
  return {
    type: "SetPrice",
    payload: price
  };
}

export interface SetInterest {
  readonly type: "SetInterest";
  readonly payload: number;
}

export function setInterest(interest: number): SetInterest {
  return {
    type: "SetInterest",
    payload: interest
  };
}

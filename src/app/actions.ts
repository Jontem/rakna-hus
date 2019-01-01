export type Action = SetPantBrev | SetPrice;

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

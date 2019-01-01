import * as React from "react";
import * as Components from "../components";
import * as State from "./state";
import * as Actions from "./actions";

interface Props {
  readonly dispatch: (action: Actions.Action) => void;
  readonly state: State.State;
}
export function View({ state, dispatch }: Props): JSX.Element {
  return (
    <div className="container">
      <h1>app</h1>
      <form>
        <div className="form-group">
          <label>Price</label>
          <Components.NumberInput
            className="form-control"
            value={state.price}
            onChange={value => {
              dispatch(Actions.setPrice(value));
            }}
          />
        </div>
      </form>
    </div>
  );
}

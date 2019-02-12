import * as React from "react";
import * as Components from "../components";
import * as State from "./state";
import * as Actions from "./actions";
import { getNumber } from "../lib/get-number";

interface Props {
  readonly dispatch: (action: Actions.Action) => void;
  readonly state: State.State;
}
export function View({ state, dispatch }: Props): JSX.Element {
  const kontantinsats15 = state.price && state.price * 0.15;
  const kontantinsats25 = state.price && state.price * 0.25;
  const lagfart = state.price && state.price * 0.015 + 825;
  const pantbrev =
    (state.pantbrev &&
      state.price &&
      (state.price * 0.85 - state.pantbrev) * 0.02) ||
    0;
  return (
    <div className="container">
      <h1>Räkna hus</h1>
      <h2>Inmatning</h2>
      <form>
        <div className="form-group">
          <label>Pris</label>
          <Components.NumberInput
            className="form-control"
            value={state.price}
            onChange={value => {
              dispatch(Actions.setPrice(value));
            }}
          />
        </div>
        <div className="form-group">
          <label>Existerande pantbrev</label>
          <Components.NumberInput
            className="form-control"
            value={state.pantbrev}
            onChange={value => {
              dispatch(Actions.setPantBrev(value));
            }}
          />
        </div>
      </form>
      <h2>Resultat</h2>
      <form>
        <div className="form-group">
          <label>Kontantinsats</label>
          <input
            type="text"
            readOnly={true}
            className="form-control"
            value={`${kontantinsats15.toLocaleString()}(15%), ${kontantinsats25.toLocaleString()}(25%)`}
          />
        </div>
        <div className="form-group">
          <label>Lagfart (1,5 % + 825kr fast avgift)</label>
          <Components.NumberInput
            readOnly={true}
            className="form-control"
            value={lagfart}
            onChange={value => {}}
          />
        </div>
        <div className="form-group">
          <label>Kostnader pantbrev (2 %)</label>
          <Components.NumberInput
            readOnly={true}
            className="form-control"
            value={pantbrev}
            onChange={value => {}}
          />
        </div>
        {
          <div className="form-group">
            <label>Totalt kontanter</label>
            <input
              type="text"
              readOnly={true}
              className="form-control"
              value={`${(
                kontantinsats15 +
                lagfart +
                pantbrev
              ).toLocaleString()}(15%), ${(
                kontantinsats25 +
                lagfart +
                pantbrev
              ).toLocaleString()}(25%)`}
              onChange={value => {}}
            />
          </div>
        }
      </form>
    </div>
  );
}

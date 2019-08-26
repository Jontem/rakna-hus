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
  const kontantinsats30 = state.price && state.price * 0.3;
  const lagfart = state.price && state.price * 0.015 + 825;
  const pantbrev =
    (state.pantbrev &&
      state.price &&
      (state.price * 0.85 - state.pantbrev) * 0.02) ||
    0;

  const interest15 =
    ((state.price - kontantinsats15) * state.interest) / 100 / 12;
  const intstallments15 = ((state.price - kontantinsats15) * 0.02) / 12;
  const interest30 =
    ((state.price - kontantinsats30) * state.interest) / 100 / 12;
  const installments30 = ((state.price - kontantinsats30) * 0.01) / 12;
  return (
    <div className="container">
      <h1>Räkna hus</h1>
      <h2>Bostad</h2>
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
            value={`${kontantinsats15.toLocaleString()}(15%), ${kontantinsats30.toLocaleString()}(30%)`}
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
              kontantinsats30 +
              lagfart +
              pantbrev
            ).toLocaleString()}(30%)`}
            onChange={value => {}}
          />
        </div>
      </form>
      <h2>Månadskostnad</h2>
      <form>
        <div className="form-group">
          <label>Ränta</label>
          <input
            type="number"
            className="form-control"
            value={state.interest}
            onChange={e => {
              dispatch(Actions.setInterest(parseFloat(e.target.value)));
            }}
          />
        </div>
        <div className="form-group">
          <label>Driftskostnad</label>
          <Components.NumberInput
            className="form-control"
            value={state.operatingCost}
            onChange={value => {
              dispatch(Actions.setOperatingCost(value));
            }}
          />
        </div>
        <div className="form-group">
          <label>Totalt 15% kontantinsats</label>
          <input
            type="text"
            readOnly={true}
            className="form-control"
            value={`Ränta: ${interest15.toLocaleString()}, Amortering: ${intstallments15.toLocaleString()}, Totalt: ${(
              interest15 +
              intstallments15 +
              state.operatingCost
            ).toLocaleString()}`}
            onChange={value => {}}
          />
        </div>
        <div className="form-group">
          <label>Totalt 30% kontantinsats</label>
          <input
            type="text"
            readOnly={true}
            className="form-control"
            value={`Ränta: ${interest30.toLocaleString()}, Amortering: ${installments30.toLocaleString()}, Totalt: ${(
              interest30 +
              installments30 +
              state.operatingCost
            ).toLocaleString()}`}
            onChange={value => {}}
          />
        </div>
      </form>
    </div>
  );
}

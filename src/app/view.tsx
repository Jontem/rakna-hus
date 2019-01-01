import * as React from "react";
import * as State from "./state";
import * as Actions from "./actions";

interface Props {
  readonly dispatch: (action: Actions.Action) => void;
  readonly state: State.State;
}
export function View({  }: Props): JSX.Element {
  return <div>app</div>;
}

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Store from "./store";
import * as App from "./app";

ReactDOM.render(
  <Store.Store<App.State>>
    {(state, setState) => (
      <App.View
        dispatch={action => {
          const prevState = state || App.initialState;
          const nextState = App.reducer(prevState, action);
          setState(nextState, () => {
            console.log("Action: ", { prevState, action, nextState });
          });
        }}
        state={state || App.initialState}
      />
    )}
  </Store.Store>,
  document.getElementById("root")
);

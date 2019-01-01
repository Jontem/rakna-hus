import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Store from "./store";
import * as App from "./app";

ReactDOM.render(
  <Store.Store<App.State>>
    {(state, setState) => (
      <App.View
        dispatch={action => {
          setState(App.reducer(state || App.initialState, action));
        }}
        state={state || App.initialState}
      />
    )}
  </Store.Store>,
  document.getElementById("root")
);

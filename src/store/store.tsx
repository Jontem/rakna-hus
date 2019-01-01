import * as React from "react";

interface Props<TState> {
  readonly children: (
    state: TState | undefined,
    setState: (state: TState, callback: () => void) => void
  ) => JSX.Element;
}
export class Store<TState extends {}> extends React.Component<
  Props<TState>,
  TState
> {
  constructor(props: Props<TState>) {
    super(props);
    this.state = undefined as any;
  }
  render(): JSX.Element {
    return this.props.children(
      this.state,
      (state: TState, callback: () => void) => {
        this.setState(() => state, callback);
      }
    );
  }
}

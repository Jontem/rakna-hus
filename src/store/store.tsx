import * as React from "react";

interface Props<TState> {
  readonly children: (
    state: TState | undefined,
    setState: (state: TState) => void
  ) => JSX.Element;
}
export class Store<TState extends {}> extends React.Component<
  Props<TState>,
  TState
> {
  constructor(props: Props<TState>) {
    super(props);
    this.state = {} as any;
  }
  render(): JSX.Element {
    return this.props.children(this.state, (state: TState) => {
      this.setState(() => state);
    });
  }
}

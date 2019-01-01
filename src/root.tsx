import * as React from "react";
import styled from "styled-components";

const RootContainer = styled.div`
  background: red;
`;

export class Root extends React.Component<{}, {}> {
  render(): JSX.Element {
    return <RootContainer>Hello world3</RootContainer>;
  }
}

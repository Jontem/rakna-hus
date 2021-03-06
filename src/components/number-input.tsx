import * as React from "react";
import { getNumber } from "../lib/get-number";

// Pick<XYZ, Exclude<keyof XYZ, "z">>
type Input = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = Pick<Input, Exclude<keyof Input, "onChange">> & {
  readonly value: number;
  onChange: (value: number) => void;
};

export function NumberInput(props: Props): JSX.Element {
  return (
    <input
      {...props}
      type="text"
      value={props.value.toLocaleString()}
      onChange={e => {
        const value = e.target.value;
        const parsed = getNumber(value);
        console.log(parsed);
        props.onChange(parsed);
      }}
    />
  );
}

import React, { ChangeEvent } from "react";

type InputProps = {
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function SimulationInput({ value, onChange }: InputProps) {
  return (
    <input
      type="number"
      value={value}
      placeholder="Enter simulation number"
      onChange={onChange}
      className="input-style"
      min={1}
      required
      max={1000}
    />
  );
}

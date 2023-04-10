import React, { ChangeEvent } from "react";

const selectOptions = [
  {
    value: "KEEP",
    label: "Keep selected door",
  },
  {
    value: "CHANGE",
    label: "Change door",
  },
];

export function ChangeSelect({
  onChange,
  defaultValue,
}: {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: string;
}) {
  return (
    <select
      className="select-style"
      onChange={onChange}
      defaultValue={defaultValue}
    >
      {selectOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

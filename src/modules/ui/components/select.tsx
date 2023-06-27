import React from "react";

import classNames from "classnames";

export default function Select({
  placeholder = "Select an option",
  options,
  ...rest
}: {
  placeholder?: string;
  options: string[];
} & React.HTMLProps<HTMLSelectElement>) {
  return (
    <select
      {...rest}
      className={classNames(
        "select select-primary w-full max-w-xs",
        rest.className
      )}
    >
      <option disabled value="">
        {placeholder}
      </option>
      {options.map((option, i) => (
        <option key={`option-${i}-${option}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

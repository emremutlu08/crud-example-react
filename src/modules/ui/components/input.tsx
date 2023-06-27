import { InputHTMLAttributes } from "react";

import classNames from "classnames";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type="text"
      className={classNames(
        "input input-bordered input-primary w-full max-w-xs",
        props.className
      )}
    />
  );
}

import { ButtonHTMLAttributes } from "react";

import classNames from "classnames";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={classNames("btn btn-primary", props.className)}
    />
  );
}

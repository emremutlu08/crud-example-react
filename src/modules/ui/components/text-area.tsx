import { TextareaHTMLAttributes } from "react";

import classNames from "classnames";

export default function TextArea(
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={classNames("textarea textarea-primary", props.className)}
    ></textarea>
  );
}

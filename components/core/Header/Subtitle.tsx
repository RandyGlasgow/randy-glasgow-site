import { FC, HTMLAttributes } from "react";

export const Subtitle: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <span
      role="note"
      className={`font-light text-sm ${className}`}
      {...props}
    >
      {props.children}
    </span>
  );
};

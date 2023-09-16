import { HTMLAttributes } from "react";

export const CardRoot = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`shadow-lg min-h-2 border border-white rounded overflow-hidden ${className}`}
      {...props}
    >
      {props.children}
    </div>
  );
};

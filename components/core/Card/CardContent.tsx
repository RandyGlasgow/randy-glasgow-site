import { HTMLAttributes } from "react";

export const CardContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`p-2 ${className}`} {...props}>
      {props.children}
    </div>
  );
};

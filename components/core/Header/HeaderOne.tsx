import { FC, HTMLAttributes } from "react";

export const HeaderOne: FC<HTMLAttributes<HTMLHeadElement>> = ({
  className,
  ...props
}) => {
  return (
    <h1 className={`text-4xl font-bold ${className}`} {...props}>
      {props.children}
    </h1>
  );
};

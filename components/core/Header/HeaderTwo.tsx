import { FC, HTMLAttributes } from "react";

export const HeaderTwo: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h2
      className={`text-3xl font-bold text-white ${className}`}
      {...props}
    >
      {props.children}
    </h2>
  );
};

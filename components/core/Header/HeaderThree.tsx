import { FC, HTMLAttributes } from "react";

export const HeaderThree: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h3
      className={`text-2xl font-bold text-white ${className}`}
      {...props}
    >
      {props.children}
    </h3>
  );
};

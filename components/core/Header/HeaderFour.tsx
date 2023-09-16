import { FC, HtmlHTMLAttributes } from "react";

export const HeaderFour: FC<HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h4
      className={`text-md font-semibold text-center ${className}`}
      {...props}
    >
      {props.children}
    </h4>
  );
};

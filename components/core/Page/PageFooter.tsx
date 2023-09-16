import { FC, HTMLAttributes } from "react";

export const PageFooter: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <footer
      className={`p-2 items-center justify-center ${className}`}
      {...props}
    >
      {props.children}
    </footer>
  );
};

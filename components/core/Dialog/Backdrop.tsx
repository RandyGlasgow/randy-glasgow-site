import { FC, HTMLAttributes } from "react";

export const Backdrop: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  return (
    <span
      className={`absolute top-0 left-0 w-screen h-screen  backdrop-blur-md bg-black/20 z-50 ${className}`}
      {...rest}
    />
  );
};

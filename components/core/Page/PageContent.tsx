import { FC, HTMLAttributes } from "react";

export const PageContent: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={`p-2 ${className}`} {...props}>
      {props.children}
    </div>
  );
};

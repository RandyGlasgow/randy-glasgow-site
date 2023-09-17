import { FC, HTMLAttributes } from "react";

export const PageContent: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={`p-2 max-w-5xl mx-auto ${className}`} {...props}>
      {props.children}
    </div>
  );
};

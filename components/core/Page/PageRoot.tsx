import { FC, HTMLAttributes } from "react";

export const PageRoot: FC<HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  return (
    <main
      className={`min-h-screen bg-gradient-to-br from-fuchsia-950 to-slate-900 ${className}`}
      {...props}
    >
      {props.children}
    </main>
  );
};

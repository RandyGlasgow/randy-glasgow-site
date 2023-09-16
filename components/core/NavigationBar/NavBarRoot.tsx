import { FC, PropsWithChildren } from "react";

export const NavBarRoot: FC<PropsWithChildren> = ({ children }) => {
  return <nav className="p-4">{children}</nav>;
};

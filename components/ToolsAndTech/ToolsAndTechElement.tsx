import { FC, ReactNode } from "react";
import { IconType } from "react-icons/lib";

export const ToolAndTechElement: FC<{
  Icon: IconType;
  title: string;
}> = ({ Icon, title }) => {
  return (
    <span className="flex items-center justify-center gap-2 font-semibold">
      <Icon className="text-2xl" /> {title}
    </span>
  );
};

import { FC } from "react";
import { IconType } from "react-icons/lib";

export const ToolAndTechElement: FC<{
  Icon: IconType;
  title: string;
}> = ({ Icon, title }) => {
  return (
    <span
      className="flex items-center justify-center gap-2 font-semibold cursor-default"
      title={title}
    >
      <Icon className="text-2xl" /> {title}
    </span>
  );
};

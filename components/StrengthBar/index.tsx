import { FC } from "react";

interface StrengthBarProps {
  label: string;
  strength: number;
}

export const StrengthBar: FC<StrengthBarProps> = ({ strength, label }) => {
  return (
    <span
      className="flex w-full text-left items-center"
      title={`${label} ${strength}%`}
    >
      <div className="w-full h-6 bg-stone-50/25 border-spacing-1 border border-stone-500 rounded-full overflow-hidden flex relative">
        <span
          className="absolute flex w-full items-center justify-center text-xs pt-0.5 font-bold tracking[2px]"
          style={{
            filter: "invert(8)",
            clipPath: "inset(0 0 0 0)",
          }}
        >
          {label}
        </span>
        <div
          className={`h-full bg-gradient-to-r from-fuchsia-200 to-fuchsia-500 transition-all duration-150 ease-in-out rounded-r-full`}
          style={{ width: `${strength}%` }}
        ></div>
      </div>
    </span>
  );
};

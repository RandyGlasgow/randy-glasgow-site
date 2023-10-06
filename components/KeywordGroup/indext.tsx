import { FC } from "react";

export const KeywordGroup: FC<{
  className?: string;
  keywords: string[];
}> = ({ keywords, className }) => {
  return keywords.map((elm) => (
    <span key={elm} className={`${className}`}>
      {elm}
    </span>
  ));
};

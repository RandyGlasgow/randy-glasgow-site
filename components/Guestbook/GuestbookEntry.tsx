import { addEntry } from "@/convex/guestbook";
import { FC } from "react";
import dayjs from "dayjs";

export const GuestbookEntry: FC<typeof addEntry> = ({
  company,
  date,
  entryId,
  message,
  name,
  ...rest
}) => {
  console.log(rest);
  return (
    <div className="p-2 rounded-sm" key={String(entryId)}>
      <div className="flex justify-between">
        <span className="flex justify-start items-center gap-2 text-left text-lg text-white font-bold">
          {String(name)}
          <span className="text-lg text-gray-500">@{String(company)}</span>
        </span>
        <span>
          {/* {dayjs(String(rest._creationTime)).format("MMM DD, YYYY")} */}
        </span>
      </div>
      <p className="text-left text-white">{String(message)}</p>
    </div>
  );
};

import { api } from "@/convex/_generated/api";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useQuery } from "convex/react";
import { useEffect, useRef } from "react";
import { GuestbookEntry } from "./GuestbookEntry";

export const GuestbookLog = () => {
  useScrollLock(true);
  const guests = useQuery(api.guestbook.get);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lastChild = ref.current?.lastChild as HTMLDivElement;
    lastChild?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [guests]);

  return (
    <div
      ref={ref}
      className="guestbook-log overflow-y-auto h-96 p-2 pb-4 backdrop-blur-sm bg-black/80 gap-4 scroll-m-36"
    >
      {guests?.map((guest) => (
        <GuestbookEntry {...guest} key={guest.entryId} />
      ))}
      <div className="h-6 p-2 w-full" id="always-last" />
    </div>
  );
};

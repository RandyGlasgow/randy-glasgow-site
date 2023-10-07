"use client";
import { api } from "@/convex/_generated/api";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useToggle } from "@/hooks/useToggle";
import { useQuery } from "convex/react";
import { GuestbookLog } from "./GuestbookLog";
import { GuestbookControls } from "./GuestbookControls";
import { GuestbookForm } from "./GuestbookForm";

const Guestbook = () => {
  const [isOpen, toggleOpen, setOpen] = useToggle(false);
  useScrollLock(isOpen);
  return (
    <>
      <button
        className="border p-2 rounded-md hover:bg-black hover:border-fuchsia-600 hover:shadow-2xl transition-all duration-150 ease-in-out"
        onClick={toggleOpen}
      >
        Sign Guestbook
      </button>
      {isOpen && (
        <div className="absolute w-full h-screen top-0 left-0 flex justify-center items-center backdrop-blur-sm z-50 bg-black/20">
          <div className="w-full md:w-2/3 lg:1/2 z-50 rounded-lg overflow-hidden shadow-2xl">
            <GuestbookControls onClick={() => setOpen(false)} />
            <GuestbookLog />
            <GuestbookForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Guestbook;

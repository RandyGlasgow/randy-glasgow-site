"use client";
import React, { FC, FormEvent, useEffect, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FaXmark } from "react-icons/fa6";
import dayjs from "dayjs";

export const Guestbook: FC = () => {
  const guestbookEntries = useQuery(api.guestbook.get);
  const signGuestbook = useMutation(api.guestbook.post);
  const formRef = useRef<HTMLFormElement>(null);

  const lastEntryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastEntryRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [guestbookEntries]);

  const handleSignGuestbook = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);

    const name = form.get("name");
    const company = form.get("company");
    const message = form.get("message");

    signGuestbook({
      name: name as string,
      company: company as string,
      message: message as string,
    }).then(() => {
      formRef.current?.reset();
    });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>Sign Guestbook</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-lg" />
        <Dialog.Content className="bg-stone-900 shadow-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:max-h-[85vh] max-h-screen max-w-2xl rounded border border-stone-600">
          <div className="flex justify-between items-center text-2xl p-4 border-b border-b-stone-600">
            <Dialog.Title>Guestbook</Dialog.Title>
            <Dialog.Close className="px-2 py-2 w-auto rounded-full hover:bg-stone-400 focus:outline-fuchsia-500 outline-4 ring-none outline-none">
              <FaXmark />
            </Dialog.Close>
          </div>
          <Dialog.Description className="h-[400px] overflow-auto p-4 bg-transparent grid gap-2 overflow-x-hidden">
            {guestbookEntries?.map((entry, i) => (
              <div>
                <div className="flex justify-between">
                  <span className="flex gap-2 items-center justify-start">
                    <span className="text-lg">{entry.name}</span>
                    <span className="text-sm text-stone-500">
                      @{entry.company}
                    </span>
                  </span>
                  <span className="text-stone-500">
                    {dayjs(new Date(entry._creationTime)).format(
                      "MMM DD, YYYY"
                    )}
                  </span>
                </div>
                {entry.message && (
                  <p className="flex justify-start text-stone-300">
                    {entry.message}
                  </p>
                )}
              </div>
            ))}
            <div ref={lastEntryRef}></div>
          </Dialog.Description>
          <form
            className="grid gap-2 p-2 border-t border-t-stone-600"
            onSubmit={handleSignGuestbook}
            ref={formRef}
          >
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              autoComplete={"off"}
              className="px-2 py-1 w-full focus:outline-fuchsia-500 outline outline-transparent rounded-sm outline-2 bg-stone-700 shadow-inner border-stone-600 border"
              required
              type="text"
              placeholder="Your Name"
              name="name"
            />
            <label htmlFor="company" className="sr-only">
              Company
            </label>
            <input
              autoComplete={"off"}
              className="px-2 py-1 w-full focus:outline-fuchsia-500 outline outline-transparent rounded-sm outline-2 bg-stone-700 shadow-inner border-stone-600 border"
              required
              type="text"
              placeholder="Your Company"
              name="company"
            />
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              autoComplete={"off"}
              className="px-2 py-1 w-full focus:outline-fuchsia-500 outline outline-transparent rounded-sm outline-2 bg-stone-700 shadow-inner border-stone-600 border"
              name="message"
              id="message"
              placeholder="Leave a message..."
              maxLength={125}
            ></textarea>
            <button
              type="submit"
              className="hover:bg-fuchsia-500 focus:bg-fuchsia-500 focus:outline-fuchsia-500 outline outline-transparent rounded-sm py-0.5 uppercase tracking-widest font-semibold"
            >
              Sign Guestbook
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Guestbook;

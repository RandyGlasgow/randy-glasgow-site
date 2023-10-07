"use client";
import { api } from "@/convex/_generated/api";
import { useToggle } from "@/hooks/useToggle";
import { useMutation } from "convex/react";
import dayjs from "dayjs";
import { FormEvent, FormEventHandler, useRef } from "react";
import { FaChevronUp } from "react-icons/fa6";

export const GuestbookForm = () => {
  const [isOpen, toggleOpen, setOpen] = useToggle(false);
  const signGuestbook = useMutation(api.guestbook.post);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString();
    const company = formData.get("company")?.toString();
    const message = formData.get("message")?.toString();

    if (name && company) {
      signGuestbook({
        name: name,
        company: company.toString(),
        message: message,
        date: dayjs().toISOString(),
      });
    }

    // reset the form
    e.currentTarget.reset();
  };
  return (
    <div className="sticky bottom-0">
      <div className="bg-black border-t relative">
        <span className="h-7 w-10  bg-black border-t border border-b-transparent absolute -top-7 rounded-t-full left-1/2 -translate-x-1/2 origin-center flex justify-center items-center p-2 pb-1">
          <FaChevronUp
            role="button"
            className={`${
              isOpen ? "rotate-180" : ""
            } text-white transition-all duration-150 ease-in-out hover:text-fuchsia-600`}
            onClick={toggleOpen}
          />
        </span>
        <p className="p-2">Sign Guestbook</p>
        {isOpen && (
          <form
            className="caret-fuchsia-600 p-2 grid gap-4"
            onSubmit={handleSubmit}
          >
            <fieldset className="border p-4 rounded-sm border-dashed gap-2 grid grid-cols-2">
              <legend className="text-left">Required</legend>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="bg-black border border-white/50 rounded-sm p-2 outline-none focus:border-fuchsia-500"
              />
              <label htmlFor="company" className="sr-only">
                Company
              </label>
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="bg-black border border-white/50 rounded-sm p-2 outline-none focus:border-fuchsia-500"
              />
            </fieldset>
            <label htmlFor="message">Say Something</label>
            <textarea
              name="message"
              placeholder="Leave a message..."
              className="w-full bg-black border border-white/50 rounded-sm p-2 outline-none focus:border-fuchsia-500"
              maxLength={250}
            ></textarea>
            <button
              className="bg-fuchsia-600 text-white rounded-sm p-2 hover:bg-fuchsia-500 transition-all duration-150 ease-in-out"
              type="submit"
            >
              Sign Guestbook
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

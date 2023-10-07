"use client";
import { useToggle } from "@/hooks/useToggle";
import { Dialog } from "../core/Dialog";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect, useRef } from "react";
import { FaCheck, FaX } from "react-icons/fa6";

const Guestbook = () => {
  const guests = useQuery(api.guestbook.get);
  const signGuestbook = useMutation(api.guestbook.post);
  const [isOpen, toggleOpen, setOpen] = useToggle(false);
  const [isSigning, , setIsSigning] = useToggle(false);
  const signHereRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isOpen && !isSigning) {
      signHereRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
    if (isOpen && isSigning) {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [isOpen, guests, isSigning]);

  return (
    <>
      <button
        className="border p-2 rounded-md hover:bg-black hover:border-fuchsia-600 hover:shadow-2xl transition-all duration-150 ease-in-out"
        onClick={toggleOpen}
      >
        Sign Guestbook
      </button>
      <Dialog isOpen={isOpen} onClose={() => setOpen(false)}>
        <div className="relative bg-black/40 rounded-none md:rounded overflow-hidden border-transparent md:border-stone-700 border">
          <nav className="sticky top-0 bg-black border-b border-stone-700 text-white hidden p-2 md:flex justify-between items-center">
            <span className="p-2">Guest Book</span>
            <button
              className="p-2 rounded hover:ring-fuchsia-600 border border-stone-700 hover:border-transparent hover:bg-fuchsia-600 focus:outline-offset-2 focus:outline-fuchsia-500 outline outline-transparent outline-2 transition-all duration-75 ease-in-out"
              onClick={() => setOpen(false)}
            >
              <FaX />
            </button>
          </nav>
          <div
            id="logs"
            className="overflow-auto h-screen md:h-[500px] w-full md:w-[500px] bg-black/50 text-white"
          >
            <nav className="sticky top-0 bg-black text-white visible md:hidden border-b border-stone-700 p-2 flex justify-between items-center">
              <button
                className="p-2 rounded hover:ring-fuchsia-600 border border-stone-700 hover:border-transparent hover:bg-fuchsia-600 focus:outline-offset-2 focus:outline-fuchsia-500 outline outline-transparent outline-2 transition-all duration-75 ease-in-out"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
              <button
                className="p-2 rounded hover:ring-fuchsia-600 border border-stone-700 hover:border-transparent hover:bg-fuchsia-600 focus:outline-offset-2 focus:outline-fuchsia-500 outline outline-transparent outline-2 transition-all duration-75 ease-in-out"
                onClick={() => setIsSigning(true)}
              >
                Sign Here
              </button>
            </nav>
            <div className="p-2">
              {guests?.map((guest) => (
                <div
                  key={guest._id}
                  id={guest._id}
                  className="border-b border-stone-700 text-left p-2"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="">
                      <h3 className="text-lg font-bold">{guest.name}</h3>
                      <p className="text-sm text-stone-400">
                        @{guest.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm py-2">{guest.message}</p>
                </div>
              ))}
            </div>

            {isSigning && (
              <form
                onReset={(e) => {
                  e.preventDefault();
                  setIsSigning(false);
                  e.currentTarget.reset();
                }}
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = new FormData(e.currentTarget);

                  const name = form.get("name")?.toString();
                  const company = form.get("company")?.toString();
                  const message = form.get("message")?.toString();

                  if (!name || !company)
                    return alert("Name and Company are required");
                  signGuestbook({
                    name: name,
                    company,
                    message,
                  });
                  setIsSigning(false);
                  e.currentTarget.reset();
                }}
                ref={formRef}
                className="sticky bottom-0 left-0 border-t border-stone-700 p-2 bg-black"
              >
                <div className="flex flex-col space-y-2 text-left">
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    className="border border-stone-700 p-2 bg-inherit placeholder:stone-400 rounded outline-none focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent"
                    placeholder="Name"
                  />
                  <label htmlFor="company" className="sr-only">
                    Company
                  </label>
                  <input
                    required
                    type="text"
                    name="company"
                    className="border border-stone-700 p-2 bg-inherit placeholder:stone-400 rounded outline-none focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent"
                    placeholder="Company"
                  />

                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="border border-stone-700 p-2 bg-inherit placeholder:stone-400 rounded outline-none focus:ring-2 focus:ring-fuchsia-600 focus:border-transparent"
                    placeholder="Leave a message!"
                  />
                </div>
                <div className="flex justify-between items-center w-full py-2">
                  <button
                    className="p-2 rounded hover:ring-fuchsia-600 border border-stone-700 hover:border-transparent hover:bg-fuchsia-600 focus:outline-offset-2 focus:outline-fuchsia-500 outline outline-transparent outline-2 transition-all duration-75 ease-in-out"
                    type="reset"
                  >
                    Cancel
                  </button>
                  <button className="p-2 rounded hover:ring-fuchsia-600 border border-stone-700 hover:border-transparent hover:bg-fuchsia-600 focus:outline-offset-2 focus:outline-fuchsia-500 outline outline-transparent outline-2 transition-all duration-75 ease-in-out">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
          {!isSigning && (
            <button
              ref={signHereRef}
              onClick={() => setIsSigning(true)}
              className="p-2 hover:ring-fuchsia-600 border border-stone-700 hover:border-transparent hover:bg-fuchsia-600 focus:outline-offset-2 transition-all duration-75 ease-in-out w-full text-white bg-black z-50 border-x-transparent border-b-transparent  outline-none focus:bg-fuchsia-600"
            >
              Sign Here
            </button>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default Guestbook;

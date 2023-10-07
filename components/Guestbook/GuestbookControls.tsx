import { FC } from "react";
import { FaX } from "react-icons/fa6";

export const GuestbookControls: FC<{ onClick: Function }> = ({
  onClick,
}) => {
  return (
    <div className="sticky top-0 flex justify-between items-center p-4 bg-black border-b h-20">
      <h2 className="text-white text-2xl">Guestbook</h2>
      <button
        className="p-2 border-2 border-transparent rounded-md hover:border-fuchsia-600"
        onClick={() => onClick()}
      >
        <FaX />
      </button>
    </div>
  );
};

import { FC, PropsWithChildren } from "react";

export type DialogProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: Function;
}>;
export const DialogContainer: FC<DialogProps> = ({
  children,
  isOpen = false,
}) => {
  // center the dialog

  return (
    <dialog
      open={isOpen}
      className="absolute z-50 top-1/2 transform -translate-y-1/2  bg-transparent p-0 w-fit"
    >
      {children}
    </dialog>
  );
};

import { FC, Fragment } from "react";

import { DialogContainer, type DialogProps } from "./DialogContainer";
import { Backdrop } from "./Backdrop";
import { useScrollLock } from "@/hooks/useScrollLock";

export * from "./DialogContainer";
export * from "./Backdrop";

export const Dialog: FC<DialogProps> = ({ isOpen, onClose, children }) => {
  useScrollLock(isOpen);
  return (
    <Fragment>
      {isOpen && <Backdrop onClick={() => onClose()} />}
      <DialogContainer isOpen={isOpen} onClose={onClose}>
        {children}
      </DialogContainer>
    </Fragment>
  );
};

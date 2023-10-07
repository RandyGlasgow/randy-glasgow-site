import { useEffect } from "react";

export const useScrollLock = (enabled: boolean) => {
  useEffect(() => {
    if (enabled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [enabled]);
};

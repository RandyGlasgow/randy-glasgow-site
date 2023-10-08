import { useEffect, useRef } from "react";
import { useStorage } from "./useStorage";

export const useRepeatVisit = (key: string, action: () => void) => {
  const storage = useStorage("local", key);
  const preventDuplicate = useRef(false);

  useEffect(() => {
    if (preventDuplicate.current) {
      return;
    }
    const storageValue = storage.getItem(key);
    if (storageValue) {
      const parsed: unknown = JSON.parse(storageValue);
      if (typeof parsed !== "object" || parsed === null) {
        return;
      }

      const { count, dismissed } = parsed as Partial<{
        count: number;
        dismissed: boolean;
      }>;

      if (typeof count !== "number" || typeof dismissed !== "boolean") {
        return;
      }

      if (count > 3 && !dismissed) {
        action();
        storage.setItem(
          key,
          JSON.stringify({ ...parsed, count: count + 1, dismissed: true })
        );
      } else {
        storage.setItem(
          key,
          JSON.stringify({ count: count + 1, dismissed })
        );
      }
    } else {
      storage.setItem(key, JSON.stringify({ count: 1, dismissed: false }));
    }

    return () => {
      preventDuplicate.current = true;
    };
  }, [key, action, storage]);
};

import { useEffect, useState } from "react";

export const useStorage = <T,>(
  type: "local" | "session",
  key: string
): typeof type extends "local" | "session"
  ? typeof window.localStorage | typeof window.sessionStorage
  : never => {
  if (typeof window === "undefined") {
    return undefined as never;
  }
  return type === "local" ? window.localStorage : window.sessionStorage;
};

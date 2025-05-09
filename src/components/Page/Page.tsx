import { Navigation } from "@/components/Navigation/Navigation";
import { PropsWithChildren } from "react";

export default function Page({ children }: PropsWithChildren) {
  return (
    <div className="py-4 px-8">
      <Navigation />
      {children}
    </div>
  );
}

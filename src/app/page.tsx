"use client";

import Page from "@/components/Page/Page";
import { Command, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { CommandGroup } from "cmdk";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <Page>
      <section className="flex items-center gap-2 justify-center h-[600px]">
        <span className="w-full max-w-2xl">
          <Popover open={query !== ""}>
            P
            <PopoverContent>
              <Command>
                <CommandInput
                  placeholder="Search or something..."
                  className=""
                  value={query}
                  onValueChange={(value) => setQuery(value)}
                />
                <CommandGroup>
                  <CommandItem>
                    <span>Item 1</span>
                  </CommandItem>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </span>
      </section>
      <section id="most-recent"></section>
      <section id="most-popular"></section>
    </Page>
  );
}

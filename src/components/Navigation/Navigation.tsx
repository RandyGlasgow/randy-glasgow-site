"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About.</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0">
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                  <div className="mb-2 mt-4 text-lg font-medium">About...</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    The <strong>who</strong>, <strong>what</strong> and{" "}
                    <strong>why</strong> of it all.
                  </p>
                </div>
              </li>
              <div className="grid gap-2 p-2">
                <ListItem href="/about/hobbies" title="Hobbies">
                  What I like to do in my free time.
                </ListItem>
                <ListItem href="/about/work" title="Work">
                  What I do for a living.
                </ListItem>
                <ListItem href="/about/projects" title="Projects">
                  What I&apos;ve been working on.
                </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blog.</NavigationMenuTrigger>
          <NavigationMenuContent className="p-0">
            <ul className="grid gap-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                  <div className="mb-2 mt-4 text-lg font-medium">Blog...</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Lost in my head - It&apos;s O.K. they know me here.
                  </p>
                </div>
              </li>
              <div className="grid gap-2 p-2">
                <ListItem href="/blog/?tag=code" title="Code">
                  <strong>Ctrl+C</strong>, <strong>Ctrl+V</strong>, and original
                  thoughts.
                </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem asChild>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/photography" passHref>
              Photography.
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

"use client";

import { useScrollY } from "@/hooks/useScrollY";
import {
  MAIN_DESKTOP_BAR_HEIGHT,
  TOP_BAR_HEIGHT,
} from "../constants/navbar.constants";
import { cn } from "@/lib/utils";
import { TopNavbar } from "./TopNavbar";
import { MiddleNavbar } from "./MiddleNavbar";

export const MainNavbar = () => {
  const { scrollY } = useScrollY();

  return (
    <div
      data-scrolled={scrollY > 0}
      data-is-sticky={scrollY >= TOP_BAR_HEIGHT}
      className={cn(
        "peer w-full h-fit md:flex hidden flex-col group relative",
        scrollY > 0
          ? "bg-white text-foreground"
          : "hover:bg-white hover:text-foreground focus-within:bg-white focus-within:text-foreground bg-transparent text-background"
      )}
      style={{
        paddingTop:
          scrollY >= TOP_BAR_HEIGHT
            ? `${MAIN_DESKTOP_BAR_HEIGHT + TOP_BAR_HEIGHT}px`
            : 0,
      }}
    >
      <TopNavbar />
      <MiddleNavbar />
    </div>
  );
};

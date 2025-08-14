import { cn } from "@/lib/utils";
import { ExtendedSvgProps } from "./icon.types";

export const ChevronRightIcon = ({ className, ...props }: ExtendedSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 7 14"
      fill="none"
      className={cn("stroke-[1.5]", className)}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="square" d="m2 2 4 5-4 5" />
    </svg>
  );
};

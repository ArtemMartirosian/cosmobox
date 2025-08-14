import { ExtendedSvgProps } from "./icon.types";

export const UserIcon = ({ ...props }: ExtendedSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 19"
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="square"
        d="M2 16c.583-1.11 2.917-3.329 7-3.329s6.417 2.22 7 3.329M6.5 3.05A3.5 3.5 0 1 0 11.45 8 3.5 3.5 0 0 0 6.5 3.05Z"
      />
    </svg>
  );
};

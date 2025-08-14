import { ExtendedSvgProps } from "./icon.types";

export const StarIcon = ({ ...props }: ExtendedSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 13"
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        fill="currentColor"
        d="m7.5 0 2.082 4.134 4.575.703-3.288 3.258.745 4.568L7.5 10.542l-4.114 2.121.745-4.568L.843 4.837l4.575-.703L7.5 0Z"
      />
    </svg>
  );
};

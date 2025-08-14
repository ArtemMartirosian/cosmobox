import { ExtendedSvgProps } from "./icon.types";

export const HeartIcon = ({ ...props }: ExtendedSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 19"
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="M2.157 4.19a3.942 3.942 0 0 1 1.28-.88 3.849 3.849 0 0 1 3.022 0c.48.204.914.503 1.281.88L9 5.489l1.26-1.297A3.891 3.891 0 0 1 13.052 3c1.047 0 2.051.428 2.792 1.19A4.128 4.128 0 0 1 17 7.066a4.128 4.128 0 0 1-1.157 2.875l-1.26 1.297.012.011L9.01 17l-.01-.012-.012.012-5.583-5.75.01-.012-1.26-1.297a4.075 4.075 0 0 1-.855-1.319 4.17 4.17 0 0 1 0-3.112c.198-.493.489-.942.856-1.32Z"
      />
    </svg>
  );
};

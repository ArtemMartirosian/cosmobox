import { ExtendedSvgProps } from "./icon.types";

export const DocumentIcon = ({ ...props }: ExtendedSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        clipPath="url(#a)"
      >
        <path d="M1 7.4c0-3.017 0-4.525 1.081-5.463C3.163 1 4.904 1 8.385 1h1.23c3.482 0 5.223 0 6.304.937C17 2.874 17 4.383 17 7.4v3.2c0 3.017 0 4.525-1.081 5.463C14.837 17 13.096 17 9.615 17h-1.23c-3.481 0-5.223 0-6.304-.937C1 15.126 1 13.617 1 10.6V7.4ZM5 6h8M5 9h8m-8 3h4.571" />
      </g>
      <defs>
        <clipPath id="a">
          <path stroke="currentColor" fill="currentColor" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

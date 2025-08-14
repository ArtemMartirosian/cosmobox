import { ExtendedSvgProps } from "./icon.types";

export const SearchIcon = ({ ...props }: ExtendedSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <circle stroke="currentColor" cx={7.429} cy={7.429} r={5.536} />
        <path
          stroke="currentColor"
          strokeLinecap="square"
          d="m11.765 11.765 3.294 3.294"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

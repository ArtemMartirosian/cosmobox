import { ExtendedSvgProps } from "./icon.types";

export const BasketIcon = ({ ...props }: ExtendedSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 19"
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        d="M7.607 5.84v-.96c0-.737.275-1.474.825-2.036a2.77 2.77 0 0 1 3.98 0c.55.562.824 1.299.824 2.036v.96m-5.629 0h5.63m-5.63 0H1.5L2.5 18h16l1-12.16h-6.264M7.483 8.537c.152.425.394.825.727 1.166a3.077 3.077 0 0 0 4.423 0c.334-.341.576-.74.727-1.166"
      />
    </svg>
  );
};

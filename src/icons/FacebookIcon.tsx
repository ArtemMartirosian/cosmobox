import { ExtendedSvgProps } from "./icon.types";

export const FacebookIcon = ({ ...props }: ExtendedSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M24 12.53C24 5.89 18.624.5 12 .5S0 5.89 0 12.53c0 5.823 4.128 10.67 9.6 11.79v-8.18H7.2v-3.61h2.4V9.523a4.21 4.21 0 0 1 4.2-4.211h3v3.609h-2.4c-.66 0-1.2.541-1.2 1.203v2.406h3.6v3.61h-3.6v8.36c6.06-.602 10.8-5.726 10.8-11.97Z"
      />
    </svg>
  );
};

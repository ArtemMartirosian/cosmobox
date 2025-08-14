import localFont from "next/font/local";

export const ltSuperior = localFont({
  src: [
    {
      path: "../assets/fonts/lt-superior/LTSuperior-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/lt-superior/LTSuperior-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/lt-superior/LTSuperior-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/lt-superior/LTSuperior-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/lt-superior/LTSuperior-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/lt-superior/LTSuperior-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-lt-superior",
  display: "swap",
});

export const kalam = localFont({
  src: [
    {
      path: "../assets/fonts/kalam/Kalam-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/kalam/Kalam-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/kalam/Kalam-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kalam",
  display: "swap",
});

import { MainNavbar } from "./MainNavbar";
import { MobileHeader } from "./MobileHeader";

export const Navbar = () => {
  return (
    <>
      {/* Mobile navbar */}
      <MobileHeader className=" md:hidden" />

      {/* Desktop navbar */}
      <MainNavbar />
    </>
  );
};

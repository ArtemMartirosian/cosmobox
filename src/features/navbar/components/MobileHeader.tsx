import { Logo } from "@/icons/Logo";
import { PhoneIcon } from "@/icons/PhoneIcon";
import { SearchIcon } from "@/icons/SearchIcon";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const MobileHeader = ({ className }: Props) => {
  return (
    <div
      className={cn(
        " w-full h-[60px] flex 2xs:justify-between items-center bg-white z-40 sticky top-0 pr-[21px]",
        className
      )}
    >
      <a
        href="tel:+998 77 350-70-25"
        className=" w-[57px] h-full flex items-center justify-center shrink-0 bg-foreground"
      >
        <PhoneIcon className=" size-[16px] text-white stroke-[1.5]" />
      </a>

      <div className=" w-full h-fit flex items-center justify-center 2xs:mx-0 ml-[68px] mr-[40px]">
        <Logo className=" w-[124px] h-[40px]" />
      </div>

      <div className=" w-fit h-fit flex items-center gap-[28px]">
        <button>
          <SearchIcon className=" size-[16px] stroke-[1.5] text-primary-black" />
        </button>
        <button className=" underline underline-offset-2 text-[16px] font-semibold">
          RU
        </button>
      </div>
    </div>
  );
};

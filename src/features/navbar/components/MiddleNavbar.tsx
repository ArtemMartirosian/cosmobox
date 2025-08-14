import { Button } from "@/components/ui/button";
import { BasketIcon } from "@/icons/BasketIcon";
import { DocumentIcon } from "@/icons/DocumentIcon";
import { HeartIcon } from "@/icons/HeartIcon";
import { Logo } from "@/icons/Logo";
import { LogoBlack } from "@/icons/LogoBlack";
import { SearchIcon } from "@/icons/SearchIcon";
import { UserIcon } from "@/icons/UserIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const MiddleNavbar = () => {
  return (
    <div
      className={cn(
        " w-full h-fit z-40 transition-colors duration-300 ease-in-out px-3 bg-inherit",
        "group-data-[is-sticky=true]:fixed top-0 group-data-[is-sticky=true]:left-1/2 group-data-[is-sticky=true]:-translate-x-1/2",
        "group-data-[is-sticky=false]:relative"
      )}
    >
      <div className=" max-w-[calc(1440px-182px)] mx-auto h-[72px] flex items-center justify-between lg:gap-x-[46px] gap-6 shadow-none">
        {/* logo */}
        <Link href="/">
          {/* default */}
          <Logo
            className={cn(
              "w-[155px] h-[50px]",
              "group-data-[scrolled=true]:inline-block",
              "group-data-[scrolled=false]:hidden",
              "group-data-[scrolled=false]:group-hover:inline-block",
              "group-data-[scrolled=false]:group-focus-within:inline-block"
            )}
          />
          {/* black */}
          <LogoBlack
            className={cn(
              "w-[155px] h-[50px]",
              "group-data-[scrolled=true]:hidden",
              "group-data-[scrolled=false]:inline-block",
              "group-data-[scrolled=false]:group-hover:hidden",
              "group-data-[scrolled=false]:group-focus-within:hidden"
            )}
          />
        </Link>

        {/* searchbar with catalog */}
        <div className=" w-full flex">
          <Button className=" h-[42px] lg:w-[134px] w-fit px-6 font-semibold text-[14px] leading-[110%]">
            <DocumentIcon className=" lg:size-[18px] size-[16px] text-white gap-2.5" />{" "}
            Каталог
          </Button>
          <div
            className={cn(
              "w-full flex items-center justify-between gap-4 transition-all duration-300 ease-in-out h-[42px] pl-[9px] pr-[15px] group",
              "group-data-[scrolled=true]:bg-gray-200",
              "group-data-[scrolled=false]:bg-gray-200/30",
              "group-data-[scrolled=false]:group-hover:bg-gray-200 group-data-[scrolled=false]:group-focus-within:bg-gray-200"
            )}
          >
            <input
              type="text"
              className={cn(
                "w-full outline-none h-full transition-all duration-300 ease-in-out",
                "group-data-[scrolled=true]:placeholder:text-gray-300",
                "group-data-[scrolled=false]:placeholder:text-white/70",
                "group-data-[scrolled=false]:group-hover:placeholder:text-gray-300 group-data-[scrolled=false]:group-focus-within:placeholder:text-gray-300"
              )}
              placeholder="Поиск"
            />
            <SearchIcon
              className={cn(
                "size-[16px] transition-all duration-300 ease-in-out",
                "group-data-[scrolled=true]:text-gray-300",
                "group-data-[scrolled=false]:text-white/70",
                "group-data-[scrolled=false]:group-hover:text-gray-300 group-data-[scrolled=false]:group-focus-within:text-gray-300"
              )}
            />
          </div>
        </div>

        {/* links */}
        <div className=" w-fit h-fit flex items-center lg:gap-[15px] gap-3">
          <div className=" lg:w-[65px] w-fit shrink-0 h-fit flex flex-col items-center gap-1.5">
            <HeartIcon className=" lg:size-[19px] size-[16px] stroke-[1.5]" />
            <span className=" lg:text-[13px] text-[12px] font-medium">
              Избранное
            </span>
          </div>
          <div className=" lg:w-[65px] w-fit shrink-0 h-fit flex flex-col items-center gap-1.5">
            <UserIcon className=" lg:size-[19px] size-[16px] stroke-[1.5]" />
            <span className=" lg:text-[13px] text-[12px] font-medium">
              Войти
            </span>
          </div>
          <div className=" lg:w-[65px] w-fit shrink-0 h-fit flex flex-col items-center gap-1.5">
            <BasketIcon className=" lg:size-[19px] size-[16px] stroke-[1.5]" />
            <span className=" lg:text-[13px] text-[12px] font-medium">
              Корзина
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

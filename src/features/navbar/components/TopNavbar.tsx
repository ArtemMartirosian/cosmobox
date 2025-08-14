import { ListItems } from "@/components/ListItems";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TOP_NAVBAR_LINKS } from "../constants/navbar.constants";

export const TopNavbar = () => {
  return (
    <div
      className={cn(
        " w-full mx-auto h-fit z-40 relative transition-colors duration-300 ease-in-out px-3 bg-inherit",
        "group-data-[is-sticky=true]:absolute top-0"
      )}
    >
      <div
        className={cn(
          "max-w-[calc(1440px-182px)] mx-auto h-[41px] flex items-center justify-between border-b transition-all duration-300",
          "group-data-[scrolled=true]:border-gray-100",
          "group-data-[scrolled=false]:border-white/15 group-hover:border-gray-100"
        )}
      >
        {/* phone number */}
        <a
          href="tel:+998 77 350-70-25"
          className=" lg:text-[14px] text-[12px] font-semibold"
        >
          +998 77 350-70-25
        </a>

        {/* links */}
        <div className=" w-fit h-fit flex items-center gap-x-10">
          <ListItems
            items={TOP_NAVBAR_LINKS}
            render={(item) => (
              <Link
                href={item.href}
                key={item.href}
                className=" font-medium lg:text-[14px] text-[12px]"
              >
                {item.label}
              </Link>
            )}
          />
        </div>

        {/* languages */}
        <div className=" w-fit h-fit flex items-center gap-2">
          <button className=" text-[13px] font-medium underline underline-offset-2">
            RU
          </button>
          <button
            className={cn(
              " text-[13px] font-medium transition-all duration-300 ease-in-out",
              "group-data-[scrolled=true]:text-gray-300 ",
              "group-data-[scrolled=false]:text-gray-400 group-hover:text-gray-300"
            )}
          >
            UZ
          </button>
        </div>
      </div>
    </div>
  );
};

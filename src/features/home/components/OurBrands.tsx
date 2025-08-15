import { ListItems } from "@/components/ListItems";
import { ChevronRightIcon } from "@/icons/ChevronRightIcon";
import Image from "next/image";
import { OUR_BRANDS, OUR_BRANDS_MOBILE } from "../constants/home.constants";

import arnestMobile from "@/assets/brands/arnest mobile.svg";
import rashelMobile from "@/assets/brands/dr rashel logo mobile.svg";
import estelinMobile from "@/assets/brands/estelin mobile.svg";
import forestMobile from "@/assets/brands/forest clean mobile.svg";
import sowellMobile from "@/assets/brands/sowell mobile.svg";
import vesnaMobile from "@/assets/brands/vesna mobile.svg";

export const OurBrands = () => {
  return (
    <div className=" w-full max-w-[1287px] mx-auto sm:mt-[48px] mt-[40px] flex flex-col sm:gap-[35px] gap-[17px] 2xl:pr-0 sm:pr-[16px] pr-[26.5px]">
      <p className=" sm:text-[30px] text-[24px] font-semibold sm:leading-[100%] leading-[30px]">
        Наши бренды
      </p>

      <div className=" w-full h-fit flex items-center 2xl:gap-[46px] sm:gap-[23px]">
        {/* desktop brands */}
        <div className=" w-full h-fit sm:flex hidden items-center gap-[85px] overflow-x-auto">
          <ListItems
            items={OUR_BRANDS}
            render={(brand, index) => (
              <div className=" w-fit h-fit shrink-0 flex" key={index}>
                <Image src={brand} alt="brand" />
              </div>
            )}
          />
        </div>

        {/* mobile brands */}
        <div className=" w-full h-fit sm:hidden flex items-center flex-col gap-[18px]">
          <div className=" w-full h-fit flex items-center justify-between">
            <div className=" w-fit h-fit shrink-0 flex">
              <Image src={rashelMobile} alt="brand" />
            </div>
            <div className=" w-fit h-fit shrink-0 flex">
              <Image src={estelinMobile} alt="brand" />
            </div>
            <div className=" w-fit h-fit shrink-0 flex">
              <Image src={vesnaMobile} alt="brand" />
            </div>
          </div>
          <div className=" w-full h-fit flex items-center justify-between">
            <div className=" w-fit h-fit shrink-0 flex">
              <Image src={sowellMobile} alt="brand" />
            </div>
            <div className=" w-fit h-fit shrink-0 flex">
              <Image src={forestMobile} alt="brand" />
            </div>
            <div className=" w-fit h-fit shrink-0 flex">
              <Image src={arnestMobile} alt="brand" />
            </div>
          </div>
        </div>

        <button className=" size-[46px] shrink-0 sm:flex hidden items-center justify-center rounded-full bg-gray-50">
          <ChevronRightIcon className=" size-[16px]" />
        </button>
      </div>
    </div>
  );
};

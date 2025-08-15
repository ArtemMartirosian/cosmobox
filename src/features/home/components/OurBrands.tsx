import { ListItems } from "@/components/ListItems";
import { OUR_BRANDS } from "../constants/home.constants";
import Image from "next/image";
import { ChevronRightIcon } from "@/icons/ChevronRightIcon";

export const OurBrands = () => {
  return (
    <div className=" w-full max-w-[1287px] mx-auto mt-[48px] flex flex-col gap-[35px]">
      <p className=" text-[30px] font-semibold leading-[100%]">Наши бренды</p>

      <div className=" w-full h-fit flex items-center gap-[46px]">
        <div className=" w-full h-fit flex items-center gap-[85px] overflow-x-auto">
          <ListItems
            items={OUR_BRANDS}
            render={(brand, index) => (
              <div className=" w-fit h-fit shrink-0 flex" key={index}>
                <Image src={brand} alt="brand" />
              </div>
            )}
          />
        </div>

        <button className=" size-[46px] shrink-0 flex items-center justify-center rounded-full bg-gray-50">
          <ChevronRightIcon className=" size-[16px]" />
        </button>
      </div>
    </div>
  );
};

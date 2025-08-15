import img1 from "@/assets/resources/Rectangle 390.svg";
import { ListItems } from "@/components/ListItems";
import Image from "next/image";
import { YOUR_BEAUTY_ITEMS } from "../constants/home.constants";
import { ProductCard } from "@/features/product/components/ProductCard";
import { ChevronRightIcon } from "@/icons/ChevronRightIcon";

export const YourBeautyProducts = () => {
  return (
    <div className=" w-full max-w-[1287px] mx-auto sm:mt-[48px] mt-[40px] flex flex-col 2xl:gap-[25px] gap-[20px] relative">
      <div className=" w-full h-fit flex items-center justify-between">
        <p className=" font-semibold 2xl:text-[30px] text-[24px] leading-[100%]">
          Твоя красота
        </p>

        <button className=" 2xl:block hidden w-fit h-fit text-mid-black underline underline-offset-4 font-semibold text-[14px] leading-[100%]">
          cмотреть все
        </button>
      </div>

      <div className=" w-full h-fit flex items-end">
        <div className=" w-full h-fit flex sm:gap-[20px] gap-[10px]">
          <div className=" sm:w-[292px] w-[164px] sm:h-[449px] h-[283px] relative shrink-0">
            <Image
              src={img1}
              alt="img1"
              className=" w-full h-full object-cover"
            />

            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-fit flex flex-col items-center text-center gap-2 text-white">
              <p className=" font-semibold sm:text-[30px] text-[16px] leading-[100%]">
                Уход для лица
              </p>
              <p className=" sm:mt-[5px] mt-[3px] font-medium sm:text-[16px] text-[12px] sm:leading-[130%] leading-[16px]">
                Новые коллекции
                <br /> скрабов и масок
              </p>

              <button className=" sm:mt-[15px] mt-[8.5px] underline underline-offset-4 font-semibold leading-[110%] sm:text-[14px] text-[12px]">
                подробнее
              </button>
            </div>
          </div>

          <div className=" w-full sm:h-[449px] h-fit flex sm:gap-[20px] gap-[10px] overflow-x-auto">
            <ListItems
              items={YOUR_BEAUTY_ITEMS}
              render={(item, index) => (
                <ProductCard key={index} product={item} className="w-[291px]" />
              )}
            />
          </div>
        </div>
        <button className=" sm:size-[46px] size-[26px] 3xl:static absolute sm:top-[180px] top-[120px] right-[8.7px] z-10 shrink-0 flex items-center justify-center rounded-full 3xl:bg-gray-50 bg-[#EDEDED] ml-[15px] mb-[278px]">
          <ChevronRightIcon className=" sm:size-[16px] size-[10px]" />
        </button>
      </div>
    </div>
  );
};

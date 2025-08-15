import img from "@/assets/resources/Rectangle 390(2).svg";
import { ListItems } from "@/components/ListItems";
import { ProductCard } from "@/features/product/components/ProductCard";
import { ChevronRightIcon } from "@/icons/ChevronRightIcon";
import Image from "next/image";
import { FOR_BODY_ITEMS } from "../constants/home.constants";

export const ForTheBodyProducts = () => {
  return (
    <div className=" w-full max-w-[1287px] mx-auto mt-[48px] flex flex-col gap-[25px]">
      <div className=" w-full h-fit flex items-center justify-between">
        <p className=" font-semibold text-[30px] leading-[100%]">Для тела</p>

        <button className=" w-fit h-fit text-mid-black underline underline-offset-4 font-semibold text-[14px] leading-[100%]">
          cмотреть все
        </button>
      </div>

      <div className=" w-full h-fit flex items-end">
        <div className=" w-full h-fit flex gap-[20px] overflow-x-auto">
          <div className=" w-[292px] h-[449px] relative shrink-0">
            <Image src={img} alt="img1" className=" w-full h-full" />

            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-fit flex flex-col items-center text-center gap-2 text-white">
              <p className=" font-semibold text-[30px] leading-[100%]">
                Уход для волос
              </p>
              <p className=" mt-[5px] font-medium text-[16px] leading-[130%]">
                Новые коллекции
                <br /> скрабов и масок
              </p>

              <button className=" mt-[15px] underline underline-offset-4 font-semibold leading-[110%] text-[14px]">
                подробнее
              </button>
            </div>
          </div>

          <ListItems
            items={FOR_BODY_ITEMS}
            render={(item, index) => (
              <ProductCard key={index} product={item} className="w-[291px]" />
            )}
          />
        </div>
        <button className=" size-[46px] shrink-0 flex items-center justify-center rounded-full bg-gray-50 ml-[15px] mb-[278px]">
          <ChevronRightIcon className=" size-[16px]" />
        </button>
      </div>
    </div>
  );
};

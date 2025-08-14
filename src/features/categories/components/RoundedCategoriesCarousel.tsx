import { ListItems } from "@/components/ListItems";
import { CATEGORIES } from "../constants/categories.constants";
import Image from "next/image";

export const RoundedCategoriesCarousel = () => {
  return (
    <div className=" w-full h-fit pb-[12px]">
      <div className=" w-full h-[136px] flex items-center justify-center gap-3 bg-gray-50">
        <ListItems
          items={CATEGORIES}
          render={(item, index) => (
            <div
              key={index}
              className=" w-fit h-fit flex flex-col items-center text-center gap-[5px]"
            >
              <div className=" rounded-full size-[68px] shrink-0 border-[1.5px] border-primary-black flex items-center justify-center">
                <div className=" size-[60px] shrink-0 rounded-full flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.label}
                    className=" size-[60px]"
                  />
                </div>
              </div>

              <p className=" text-[12px] font-semibold leading-[100%]">
                {item.label}
              </p>
            </div>
          )}
        />
      </div>
    </div>
  );
};

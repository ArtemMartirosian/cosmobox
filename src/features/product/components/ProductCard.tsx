import { kalam } from "@/app/fonts";
import { ListItems } from "@/components/ListItems";
import { YOUR_BEAUTY_ITEMS } from "@/features/home/constants/home.constants";
import { BasketIcon } from "@/icons/BasketIcon";
import { HeartIcon } from "@/icons/HeartIcon";
import { StarIcon } from "@/icons/StarIcon";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
  product: (typeof YOUR_BEAUTY_ITEMS)[0];
}

export const ProductCard = ({ product, className }: Props) => {
  return (
    <div
      className={cn(
        " w-full sm:max-w-[291px] max-w-[164px] h-fit flex flex-col items-center sm:gap-[15px] gap-[7px] shrink-0 relative group",
        className
      )}
    >
      {/* badges */}
      {product.badges.length > 0 && (
        <div className=" absolute sm:top-[15px] top-[13px] sm:left-[15px] left-[8px] z-10 flex flex-col gap-[7px]">
          <ListItems
            items={product.badges}
            render={(badge, index) => (
              <div
                key={index}
                className={cn(
                  " w-fit sm:h-[21px] px-[8px] sm:px-[13px] sm:py-[2.5px] flex items-center justify-center rounded-[10px] font-medium sm:text-[15px] text-[10px] leading-[130%] text-white",
                  badge === "hit" && "bg-[#C3A484]",
                  badge === "sale" && "bg-[#D86767]",
                  badge === "new" && "bg-[#8AC384]"
                )}
              >
                {badge}
              </div>
            )}
          />
        </div>
      )}

      <button className=" w-fit h-fit absolute sm:top-[15px] top-[8.5px] right-[12px] sm:right-[15px] z-10">
        <HeartIcon className=" sm:size-[20px] size-[11px] text-gray-300" />
      </button>

      <div className=" w-full aspect-square flex items-center justify-center bg-gray-50 relative">
        <Image src={product.img} alt={product.name} />

        {/* add to basket button */}
        <button className=" h-[34px] bg-primary-black/80 rounded-[56px] px-[14.5px] group-hover:opacity-100 group-hover:scale-100 scale-95 opacity-0 flex items-center gap-[5px] text-[12px] font-semibold leading-[110%] absolute bottom-[15px] left-1/2 -translate-x-1/2 z-10 whitespace-nowrap text-white transition-all duration-300">
          <BasketIcon className=" size-[16px]" /> Добавить в корзину
        </button>
      </div>

      <div className=" w-full h-fit flex flex-col items-center text-center sm:px-[12px]">
        <p className=" text-mid-black font-medium sm:leading-[130%] sm:text-[15px] text-[10px] leading-[100%]">
          {product.category}
        </p>
        <p className=" mt-[8px] sm:font-bold font-semibold text-[14px] sm:leading-[135%] leading-[16px] sm:uppercase">
          Увлажняющая ночная маска для лица с экстрактом банана Magic Food
          Banana
        </p>

        <div className=" w-fit h-fit flex items-center gap-0.5 mt-[12px]">
          <StarIcon className=" sm:size-[14px] size-[8px] text-orange-500" />
          <StarIcon className=" sm:size-[14px] size-[8px] text-orange-500" />
          <StarIcon className=" sm:size-[14px] size-[8px] text-orange-500" />
          <StarIcon className=" sm:size-[14px] size-[8px] text-orange-500" />
          <StarIcon className=" sm:size-[14px] size-[8px] text-orange-100" />
        </div>

        <div className=" mt-[12px] w-fit h-fit flex items-center sm:flex-row flex-col">
          <p className=" sm:text-[15px] text-[14px] leading-[100%] font-semibold">
            {product.price} сум
          </p>
          <div className=" w-fit h-fit flex items-center sm:mt-0 mt-[6px]">
            {product.dicountedPrice !== null && (
              <p className=" line-through text-gray-300 sm:text-[14px] text-[12px] leading-[100%] sm:ml-[13px]">
                {product.dicountedPrice} сум
              </p>
            )}

            {product.discountPercent !== null && (
              <p
                className={cn(
                  "text-orange-500 font-bold sm:text-[13px] text-[12px] leading-[100%] sm:ml-[8px] ml-[7px]",
                  kalam.className
                )}
              >
                -{product.discountPercent}%
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

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
        " w-full h-fit flex flex-col items-center gap-[15px] shrink-0 relative group",
        className
      )}
    >
      {/* badges */}
      {product.badges.length > 0 && (
        <div className=" absolute top-[15px] left-[15px] z-10 flex flex-col gap-[7px]">
          <ListItems
            items={product.badges}
            render={(badge, index) => (
              <div
                key={index}
                className={cn(
                  " w-fit h-[21px] px-[13px] flex items-center justify-center rounded-[10px] font-medium text-[15px] leading-[130%] text-white",
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

      <button className=" w-fit h-fit absolute top-[15px] right-[15px] z-10">
        <HeartIcon className=" size-[20px] text-gray-300" />
      </button>

      <div className=" w-full aspect-square flex items-center justify-center bg-gray-50 relative">
        <Image src={product.img} alt={product.name} />

        {/* add to basket button */}
        <button className=" h-[34px] bg-primary-black/80 rounded-[56px] px-[14.5px] group-hover:opacity-100 group-hover:scale-100 scale-95 opacity-0 flex items-center gap-[5px] text-[12px] font-semibold leading-[110%] absolute bottom-[15px] left-1/2 -translate-x-1/2 z-10 whitespace-nowrap text-white transition-all duration-300">
          <BasketIcon className=" size-[16px]" /> Добавить в корзину
        </button>
      </div>

      <div className=" w-full h-fit flex flex-col items-center text-center px-[12px]">
        <p className=" text-mid-black font-medium leading-[130%] text-[15px]">
          {product.category}
        </p>
        <p className=" mt-[8px] font-bold text-[14px] leading-[135%] uppercase">
          Увлажняющая ночная маска для лица с экстрактом банана Magic Food
          Banana
        </p>

        <div className=" w-fit h-fit flex items-center gap-0.5 mt-[12px]">
          <StarIcon className=" size-[14px] text-orange-500" />
          <StarIcon className=" size-[14px] text-orange-500" />
          <StarIcon className=" size-[14px] text-orange-500" />
          <StarIcon className=" size-[14px] text-orange-500" />
          <StarIcon className=" size-[14px] text-orange-100" />
        </div>

        <div className=" mt-[12px] w-fit h-fit flex items-center">
          <p className=" text-[15px] leading-[100%] font-semibold">
            {product.price} сум
          </p>
          {product.dicountedPrice !== null && (
            <p className=" line-through text-gray-300 text-[14px] leading-[100%] ml-[13px]">
              {product.dicountedPrice} сум
            </p>
          )}

          {product.discountPercent !== null && (
            <p
              className={cn(
                "text-orange-500 font-bold text-[13px] leading-[100%] ml-[8px]",
                kalam.className
              )}
            >
              -{product.discountPercent}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

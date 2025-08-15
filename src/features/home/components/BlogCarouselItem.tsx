import Image from "next/image";
import img from "@/assets/resources/Rectangle 437.svg";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const BlogCarouselItem = ({ className }: Props) => {
  return (
    <div
      className={cn(
        " w-[386px] h-[242px] flex flex-col justify-between shrink-0 bg-white py-[20px] px-[25px]",
        className
      )}
    >
      <div className=" w-full h-fit flex items-center gap-[26px]">
        <div className=" size-[84px] rounded-full flex items-center justify-center shrink-0">
          <Image src={img} alt="dsad" />
        </div>

        <div className=" w-full h-fit flex flex-col gap-[13px] pr-[23px]">
          <div className=" w-fit h-fit px-[10px] py-[8px] bg-gray-50 text-[12px] leading-[16px] font-medium">
            макияж
          </div>
          <p className=" leading-[120%] text-[16px] font-semibold">
            Зачем и когда нужна база под макияж?
          </p>
        </div>
      </div>

      <div className=" w-full h-fit border-t border-gray-100 pt-[15px] flex items-end gap-[41px]">
        <p className=" text-[14px] leading-[150%] font-medium line-clamp-3">
          Профессиональные визажисты уже давно используют в своей работе базы
          под макияж...
        </p>

        <button className=" text-[#C69178] text-[14px] leading-[110%] font-semibold underline underline-offset-4">
          подробнее
        </button>
      </div>
    </div>
  );
};

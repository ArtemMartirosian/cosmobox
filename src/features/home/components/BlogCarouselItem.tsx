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
        " md:w-[386px] w-[292px] md:h-[242px] h-[203px] flex flex-col justify-between shrink-0 bg-white py-[20px] md:px-[25px] px-[19px]",
        className
      )}
    >
      <div className=" w-full h-fit flex items-center md:gap-[26px] gap-[19px]">
        <div className=" md:size-[84px] size-[64px] rounded-full flex items-center justify-center shrink-0">
          <Image src={img} alt="dsad" />
        </div>

        <div className=" w-full h-fit flex flex-col md:gap-[13px] gap-[8px] md:pr-[23px] pr-[17px]">
          <div className=" w-fit h-fit md:px-[10px] px-[6.3px] md:py-[8px] py-[5px] bg-gray-50 md:text-[12px] text-[8px] md:leading-[16px] leading-[10px] font-medium">
            макияж
          </div>
          <p className=" leading-[120%] md:text-[16px] text-[14px] font-semibold">
            Зачем и когда нужна база под макияж?
          </p>
        </div>
      </div>

      <div className=" w-full h-fit border-t border-gray-100 pt-[15px] flex md:items-end items-start md:flex-row flex-col md:gap-[41px] gap-[9px]">
        <p className=" text-[14px] md:leading-[150%] leading-[20px] font-medium line-clamp-3">
          Профессиональные визажисты уже давно используют в своей работе базы
          под макияж...
        </p>

        <button className=" text-[#C69178] md:text-[14px] text-[10px] leading-[110%] font-semibold underline underline-offset-4">
          подробнее
        </button>
      </div>
    </div>
  );
};

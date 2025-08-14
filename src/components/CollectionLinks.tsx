import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const CollectionLinks = ({ className }: Props) => {
  return (
    <div
      className={cn(
        " w-fit h-fit flex items-start justify-center md:gap-2.5 gap-2 md:pt-0 pt-5 relative z-20",
        className
      )}
    >
      <div className=" md:rounded-[20px] rounded-[14px] md:py-[3px] py-[2px] md:px-[9px] px-[7px] w-fit h-fit md:text-[16px] sm:text-[14px] 2xs:text-[12px] text-[10px] leading-[130%] text-white font-medium bg-white/15">
        Новинки
      </div>
      <div className=" md:rounded-[20px] rounded-[14px] md:py-[3px] py-[2px] md:px-[9px] px-[7px] w-fit h-fit md:text-[16px] sm:text-[14px] 2xs:text-[12px] text-[10px] leading-[130%] text-white font-medium bg-white/15">
        Популярное
      </div>
      <div className=" md:rounded-[20px] rounded-[14px] md:py-[3px] py-[2px] md:px-[9px] px-[7px] w-fit h-fit md:text-[16px] sm:text-[14px] 2xs:text-[12px] text-[10px] leading-[130%] text-white font-medium bg-white/15">
        Распродажа
      </div>
      <div className=" md:rounded-[20px] rounded-[14px] md:py-[3px] py-[2px] md:px-[9px] px-[7px] w-fit h-fit md:text-[16px] sm:text-[14px] 2xs:text-[12px] text-[10px] leading-[130%] text-white font-medium bg-white/15">
        Бренды
      </div>
      <div className=" md:rounded-[20px] rounded-[14px] md:py-[3px] py-[2px] md:px-[9px] px-[7px] w-fit h-fit md:text-[16px] sm:text-[14px] 2xs:text-[12px] text-[10px] leading-[130%] text-white font-medium bg-white/15">
        Акции
      </div>
    </div>
  );
};

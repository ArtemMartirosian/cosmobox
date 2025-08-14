export const BottomNavbar = () => {
  return (
    <div className=" md:peer-hover:pt-3 md:peer-data-[scrolled=true]:pt-3 md:peer-focus-within:pt-3 w-full md:h-10 h-fit flex items-start justify-center md:gap-2.5 gap-2 md:py-3 md:pt-px pt-5 bg-transparent relative z-20 transition-all duration-300 ease-in-out">
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

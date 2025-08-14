import heroBgMobile from "@/assets/deletable/freepik__expend-wall-no-objects__25898 2 mobile.svg";
import heroBg from "@/assets/deletable/freepik__expend-wall-no-objects__25898 2.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Hero = () => {
  return (
    <div
      className={cn(
        " w-full md:h-[596px] h-[373px] z-10 relative overflow-hidden bg-background flex items-end",
        "md:absolute md:top-[-164px] relative left-0"
      )}
    >
      {/* desktop image */}
      <Image
        src={heroBg}
        alt="dasd"
        className=" w-full h-full 3xl:object-cover object-cover absolute top-0 left-0 -z-10 md:block hidden"
      />
      {/* mobile image */}
      <Image
        src={heroBgMobile}
        alt="dasd"
        className=" w-full h-full object-cover absolute top-0 left-0 -z-10 md:hidden"
      />

      <div className=" centered-max-width 2xs:grid grid-cols-2 flex items-end justify-end 2xl:px-[143px] md:px-[72px] px-[20px] md:pb-[101px] pb-[56px]">
        {/* placeholder for grid */}
        <div className=" 2xs:block hidden"></div>

        {/* hero content */}
        <div className=" 2xs:w-full w-[181px] flex flex-col text-white shrink-0 order-2">
          <p className=" font-semibold 2xl:text-[40px] lg:text-[36px] sm:text-[32px] xs:text-[28px] text-[24px] xs:leading-[110%] leading-[28px]">
            Объединяем усилия,
            <br /> превосходим ожидания
          </p>

          <p className=" font-medium 2xl:text-[18px] md:text-[16px] lg:leading-[150%] text-[14px] leading-[17px] 2xl:mt-[18px] lg:mt-4 mt-2.5">
            COSMO BOX — надежный дистрибьютор товаров
            <br /> для дома и личной гигиены в Узбекистане
          </p>

          <Button className=" lg:w-[221px] w-[158px] lg:h-12 h-[44px] font-semibold text-[14px] leading-[110%] 2xl:mt-[25px] lg:mt-[22px] mt-5">
            За покупками
          </Button>
        </div>

        {/* carousel dots */}
        <div className=" absolute md:bottom-[30px] bottom-5 left-[50.76%] z-10 w-fit h-fit flex items-center gap-1.5">
          <button className=" size-1.5 rounded-full shrink-0 bg-white/30"></button>
          <button className=" size-1.5 rounded-full shrink-0 bg-[#F98B5C]"></button>
          <button className=" size-1.5 rounded-full shrink-0 bg-white/30"></button>
          <button className=" size-1.5 rounded-full shrink-0 bg-white/30"></button>
          <button className=" size-1.5 rounded-full shrink-0 bg-white/30"></button>
          <button className=" size-1.5 rounded-full shrink-0 bg-white/30"></button>
          <button className=" size-1.5 rounded-full shrink-0 bg-white/30"></button>
        </div>
      </div>
    </div>
  );
};

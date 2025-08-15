import Image from "next/image";
import { Subscribe } from "./Subscribe";
import developedBy from "@/assets/deletable/Group 8656.svg";
import { FooterContent } from "./FooterContent";
import { MobileFooterContent } from "./MobileFooterContent";

export const Footer = () => {
  return (
    <div className=" w-full h-fit bg-gray-50">
      <div className=" w-full max-w-[1226px] mx-auto">
        <Subscribe />

        <MobileFooterContent />
        <FooterContent />
      </div>

      <div className=" w-full xl:h-[50px] h-fit xl:bg-[#EFEFEF]">
        <div className=" centered-max-width h-full xl:pl-[137px] xl:pr-[77px] px-[20px] flex items-center">
          {/* dektop */}
          <div className=" w-full h-fit xl:flex hidden items-center justify-between">
            <p className=" text-[13px] font-medium leading-[100%] text-gray-300">
              © Cosmo Box, 2024{" "}
            </p>

            <div className=" w-fit h-fit flex items-center gap-[45px]">
              <p className=" text-[13px] leading-[100%] font-medium text-gray-300">
                Публичная оферта
              </p>
              <p className=" text-[13px] leading-[100%] font-medium text-gray-300">
                Политика конфиденциальности
              </p>
            </div>

            <Image src={developedBy} alt="developet by" />
          </div>

          {/* mobile */}
          <div className=" w-full h-fit xl:hidden flex items-center justify-between gap-[55px] border-t border-[#EFEFEF] pt-[25px] pb-[28px]">
            <div className=" w-fit h-fit flex flex-col gap-2">
              <p className=" text-[13px] font-medium leading-[100%] text-gray-300">
                © CosmoBox - интернет магазин косметики и товаров для дома, 2025
              </p>
              <p className=" text-[13px] leading-[100%] font-medium text-gray-300 underline underline-offset-4">
                Публичная оферта
              </p>
              <p className=" text-[13px] leading-[100%] font-medium text-gray-300 underline underline-offset-4">
                Политика конфиденциальности
              </p>
            </div>

            <Image src={developedBy} alt="developet by" />
          </div>
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";
import { Subscribe } from "./Subscribe";
import developedBy from "@/assets/deletable/Group 8656.svg";
import { FooterContent } from "./FooterContent";

export const Footer = () => {
  return (
    <div className=" w-full h-fit bg-gray-50">
      <div className=" w-full max-w-[1226px] mx-auto">
        <Subscribe />

        <FooterContent />
      </div>

      <div className=" w-full h-[50px] bg-[#EFEFEF]">
        <div className=" centered-max-width h-full pl-[137px] pr-[77px] flex items-center">
          <div className=" w-full h-fit flex items-center justify-between">
            <p className=" text-[13px] font-medium leading-[100%] text-gray-300">
              © Cosmo Box, 2024{" "}
            </p>

            <div className=" w-fit h-fit flex items-center gap-[45px]">
              <p className=" text-[13px] leading-[100%] font-medium text-gray-300">
                Публичная оферта
              </p>
              <p className=" text-[13px] leading-[100%] font-medium text-gray-300">
                политика конфиденциальности
              </p>
            </div>

            <Image src={developedBy} alt="developet by" />
          </div>
        </div>
      </div>
    </div>
  );
};

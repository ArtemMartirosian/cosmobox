import { FacebookIcon } from "@/icons/FacebookIcon";
import { InstagramIcon } from "@/icons/InstagramIcon";
import { TelegramIcon } from "@/icons/TelegramIcon";
import Image from "next/image";
import payme from "@/assets/resources/payme.svg";
import click from "@/assets/resources/click.svg";
import uzcard from "@/assets/resources/uzcard.svg";
import humo from "@/assets/resources/humo.svg";

export const MobileFooterContent = () => {
  return (
    <div className=" w-full h-fit pt-[17px] pb-[40px] xl:hidden flex flex-col px-[20px]">
      {/* mobile */}
      <div className=" w-full h-fit mx-auto flex flex-col items-center text-center gap-[10px] shrink-0 border-t border-[#E2E2E2] pt-[20px]">
        <p className=" text-gray-300 text-[14px] leading-[100%]">Телефон</p>
        <p className=" text-[16px] leading-[100%] font-semibold">
          +998 77 350-70-25
        </p>
      </div>

      {/* mobile */}
      <div className=" w-full h-fit mx-auto flex flex-col items-center text-center gap-[10px] shrink-0 border-t border-[#E2E2E2] pt-[20px] mt-[23px]">
        <p className=" text-gray-300 text-[14px] leading-[100%]">Почта</p>
        <p className=" text-[16px] leading-[100%] font-semibold">
          info@cosmobox.uz
        </p>
      </div>

      {/* mobile */}
      <div className=" w-fit h-fit flex items-center gap-[10px] mt-[30px] mx-auto">
        <button className=" size-[38px] shrink-0 flex items-center justify-center border border-[#E2E2E2]">
          <InstagramIcon className=" size-[20px] text-primary-black" />
        </button>
        <button className=" size-[38px] shrink-0 flex items-center justify-center border border-[#E2E2E2]">
          <TelegramIcon className=" size-[20px] text-primary-black" />
        </button>
        <button className=" size-[38px] shrink-0 flex items-center justify-center border border-[#E2E2E2]">
          <FacebookIcon className=" size-[20px] text-primary-black" />
        </button>
      </div>

      {/* mobile */}
      <div className="w-fit h-fit mx-auto flex items-center gap-[30px] mt-[30px]">
        <div className=" w-fit h-fit opacity-50">
          <Image src={payme} alt="payme" />
        </div>
        <div className=" w-fit h-fit opacity-50">
          <Image src={click} alt="click" />
        </div>
        <div className=" w-fit h-fit opacity-50">
          <Image src={uzcard} alt="uzcard" />
        </div>
        <div className=" w-fit h-fit opacity-50">
          <Image src={humo} alt="humo" />
        </div>
      </div>

      {/* mobile */}
      <div className=" w-full h-fit flex gap-[60px] border-t border-[#E2E2E2] pt-[41px] mt-[44px]">
        <div className=" w-fit h-fit flex flex-col gap-[33px]">
          <p className=" font-semibold text-[16px] leading-[100%]">Категории</p>

          <div className=" w-fit h-fit flex flex-col gap-[25px]">
            <p className=" text-[16px] font-medium leading-[100%]">Волосы</p>
            <p className=" text-[16px] font-medium leading-[100%]">Лицо</p>
            <p className=" text-[16px] font-medium leading-[100%]">Тело</p>
            <p className=" text-[16px] font-medium leading-[100%]">
              Чистый дом
            </p>
            <p className=" text-[16px] font-medium leading-[100%]">Бренды</p>
            <p className=" text-[16px] font-medium leading-[100%]">Наборы</p>
            <p className=" text-[16px] font-medium leading-[100%]">Акции</p>
            <p className=" text-[16px] font-medium leading-[100%]">Новинки</p>
          </div>
        </div>
        <div className=" w-fit h-fit flex flex-col gap-[33px]">
          <p className=" font-semibold text-[16px] leading-[100%]">Компания</p>

          <div className=" w-fit h-fit flex flex-col gap-[25px]">
            <p className=" text-[16px] font-medium leading-[100%]">
              О компании
            </p>
            <p className=" text-[16px] font-medium leading-[100%]">
              Доставка и оплата
            </p>
            <p className=" text-[16px] font-medium leading-[100%]">Блог</p>
          </div>
        </div>
      </div>
    </div>
  );
};

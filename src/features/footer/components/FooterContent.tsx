import { FacebookIcon } from "@/icons/FacebookIcon";
import { InstagramIcon } from "@/icons/InstagramIcon";
import { Logo } from "@/icons/Logo";
import { TelegramIcon } from "@/icons/TelegramIcon";

export const FooterContent = () => {
  return (
    <div className=" w-full h-fit pt-[17px] pb-[55px] border-t border-[#E2E2E2] xl:flex hidden flex-row 3xl:px-0 px-[20px]">
      <div className=" w-fit flex flex-col items-center gap-[30px]">
        <Logo className=" w-[192px] h-[62px]" />
        <div className=" w-fit h-fit xl:flex hidden items-center gap-[10px]">
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
      </div>

      <div className=" w-fit h-fit flex 3xl:ml-[123px] 2xl:ml-[103px] xl:ml-[43px] ml-[60px] 3xl:mr-[167px] 2xl:mr-[147px] xl:mr-[50px] mr-[70px] shrink-0">
        <div className=" w-fit h-fit flex flex-col gap-[25px]">
          <p className=" font-semibold text-[16px] leading-[100%]">Компания</p>

          <div className=" w-full h-fit flex flex-col gap-[25px]">
            <p className=" font-medium text-[14px] leading-[100%]">
              О компании
            </p>
            <p className=" font-medium text-[14px] leading-[100%]">
              Доставка и оплата
            </p>
            <p className=" font-medium text-[14px] leading-[100%]">Контакты</p>
            <p className=" font-medium text-[14px] leading-[100%]">Блог</p>
          </div>
        </div>
        <div className=" w-fit h-fit flex flex-col gap-[25px] ml-[55px]">
          <p className=" font-semibold text-[16px] leading-[100%]">Категории</p>

          <div className=" w-fit h-fit flex">
            <div className=" w-fit h-fit flex flex-col gap-[25px] mr-[35px]">
              <p className=" font-medium text-[14px] leading-[100%] whitespace-nowrap">
                Волосы
              </p>
              <p className=" font-medium text-[14px] leading-[100%] whitespace-nowrap">
                Лицо
              </p>
              <p className=" font-medium text-[14px] leading-[100%] whitespace-nowrap">
                Тело
              </p>
              <p className=" font-medium text-[14px] leading-[100%] whitespace-nowrap">
                Чистый дом
              </p>
            </div>
            <div className=" w-fit h-fit flex flex-col gap-[25px] mr-[35px]">
              <p className=" font-medium text-[14px] leading-[100%] whitespace-nowrap">
                Бренды
              </p>
              <p className=" font-medium text-[14px] leading-[100%] whitespace-nowrap">
                Наборы
              </p>
              <p className=" font-medium text-[14px] leading-[100%] whitespace-nowrap">
                Акции
              </p>
              <p className=" font-medium text-[14px] leading-[100%] whitespace-nowrap">
                Новинки
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-fit h-fit flex flex-col gap-[35px]">
        <div className=" w-fit h-fit flex gap-[46px]">
          <div className=" w-fit h-fit flex flex-col gap-[15px] shrink-0">
            <p className=" text-gray-300 text-[14px] leading-[100%]">Телефон</p>
            <p className=" text-[18px] leading-[100%] font-semibold">
              +998 77 350-70-25
            </p>
          </div>
          <div className=" w-fit h-fit flex flex-col gap-[15px] shrink-0">
            <p className=" text-gray-300 text-[14px] leading-[100%]">Почта</p>
            <p className=" text-[18px] leading-[100%] font-semibold">
              info@cosmobox.uz
            </p>
          </div>
        </div>

        <div className=" w-fit h-fit flex flex-col gap-[15px]">
          <p className=" text-gray-300 text-[14px] leading-[100%]">Адрес</p>
          <p className=" text-[18px] leading-[150%] font-semibold">
            100077, г. Ташкент, Мирзо-Улугбекский район, улица Буюк Ипак Йули,
            дом 152/1
          </p>
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";
import img1 from "@/assets/resources/Rectangle 435.svg";
import img1Mobile from "@/assets/resources/Rectangle 435 mobile.svg";
import { LogoBrown } from "@/icons/LogoBrown";

export const CosmoBoxOnlineShop = () => {
  return (
    <div className=" w-full h-fit bg-gray-50 sm:pt-[50px] pt-[20px] sm:pb-[51px] pb-[20px]">
      <div className=" w-full h-fit max-w-[1303px] mx-auto flex flex-col gap-[40px] 3xl:px-0 px-[21px]">
        <p className=" 3xl:ml-[39px] 3xl:text-[28px] text-[24px] font-semibold leading-[130%]">
          CosmoBox - <br className=" xs:hidden" /> интернет-магазин{" "}
          <br className=" xs:hidden" /> косметики и бытовой химии
          <br className=" xs:hidden" /> в Узбекистане
        </p>
        <div className=" w-fit h-fit flex flex-wrap 3xl:gap-[13px] gap-[20px]">
          {/* col 1 */}
          <div className=" sm:w-[316px] w-full sm:h-[400px] h-fit relative">
            <Image
              src={img1}
              alt="asd"
              className=" w-full h-full sm:inline-block hidden scale-x-[-1]"
            />
            <Image
              src={img1Mobile}
              alt="asd"
              className=" w-dvw object-cover sm:hidden scale-x-[-1]"
            />
          </div>

          {/* col 2 */}
          <div className=" sm:w-[316px] w-full shrink-0 h-fit flex flex-col 3xl:gap-[13px] gap-[20px]">
            <div className=" w-full h-[195px] bg-white flex flex-col 3xl:justify-between gap-y-[25px] pb-[25px] pl-[25px] pr-[34px] pt-[27px]">
              <p className=" 3xl:text-[20px] text-[16px] font-semibold leading-[120%]">
                Качество
              </p>

              <p className=" text-[14px] leading-[145%] text-mid-black font-medium">
                Мы заботимся о вас и вашем доме — только оригинальная косметика
                и бытовая химия от проверенных брендов. Только безопасные
                покупки❤️
              </p>
            </div>

            <div className=" w-full h-[195px] bg-white flex flex-col 3xl:justify-between gap-y-[25px] pb-[25px] pl-[25px] pr-[28px] pt-[27px]">
              <p className=" 3xl:text-[20px] text-[16px] font-semibold leading-[120%]">
                Удобная доставка
              </p>

              <p className=" text-[14px] leading-[145%] text-mid-black font-medium">
                Быстрая и надежная доставка по всему Узбекистану, чтобы вам не
                пришлось долго ждать. А в Ташкенте доступна экспресс-доставка —
                ваши заказы приедут в кратчайшие сроки!
              </p>
            </div>
          </div>

          {/* col 3 */}
          <div className=" sm:w-[316px] w-full h-fit flex flex-col 3xl:gap-[13px] gap-[20px]">
            <div className=" w-full h-[195px] bg-white flex flex-col 3xl:justify-between gap-y-[25px] pb-[25px] pl-[25px] pr-[20px] pt-[27px]">
              <p className=" 3xl:text-[20px] text-[16px] font-semibold leading-[120%]">
                Забота и сервис
              </p>

              <p className=" text-[14px] leading-[145%] text-mid-black font-medium">
                Мы ценим каждого клиента и стремимся сделать покупки комфортными
                и приятными. Вежливая поддержка, выгодные цены и внимательное
                отношение — всё для вашего удобства!
              </p>
            </div>

            <div className=" w-full h-[195px] bg-white flex flex-col 3xl:justify-between gap-y-[25px] pb-[25px] pl-[25px] pr-[26px] pt-[27px]">
              <p className=" 3xl:text-[20px] text-[16px] font-semibold leading-[120%]">
                Доверие
              </p>

              <p className=" text-[14px] leading-[145%] text-mid-black font-medium">
                Широкий ассортимент и доверие покупателей — наша гордость.
                Мы тщательно отбираем косметику и бытовую химию, чтобы
                предложить вам только лучшее.
              </p>
            </div>
          </div>

          {/* col 1 */}
          <div className=" sm:w-[316px] w-full sm:h-[400px] h-[286px] bg-[#F7E0D4] shrink-0 flex flex-col justify-between pl-[24.5px] pt-[27.7px] pr-[24px] pb-[30px]">
            <LogoBrown className=" sm:w-[172px] w-[181px] h-[52px]" />

            <div className=" w-full h-fit flex flex-col gap-[20px]">
              <p className=" sm:text-[32px] text-[24px] font-semibold leading-[105%] text-[#C69178]">
                Более 10 лет
                <br /> на рынке
              </p>

              <p className=" leading-[130%] sm:text-[18px] text-[14px] text-[#C69178] font-medium">
                Мы являемся эксклюзивным и единственным дистрибьютором всех
                брендов, представленных у нас на сайте.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

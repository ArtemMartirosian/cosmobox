import Image from "next/image";
import img1 from "@/assets/resources/Rectangle 435.svg";
import { LogoBrown } from "@/icons/LogoBrown";

export const CosmoBoxOnlineShop = () => {
  return (
    <div className=" w-full h-fit bg-gray-50 pt-[50px] pb-[51px]">
      <div className=" w-full h-fit max-w-[1303px] mx-auto flex flex-col gap-[40px]">
        <p className=" ml-[39px] text-[28px] font-semibold leading-[130%]">
          CosmoBox - интернет-магазин косметики и бытовой химии в Узбекистане
        </p>
        <div className=" w-full h-fit flex gap-[13px]">
          {/* col 1 */}
          <div className=" w-[316px] h-[400px] shrink-0 flex">
            <Image src={img1} alt="asd" className=" scale-x-[-1]" />
          </div>

          {/* col 2 */}
          <div className=" w-[316px] h-fit flex flex-col gap-[13px]">
            <div className=" w-full h-[195px] bg-white flex flex-col justify-between pb-[25px] pl-[25px] pr-[34px] pt-[27px]">
              <p className=" text-[20px] font-semibold leading-[120%]">
                Качество
              </p>

              <p className=" text-[14px] leading-[145%] text-mid-black font-medium">
                Мы заботимся о вас и вашем доме — только оригинальная косметика
                и бытовая химия от проверенных брендов. Только безопасные
                покупки❤️
              </p>
            </div>

            <div className=" w-full h-[195px] bg-white flex flex-col justify-between pb-[25px] pl-[25px] pr-[28px] pt-[27px]">
              <p className=" text-[20px] font-semibold leading-[120%]">
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
          <div className=" w-[316px] h-fit flex flex-col gap-[13px]">
            <div className=" w-full h-[195px] bg-white flex flex-col justify-between pb-[25px] pl-[25px] pr-[20px] pt-[27px]">
              <p className=" text-[20px] font-semibold leading-[120%]">
                Забота и сервис
              </p>

              <p className=" text-[14px] leading-[145%] text-mid-black font-medium">
                Мы ценим каждого клиента и стремимся сделать покупки комфортными
                и приятными. Вежливая поддержка, выгодные цены и внимательное
                отношение — всё для вашего удобства!
              </p>
            </div>

            <div className=" w-full h-[195px] bg-white flex flex-col justify-between pb-[25px] pl-[25px] pr-[26px] pt-[27px]">
              <p className=" text-[20px] font-semibold leading-[120%]">
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
          <div className=" w-[316px] h-[400px] bg-[#F7E0D4] shrink-0 flex flex-col justify-between pl-[24.5px] pt-[27.7px] pr-[24px] pb-[30px]">
            <LogoBrown className=" w-[172px] h-[52px]" />

            <div className=" w-full h-fit flex flex-col gap-5">
              <p className=" text-[32px] font-semibold leading-[105%] text-[#C69178]">
                Более 10 лет
                <br /> на рынке
              </p>

              <p className=" leading-[130%] text-[18px] text-[#C69178] font-medium">
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

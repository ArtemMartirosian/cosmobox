import Image from "next/image";
import layer1 from "@/assets/resources/layer1.svg";
import layerMobile from "@/assets/resources/mobile layer.svg";
import { Logo } from "@/icons/Logo";

export const About = () => {
  return (
    <div className=" w-full h-fit xl:pt-[80px] sm:mt-0 mt-[20px] sm:pt-[40px] pt-[20px] sm:pb-[60px] pb-[40px] 3xl:px-0 px-[16px] overflow-hidden">
      <div className=" w-full centered-max-width h-fit grid xl:grid-cols-2 xl:grid-rows-1 grid-rows-[231px_1fr] relative">
        {/* desktop positioned layer */}
        <Image
          src={layer1}
          alt=""
          className=" xl:block hidden absolute top-[42px] left-[39px] -z-10"
        />

        {/* grid col 1 */}
        <div className=" w-full h-fit relative">
          {/* mobile positioned layer */}
          <Image
            src={layerMobile}
            alt=""
            className=" xl:hidden absolute top-0 sm:left-1/2 left-0 sm:-translate-x-1/2 -translate-x-0 -z-10"
          />
          <div className="  absolute top-0 xl:left-[107px] sm:left-1/2 left-0 xl:-translate-x-0 sm:-translate-x-1/2 w-fit h-fit flex flex-col gap-[35px]">
            <Logo className=" w-[263px] h-[85px]" />

            <p className=" xl:text-[28px] text-[24px] font-semibold xl:leading-[130%] leading-[30px]">
              Откройте мир красоты
              <br /> и комфорта вместе с нами
            </p>
          </div>
        </div>

        {/* grid col 2 */}
        <div className=" w-full h-fit flex items-center xl:justify-start justify-center">
          <p className="xl:block hidden whitespace-pre-line font-medium text-[15px] leading-[160%]">
            {`CosmoBox — ведущий дистрибьютор косметических товаров и бытовой химии
           в Узбекистане. Мы не просто поставляем продукцию, мы привносим в жизнь людей
           красоту и удобство, делая каждый день ярче и приятнее. Наша миссия — обеспечить
            каждого клиента высококачественными товарами, которые сделают его жизнь лучше.

Наша команда — это сплоченный коллектив профессионалов, которые не просто
 знают свое дело, но и искренне его любят. Молодые, энергичные и креативные
  специалисты нашего интернет-магазина делают все для того, чтобы наши клиенты
   остались довольны.

Постоянные акции, выгодные цены, оригинальные товары, любовь наших клиентов —
 добро пожаловать в интернет-магазин косметики и товаров для дома CosmoBox,
  вашему надежному партнеру в мире красоты, комфорта, чистоты и уюта в вашем
   доме.`}
          </p>

          <p className=" xl:hidden whitespace-pre-line font-medium sm:text-[15px] text-[14px] sm:leading-[160%] leading-[20px]">
            {`
              CosmoBox — ведущий дистрибьютор косметических товаров и бытовой химии в Узбекистане. Мы не просто поставляем продукцию, мы привносим в жизнь людей красоту и удобство, делая каждый день ярче и приятнее. Наша миссия — обеспечить каждого клиента высококачественными товарами, которые сделают его жизнь лучше.

Наша команда — это сплоченный коллектив профессионалов, которые не просто знают свое дело, но и искренне его любят. Молодые, энергичные и креативные специалисты нашего интернет-магазина делают все для того, чтобы наши клиенты остались довольны.

Постоянные акции, выгодные цены, оригинальные товары, любовь наших клиентов — добро пожаловать в интернет-магазин косметики и товаров для дома CosmoBox, вашему надежному партнеру в мире красоты, комфорта, чистоты и уюта в вашем доме.
            `}
          </p>
        </div>
      </div>
    </div>
  );
};

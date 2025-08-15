import Image from "next/image";
import layer1 from "@/assets/resources/layer1.svg";
import { Logo } from "@/icons/Logo";

export const About = () => {
  return (
    <div className=" w-full h-fit pt-[80px] pb-[60px]">
      <div className=" w-full centered-max-width h-fit grid grid-cols-2 relative">
        {/* positioned layer */}
        <Image
          src={layer1}
          alt=""
          className=" absolute top-[42px] left-[39px] -z-10"
        />

        {/* grid col 1 */}
        <div className=" w-full h-fit relative">
          <div className=" absolute top-0 left-[107px] w-fit h-fit flex flex-col gap-[35px]">
            <Logo className=" w-[263px] h-[85px]" />

            <p className=" text-[28px] font-semibold leading-[130%]">
              Откройте мир красоты
              <br /> и комфорта вместе с нами
            </p>
          </div>
        </div>

        {/* grid col 2 */}
        <div className=" w-fit">
          <p className=" whitespace-pre-line font-medium text-[15px] leading-[160%]">
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
        </div>
      </div>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Logo } from "@/icons/Logo";

export const Subscribe = () => {
  return (
    <div className=" w-full 2xl:h-[110px] h-[343px] flex items-center 2xl:justify-between 2xl:flex-row flex-col 2xl:pt-0 pt-[40px] 22xl:px-0 px-[20px] gap-y-[20px]">
      <p className=" 2xl:text-[18px] text-[16px] leading-[130%] font-semibold 2xl:text-start text-center">
        Подписывайтесь на наши
        <br className=" 2xl:block hidden" /> новинки
        <br className=" 2xl:hidden" /> и секретные акции!
      </p>

      <div className=" 2xl:w-fit w-full h-fit flex 2xl:flex-row flex-col items-center 2xl:gap-[23px] gap-[20px]">
        <div className=" w-full max-w-[594px] flex items-center gap-[9px]">
          <input
            type="text"
            className=" 2xl:h-[48px] h-[44px] 2xl:w-[397px] w-full outline-none bg-white 2xl:px-[20px] px-[7px] text-[14px] font-medium leading-[100%] placeholder:text-gray-300"
            placeholder="email"
          />
          <Button className=" 2xl:h-[48px] h-[44px] 2xl:w-[188px] w-[111px] 2xl:text-[16px] text-[14px] leading-[110%] font-semibold">
            Подписаться
          </Button>
        </div>

        <div className=" w-fit h-fit flex items-start gap-[6px]">
          <Checkbox
            className=" border border-[#A7A7A9] rounded-none size-[11px] bg-transparent data-[state=checked]:bg-transparent data-[state=checked]:border-[#A7A7A9] [&_svg]:!h-[6px] [&_svg]:!w-[6px] [&_svg]:stroke-[5px] [&_svg]:!text-[#A7A7A9]"
            id="check"
          />
          <label
            htmlFor="check"
            className=" cursor-pointer text-[12px] leading-[125%] font-semibold text-[#A7A7A9]"
          >
            Нажимая «Подписаться» вы соглашаетесь c<br />{" "}
            <span className=" underline underline-offset-2">
              пользовательским соглашением
            </span>
            и{" "}
            <span className=" underline underline-offset-2">
              политикой
              <br /> конфиденциальности
            </span>
          </label>
        </div>
      </div>

      <Logo className=" w-[192px] h-[62px] mx-auto mt-[10px] 2xl:hidden" />
    </div>
  );
};

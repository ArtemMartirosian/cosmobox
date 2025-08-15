import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const Subscribe = () => {
  return (
    <div className=" w-full h-[110px] flex items-center justify-between">
      <p className=" text-[18px] leading-[130%] font-semibold">
        Подписывайтесь на наши
        <br /> новинки и секретные акции!
      </p>

      <div className=" w-fit h-fit flex gap-[23px]">
        <div className=" w-full max-w-[594px] flex items-center gap-[9px]">
          <input
            type="text"
            className=" h-[48px] w-[397px] outline-none bg-white px-[20px] text-[14px] font-medium leading-[100%] placeholder:text-gray-300"
            placeholder="email"
          />
          <Button className=" h-[48px] w-[188px]">Подписаться</Button>
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
    </div>
  );
};

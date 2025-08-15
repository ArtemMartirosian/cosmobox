import sub1 from "@/assets/resources/Subtract.svg";
import sub2 from "@/assets/resources/Subtract (1).svg";
import sub3 from "@/assets/resources/Subtract (2).svg";
import sub4 from "@/assets/resources/Subtract(3).svg";

import img1 from "@/assets/resources/Rectangle 407.svg";
import img2 from "@/assets/resources/Rectangle 408.svg";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/icons/InstagramIcon";
import { ChevronRightIcon } from "@/icons/ChevronRightIcon";
import { FacebookIcon } from "@/icons/FacebookIcon";

export const SocialContacts = () => {
  return (
    <div className=" w-full max-w-[1390px] xl:h-[398px] h-fit mx-auto flex xl:items-center xl:justify-between xl:flex-row flex-col-reverse bg-gray-50">
      <div className=" w-fit h-fit 3xl:py-[51px] 3xl:pl-[82px] 3xl:pr-[121px] p-[20px] pt-[34px]">
        <div className=" w-fit h-fit flex items-center">
          <Image src={sub1} alt="sub" className="" />
          <Image src={sub2} alt="sub" className=" -ml-[4px]" />
          <Image src={sub3} alt="sub" className=" -ml-[4px]" />
          <div className=" w-fit h-fit -ml-[4px] relative">
            <p className=" text-[12px] font-bold leading-[100%] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              +10к
            </p>
            <Image src={sub4} alt="sub" className="" />
          </div>
        </div>

        <p className=" 2xl:text-[28px] text-[24px] font-semibold leading-[120%] mt-[28px]">
          Присоединяйтесь
          <br /> к нашему beauty-сообществу!
        </p>
        <p className=" 2xl:text-[16px] text-[14px] 2xl:leading-[150%] leading-[20px] font-medium 2xl:mt-[16px] mt-[20px]">
          Подписывайтесь на наши соцсети, чтобы первыми
          <br className=" 2xl:block hidden" /> узнавать о наших акциях, скидках
          новостях и новинках.
          <br className=" 2xl:block hidden" /> Не пропустите самое интересное!
        </p>

        <div className=" w-fit h-fit flex items-center 2xl:gap-[15px] gap-[13px] 2xl:mt-[30px] mt-[20px]">
          <Button className=" 2xl:w-[158px] w-[140px] h-[48px] gap-[13px]">
            <InstagramIcon className=" 2xl:size-[25px] size-[20px] text-white" />
            <div className=" w-fit h-fit flex items-center gap-[4px]">
              <span className=" 2xl:text-[15px] text-[13px] font-semibold leading-[110%]">
                Instagram
              </span>
              <ChevronRightIcon className=" 2xl:size-[12px] size-[10px] text-white/60" />
            </div>
          </Button>
          <Button className=" 2xl:w-[159px] w-[140px] h-[48px] gap-[13px]">
            <FacebookIcon className=" 2xl:size-[25px] size-[20px] text-white" />
            <div className=" w-fit h-fit flex items-center gap-[4px]">
              <span className=" 2xl:text-[15px] text-[13px] font-semibold leading-[110%]">
                Facebook
              </span>
              <ChevronRightIcon className=" 2xl:size-[12px] size-[10px] text-white/60" />
            </div>
          </Button>
        </div>
      </div>

      <div className=" xl:w-[685px] w-full xl:h-fit h-[398px] flex overflow-x-auto">
        <Image src={img1} alt="img1" className=" w-[343px]" />
        <Image src={img2} alt="img1" className=" w-[342px]" />
        <Image src={img1} alt="img1" className=" w-[343px]" />
        <Image src={img2} alt="img1" className=" w-[342px]" />
        <Image src={img1} alt="img1" className=" w-[343px]" />
        <Image src={img2} alt="img1" className=" w-[342px]" />
      </div>
    </div>
  );
};

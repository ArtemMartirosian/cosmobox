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
    <div className=" w-full max-w-[1390px] h-[398px] mx-auto flex items-center justify-between bg-gray-50">
      <div className=" w-fit h-fit py-[51px] pl-[82px] pr-[121px]">
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

        <p className=" text-[28px] font-semibold leading-[120%] mt-[28px]">
          Присоединяйтесь
          <br /> к нашему beauty-сообществу!
        </p>
        <p className=" text-[16px] leading-[150%] font-medium mt-[16px]">
          Подписывайтесь на наши соцсети, чтобы первыми
          <br /> узнавать о наших акциях, скидках новостях и новинках.
          <br /> Не пропустите самое интересное!
        </p>

        <div className=" w-fit h-fit flex items-center gap-[15px] mt-[30px]">
          <Button className=" w-[158px] h-[48px] gap-[13px]">
            <InstagramIcon className=" size-[25px] text-white" />
            <div className=" w-fit h-fit flex items-center gap-[4px]">
              <span className=" text-[15px] font-semibold leading-[110%]">
                Instagram
              </span>
              <ChevronRightIcon className=" size-[12px] text-white/60" />
            </div>
          </Button>
          <Button className=" w-[159px] h-[48px] gap-[13px]">
            <FacebookIcon className=" size-[25px] text-white" />
            <div className=" w-fit h-fit flex items-center gap-[4px]">
              <span className=" text-[15px] font-semibold leading-[110%]">
                Facebook
              </span>
              <ChevronRightIcon className=" size-[12px] text-white/60" />
            </div>
          </Button>
        </div>
      </div>

      <div className=" w-[685px] h-fit flex overflow-x-auto">
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

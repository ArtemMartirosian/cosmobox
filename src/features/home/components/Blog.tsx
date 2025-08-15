import bg from "@/assets/resources/Rectangle 460.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BlogCarousel } from "./BlogCarousel";
import mask from "@/assets/resources/Rectangle 461.svg";

export const Blog = () => {
  return (
    <div className=" w-full h-fit relative">
      <Image
        src={bg}
        alt="bg"
        className=" w-full h-full object-cover absolute inset-0 -z-10"
        priority
      />
      <div className=" centered-max-width flex items-center justify-between pt-[40px] pb-[41px] pl-[107px] relative">
        <div className=" w-fit h-fit flex flex-col">
          <p className=" text-[28px] font-semibold leading-[130%]">
            Бьюти-блог от специалистов
            <br /> COSMO BOX
          </p>

          <p className=" font-medium text-[16px] leading-[150%] mt-[15px] mb-[29px]">
            Наши советы, лайфхаки, топы и гиды всё для красоты и<br />{" "}
            прекрасного самочувствия, а также полезные статьи по уходу
          </p>

          <Button className=" w-fit h-[48px] text-[14px] font-semibold leading-[110%] px-[43px]">
            Читать блог
          </Button>
        </div>

        <BlogCarousel />

        {/* mask div */}
        <div
          draggable={false}
          className=" w-[107px] h-[372px] absolute top-0 right-0 z-10 select-none pointer-events-none"
        >
          <Image src={mask} alt="mask" className=" w-full h-full" />
        </div>
      </div>
    </div>
  );
};

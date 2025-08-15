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
      <div className=" centered-max-width flex xl:items-center xl:justify-between xl:flex-row flex-col gap-y-[30px] 2xl:pt-[40px] pt-[20px] 2xl:pb-[41px] pb-[20px] 2xl:pl-[107px] pl-[21px] relative">
        <div className=" w-fit h-fit flex flex-col">
          <p className=" md:text-[28px] text-[24px] font-semibold md:leading-[130%] leading-[30px]">
            Бьюти-блог
            <br className="xs:hidden" /> от специалистов
            <br /> COSMO BOX
          </p>

          <p className=" font-medium md:text-[16px] text-[14px] md:leading-[150%] leading-[20px] md:mt-[15px] md:mb-[29px] my-[20px]">
            Наши советы, лайфхаки, топы и гиды всё для красоты и<br />{" "}
            прекрасного самочувствия, а также полезные статьи по уходу
          </p>

          <Button className=" md:w-fit w-[129px] md:h-[48px] h-[36px] md:text-[14px] text-[13px] font-semibold leading-[110%] px-[43px]">
            <span className=" md:block hidden">Читать блог</span>
            <span className=" md:hidden">Смотреть все</span>
          </Button>
        </div>

        <BlogCarousel />

        {/* mask div */}
        <div
          draggable={false}
          className=" w-[107px] h-[372px] absolute top-0 right-0 z-10 select-none pointer-events-none xl:block hidden"
        >
          <Image src={mask} alt="mask" className=" w-full h-full" />
        </div>
      </div>
    </div>
  );
};

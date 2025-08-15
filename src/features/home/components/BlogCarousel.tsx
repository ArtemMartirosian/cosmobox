import { BlogCarouselItem } from "./BlogCarouselItem";

export const BlogCarousel = () => {
  return (
    <div className=" flex xl:w-fit xl:max-w-[695px] w-full items-start gap-[13px] h-fit overflow-x-auto relative">
      <BlogCarouselItem />
      <BlogCarouselItem className=" xl:mt-[49px]" />
      <BlogCarouselItem />
      <BlogCarouselItem className=" xl:mt-[49px]" />
    </div>
  );
};

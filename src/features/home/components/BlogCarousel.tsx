import { BlogCarouselItem } from "./BlogCarouselItem";

export const BlogCarousel = () => {
  return (
    <div className=" flex w-fit max-w-[695px] items-start gap-[13px] h-fit overflow-x-auto relative">
      <BlogCarouselItem />
      <BlogCarouselItem className=" mt-[49px]" />
      <BlogCarouselItem />
      <BlogCarouselItem className=" mt-[49px]" />
    </div>
  );
};

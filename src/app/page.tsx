import { CollectionLinks } from "@/components/CollectionLinks";
import { RoundedCategoriesCarousel } from "@/features/categories/components/RoundedCategoriesCarousel";
import { Hero } from "@/features/hero/components/Hero";
import { YourBeauty } from "@/features/home/components/YourBeauty";
import { cn } from "@/lib/utils";

export default function page() {
  return (
    <>
      <CollectionLinks className=" absolute md:top-[calc(41px+71px)] top-[60px] left-1/2 -translate-x-1/2 z-20" />

      <div
        className={cn(
          " w-full h-fit flex flex-col relative",
          `md:pt-[calc(596px-41px-72px-52px)] pt-0`
        )}
      >
        <Hero />
        <RoundedCategoriesCarousel />

        <div className=" centered-max-width pl-[107px] pr-[46px]">
          <YourBeauty />
        </div>
      </div>
    </>
  );
}

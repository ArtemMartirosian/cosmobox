import { CollectionLinks } from "@/components/CollectionLinks";
import { RoundedCategoriesCarousel } from "@/features/categories/components/RoundedCategoriesCarousel";
import { Hero } from "@/features/hero/components/Hero";
import { About } from "@/features/home/components/About";
import { Blog } from "@/features/home/components/Blog";
import { CleanHouseProducts } from "@/features/home/components/CleanHouseProducts";
import { CosmoBoxOnlineShop } from "@/features/home/components/CosmoBoxOnlineShop";
import { ForTheBodyProducts } from "@/features/home/components/ForTheBodyProducts";
import { HealtyHairProducts } from "@/features/home/components/HealtyHairProducts";
import { OurBrands } from "@/features/home/components/OurBrands";
import { SaleProducts } from "@/features/home/components/SaleProducts";
import { SocialContacts } from "@/features/home/components/SocialContacts";
import { YourBeautyProducts } from "@/features/home/components/YourBeautyProducts";
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
          <YourBeautyProducts />
          <HealtyHairProducts />
          <ForTheBodyProducts />
          <CleanHouseProducts />
          <SaleProducts />

          <OurBrands />
        </div>

        <div className=" w-full max-w-[1228px] mx-auto h-fit mt-[80px] mb-[60px]">
          <p className=" text-[24px] font-semibold text-destructive">
            Flexbox should be here...
          </p>
        </div>

        <CosmoBoxOnlineShop />

        <About />

        <Blog />

        <div className=" w-full h-fit my-[60px] px-[25px]">
          <SocialContacts />
        </div>
      </div>
    </>
  );
}

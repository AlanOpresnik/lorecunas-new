import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { BenefitsSection } from "@/components/home/benefits-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import LorecunasHomeDivider from "@/components/home/Lorecunas-home-divider/Lore-cunas-home-divider";
import CarrouselWrapper from "@/components/home/carrusek/CarrouselWrapper";
import { CarrouselServerCategory } from "@/components/home/CategorySwiper/CategorySwiper";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <CarrouselWrapper />
      <CarrouselServerCategory />
      <LorecunasHomeDivider />
      <TestimonialsSection />
    </>
  );
}

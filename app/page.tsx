import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { BenefitsSection } from "@/components/home/benefits-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import LorecunasHomeDivider from "@/components/home/Lorecunas-home-divider/Lore-cunas-home-divider";
import CarrouselWrapper from "@/components/home/carrusek/CarrouselWrapper";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <CarrouselWrapper />
      <CategoriesSection />
      <LorecunasHomeDivider />
      <TestimonialsSection />
    </>
  );
}

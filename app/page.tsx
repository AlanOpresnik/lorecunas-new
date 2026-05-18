import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProducts } from "@/components/home/featured-products";
import { CategoriesSection } from "@/components/home/categories-section";
import { BenefitsSection } from "@/components/home/benefits-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PromoBanner } from "@/components/home/promo-banner";
import { CarrouselServer } from "@/components/home/carrusek/CarruselServer";
import LorecunasHomeDivider from "@/components/home/Lorecunas-home-divider/Lore-cunas-home-divider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <CarrouselServer />
      <CategoriesSection />
      <PromoBanner />
      <LorecunasHomeDivider />
      <TestimonialsSection />
    </>
  );
}

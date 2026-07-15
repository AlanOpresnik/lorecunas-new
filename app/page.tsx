import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { BenefitsSection } from "@/components/home/benefits-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CarrouselServer } from "@/components/home/carrusek/CarruselServer";
import LorecunasHomeDivider from "@/components/home/Lorecunas-home-divider/Lore-cunas-home-divider";
import { Navbar } from "@/components/navbar";

export default function HomePage() {
  return (
    <>
    <Navbar />
      <HeroSection />
      <BenefitsSection />
      <CarrouselServer />
      <CategoriesSection />
      <LorecunasHomeDivider />
      <TestimonialsSection />
    </>
  );
}

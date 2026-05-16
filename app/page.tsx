import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { CategoriesSection } from "@/components/home/categories-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PromoBanner } from "@/components/home/promo-banner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturedProducts />
      <CategoriesSection />
      <PromoBanner />
      <TestimonialsSection />
    </>
  )
}

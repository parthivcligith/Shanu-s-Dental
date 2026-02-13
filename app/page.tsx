import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SaleBanner } from "@/components/sale-banner"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

import { VelocityScroll } from "@/components/ui/scroll-based-velocity"

import { ZoomParallax } from "@/components/ui/zoom-parallax"

import { Gallery4 } from "@/components/ui/gallery4";
import { Contact2 } from "@/components/ui/contact-2"

const parallaxImages = [
  {
    src: "/images/cloud-mattress-bg.jpg",
    alt: "Premium mattress collection",
    title: "FEZA MATTRESSES",
    subtitle: "Sleep in luxury",
  },
  {
    src: "https://images.unsplash.com/photo-1540932239986-310128078ceb?q=80&w=1280&auto=format&fit=crop",
    alt: "Comfortable bed setup",
  },
  {
    src: "https://images.unsplash.com/photo-1577259873294-b60c3a15061f?q=80&w=1280&auto=format&fit=crop",
    alt: "Luxury pillow and bedding",
  },
  {
    src: "https://images.unsplash.com/photo-1540932239986-310128078ceb?q=80&w=1280&auto=format&fit=crop",
    alt: "Peaceful sleep environment",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1280&auto=format&fit=crop",
    alt: "Modern bedroom design",
  },
  {
    src: "https://images.unsplash.com/photo-1505692952047-643ca63fc455?q=80&w=1280&auto=format&fit=crop",
    alt: "Quality sleep accessories",
  },
  {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1280&auto=format&fit=crop",
    alt: "Premium mattress comfort",
  },
];

const mattressProducts = [
  {
    id: "memory-foam",
    title: "Memory Foam Mattress",
    description: "Pressure-relieving memory foam technology that molds to your body, providing personalized comfort.",
    href: "#",
    image: "https://images.unsplash.com/photo-1540932239986-310128078ceb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "orthopedic",
    title: "Orthopedic Support",
    description: "Specially designed with firm support for spinal alignment and relief from back and neck pain.",
    href: "#",
    image: "https://images.unsplash.com/photo-1577259873294-b60c3a15061f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "cooling-gel",
    title: "Gel-Infused Cooling",
    description: "Advanced cooling gel technology keeps you cool throughout the night for uninterrupted sleep.",
    href: "#",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "natural-latex",
    title: "Natural Latex",
    description: "100% natural latex construction for eco-friendly, durable, and hypoallergenic comfort.",
    href: "#",
    image: "https://images.unsplash.com/photo-1505692952047-643ca63fc455?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "hybrid",
    title: "Hybrid Comfort",
    description: "Perfect blend of springs and foam for the ultimate balance of support and softness.",
    href: "#",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pillow-top",
    title: "Premium Pillow-Top",
    description: "Luxurious quilted surface with extra cushioning for cloud-like comfort and elegance.",
    href: "#",
    image: "https://images.unsplash.com/photo-1540932239986-310128078ceb?q=80&w=800&auto=format&fit=crop",
  },
];

import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <div className="py-10 bg-background overflow-hidden">
        <VelocityScroll
          text="FEZA MATTRESSES PREMIUM SLEEP COMFORT"
          default_velocity={1}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-foreground/10 drop-shadow-sm md:text-7xl md:leading-[5rem]"
        />
      </div>
      <AboutSection />
      <ServicesSection />
      <Gallery4
        title="Mattress Collections"
        description="Explore our premium collection of mattresses designed for every sleep preference and budget."
        items={mattressProducts}
      />
      <SaleBanner />
      <ZoomParallax images={parallaxImages} />
      <Contact2
        title="Get in Touch"
        description="Have questions about our mattresses? We are here to help you find your perfect sleep solution."
        phone="+971 4 500 0000"
        email="hello@fezamattresses.com"
        web={{ label: "fezamattresses.com", url: "#" }}
      />
      <Footer />
    </main>
  )
}

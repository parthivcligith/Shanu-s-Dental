import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Hero as AnimatedHero } from "@/components/ui/animated-hero"
import { SaleBanner } from "@/components/sale-banner"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

import { VelocityScroll } from "@/components/ui/scroll-based-velocity"

import { ZoomParallax } from "@/components/ui/zoom-parallax"

import { PopularServices } from "@/components/popular-services";
import { Contact2 } from "@/components/ui/contact-2"

const parallaxImages = [
  {
    src: "/images/dental-chair-main.jpg",
    alt: "Modern dental clinic chair",
    title: "SHANU'S DENTAL",
    subtitle: "Excellence in every detail",
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1280&auto=format&fit=crop",
    alt: "Dentist working with patient",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1280&auto=format&fit=crop",
    alt: "Dental tools close up",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1280&auto=format&fit=crop",
    alt: "Smiling confident woman",
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1280&auto=format&fit=crop",
    alt: "Dental model",
  },
  {
    src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1280&auto=format&fit=crop",
    alt: "Dental hygiene tools",
  },
  {
    src: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=1280&auto=format&fit=crop",
    alt: "Happy patient smiling",
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
          text="SHANU'S DENTAL COMFORTABLE DENTISTRY"
          default_velocity={1}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-foreground/10 drop-shadow-sm md:text-7xl md:leading-[5rem]"
        />
      </div>
      <AboutSection />
      <AnimatedHero />
      <PopularServices />
      <SaleBanner />
      <ZoomParallax images={parallaxImages} />
      <Contact2
        title="Get in Touch"
        description="We are here to help you with your dental needs. Book an appointment or ask us anything."
        phone="+971 56 537 6630 | +971 4 344 9838"
        email="Drshanusclinic@gmail.com"
        address={{ label: "Office no: 903, Park avenue, Dubai silicon oasis", url: "https://share.google/6r7QQjUqPFvVmPsWx" }}
        web={{ label: "shanusdentalclinic.ae", url: "https://shanusdentalclinic.ae" }}
      />
      <Footer />
    </main>
  )
}

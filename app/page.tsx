import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Hero as AnimatedHero } from "@/components/ui/animated-hero"
import { SaleBanner } from "@/components/sale-banner"
import { DoctorsSection } from "@/components/doctors-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

import { VelocityScroll } from "@/components/ui/scroll-based-velocity"

import { ZoomParallax } from "@/components/ui/zoom-parallax"

import { Gallery4 } from "@/components/ui/gallery4";
import { Contact2 } from "@/components/ui/contact-2"

const parallaxImages = [
  {
    src: "/images/jba-logo.jpg",
    alt: "James Badminton Academy logo",
    title: "JAMES BADMINTON ACADEMY",
    subtitle: "Elite Training Excellence",
  },
  {
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1280&auto=format&fit=crop",
    alt: "Badminton player in action",
  },
  {
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1280&auto=format&fit=crop",
    alt: "Badminton court",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?q=80&w=1280&auto=format&fit=crop",
    alt: "Athletes training",
  },
  {
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1280&auto=format&fit=crop",
    alt: "Badminton equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?q=80&w=1280&auto=format&fit=crop",
    alt: "Coaching session",
  },
  {
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1280&auto=format&fit=crop",
    alt: "Competitive badminton",
  },
];

const services = [
  {
    id: "implantation",
    title: "Implantation",
    description: "We use modern implant materials and ensure long-lasting aesthetic results.",
    href: "#",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "professional-hygiene",
    title: "Professional Hygiene",
    description: "A deep cleaning procedure that removes tartar, plaque, and keeps your smile healthy.",
    href: "#",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers, aesthetic restorations, and smile design.",
    href: "#",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description: "Bite correction for kids and adults. Braces, aligners, individual treatment plans.",
    href: "#",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description: "Gentle and caring dental treatment for children in a friendly environment.",
    href: "#",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "root-canal-treatment",
    title: "Root Canal Treatment",
    description: "Saving natural teeth with modern endodontic procedures and pain-free treatment.",
    href: "#",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "dental-surgery",
    title: "Dental Surgery",
    description: "Complex surgical procedures including extractions and bone grafting performed by experts.",
    href: "#",
    image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=800&auto=format&fit=crop",
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
          text="JAMES BADMINTON ACADEMY ELITE TRAINING"
          default_velocity={1}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-foreground/10 drop-shadow-sm md:text-7xl md:leading-[5rem]"
        />
      </div>
      <AboutSection />
      <AnimatedHero />
      <Gallery4
        title="Popular Services"
        description="We offer a wide range of dental services to ensure your smile is healthy and beautiful."
        items={services}
      />
      <SaleBanner />
      <DoctorsSection />
      <ZoomParallax images={parallaxImages} />
      <Contact2
        title="Get in Touch"
        description="Interested in joining James Badminton Academy? Contact us to discuss your training goals and enroll today."
        phone="+971 4 XXX XXXX"
        email="info@jamesbaadmintonacademy.com"
        web={{ label: "jamesbaadmintonacademy.com", url: "#" }}
      />
      <Footer />
    </main>
  )
}

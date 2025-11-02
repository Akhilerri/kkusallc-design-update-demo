import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";

// High-quality luxury hotel room images - elegant upscale hotel bedrooms with premium FF&E
const heroImages = [
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages[0]}
          alt="Luxury hotel room with premium FF&E furnishings"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            e.currentTarget.src = heroImages[1];
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40" />
        <div className="absolute inset-0 bg-primary/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            FF&E Supplier for Branded Hotels
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light text-white leading-[1.1] tracking-tight">
            Furnishing Hotel
            <br />
            <span className="font-normal">Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
            Premium FF&E solutions for Hilton, IHG, Marriott, and Choice Hotels
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 rounded-full text-base transition-all duration-300 hover:shadow-2xl hover:scale-105 min-w-[200px]"
              data-testid="button-get-started"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get Started
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-8 py-6 rounded-full text-base transition-all duration-300 hover:border-white/50 min-w-[200px]"
              data-testid="button-view-projects"
            >
              <Link href="/portfolio">View Projects</Link>
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="pt-12 flex items-center justify-center gap-2 text-white/80 text-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30" />
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30" />
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30" />
            </div>
            <span className="font-medium">Trusted by 50+ hotel properties</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
        <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors cursor-pointer">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
}

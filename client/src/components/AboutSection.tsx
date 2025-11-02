import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2 min-h-[700px]">
        {/* Left Side - White Background with Content */}
        <div className="bg-white text-gray-900 px-8 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
            Best Quality
          </h1>
          <h2 className="text-base md:text-lg text-gray-600 mb-16 leading-relaxed max-w-xl font-normal">
            Karan Kothari USA LLC is a distinguished hospitality procurement enterprise that is renowned for its exceptional standards. Our company operates through domestic and offshore manufacturing facilities to deliver an extensive range of high-quality products.
          </h2>
          <div className="mt-2">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8 py-6 text-base font-medium rounded-md"
              asChild
            >
              <a href="/contact" className="flex items-center gap-2">
                Get Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Button>
          </div>
        </div>

        {/* Right Side - Luxury Hotel Interior Image with Curved Overlay */}
        <div className="relative min-h-[500px] lg:min-h-full">
          <div className="absolute inset-0 lg:rounded-l-[80px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Luxury hotel interior with elegant furniture and sophisticated design"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

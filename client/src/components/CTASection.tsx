import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function CTASection() {
  return (
    <section className="py-20 md:py-24 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how Karan Kothari USA LLC can bring your vision to life with our exceptional products and services.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8 py-6 text-base font-medium rounded-lg"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Connect With us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

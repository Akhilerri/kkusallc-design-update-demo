import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, ExternalLink } from "lucide-react";

const hotelBrands = [
  {
    name: "Hilton",
    description: "Global hospitality leader with premium hotel brands",
    website: "https://www.hilton.com",
    logo: "/images/hotels/hilton-logo.png",
    brands: ["Hilton Hotels & Resorts", "DoubleTree", "Hampton", "Embassy Suites", "Waldorf Astoria"]
  },
  {
    name: "IHG (InterContinental Hotels Group)",
    description: "One of the world's leading hotel companies",
    website: "https://www.ihg.com",
    logo: "/images/hotels/ihg-logo.png",
    brands: ["InterContinental", "Crowne Plaza", "Holiday Inn", "Holiday Inn Express", "Kimpton"]
  },
  {
    name: "Marriott",
    description: "World's largest hotel chain with diverse portfolio",
    website: "https://www.marriott.com",
    logo: "/images/hotels/marriott-logo.png",
    brands: ["Marriott Hotels", "Sheraton", "Westin", "Renaissance", "Courtyard", "Residence Inn"]
  },
  {
    name: "Hyatt",
    description: "Premium hospitality company focused on care",
    website: "https://www.hyatt.com",
    logo: "/images/hotels/hyatt-logo.png",
    brands: ["Hyatt Regency", "Grand Hyatt", "Hyatt Place", "Hyatt House"]
  },
  {
    name: "Wyndham",
    description: "Largest hotel franchisor in the world",
    website: "https://www.wyndhamhotels.com",
    logo: "/images/hotels/wyndham-logo.png",
    brands: ["Wyndham Hotels", "Ramada", "Days Inn", "Super 8", "La Quinta"]
  },
  {
    name: "Choice Hotels",
    description: "Leading hotel franchising company",
    website: "https://www.choicehotels.com",
    logo: "/images/hotels/choice-logo.png",
    brands: ["Comfort Inn", "Quality Inn", "Sleep Inn", "Clarion", "Cambria Hotels"]
  }
];

export default function BrandHotels() {
  return (
    <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4">Our Partners</Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light mb-6">
                Trusted by Leading
                <span className="block text-primary font-normal">Hotel Brands</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                We supply premium FF&E to major hotel chains worldwide, ensuring quality and consistency across all properties.
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Brands Grid */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotelBrands.map((brand) => (
                <Card key={brand.name} className="group cursor-pointer border-2 hover:border-primary/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-5">
                      <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                        <Building2 className="h-10 w-10 text-primary" />
                      </div>
                      <a
                        href={brand.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                    <CardTitle className="text-2xl font-serif font-bold group-hover:text-primary transition-colors duration-300">{brand.name}</CardTitle>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">{brand.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-sm font-semibold text-foreground">Brand Portfolio:</div>
                      <div className="flex flex-wrap gap-2">
                        {brand.brands.map((subBrand) => (
                          <Badge key={subBrand} variant="secondary" className="text-xs px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                            {subBrand}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-muted/50">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
              Contact us to discuss your hotel FF&E requirements and learn how we can support your project.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
  );
}

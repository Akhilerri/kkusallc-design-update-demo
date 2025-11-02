export function BrandLogos() {
  const brands = [
    { name: "Hilton", logo: "HILTON" },
    { name: "Marriott", logo: "MARRIOTT" },
    { name: "Hyatt", logo: "HYATT" },
    { name: "IHG", logo: "IHG" },
    { name: "Wyndham", logo: "WYNDHAM" },
    { name: "Best Western", logo: "BEST WESTERN" }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-10">
          <p className="text-sm text-gray-600 font-medium uppercase tracking-wider">
            Trusted by Leading Hotel Brands
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-700">
                  {brand.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

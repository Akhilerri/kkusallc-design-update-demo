import React from 'react';
import { Service } from '@shared/types/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight, Wrench, Palette, ShoppingCart, ClipboardList } from 'lucide-react';

interface ServiceOverviewGridProps {
  services: Service[];
  onServiceClick?: (service: Service) => void;
  className?: string;
}

const serviceIcons = {
  manufacturing: Wrench,
  interior_design: Palette,
  procurement: ShoppingCart,
  project_management: ClipboardList,
};

const serviceDescriptions = {
  manufacturing: "Custom manufacturing solutions with precision craftsmanship and quality materials.",
  interior_design: "Complete interior design services from concept to completion with expert guidance.",
  procurement: "Strategic sourcing and procurement of materials, furniture, and fixtures.",
  project_management: "End-to-end project coordination ensuring timely delivery and quality results.",
};

export function ServiceOverviewGrid({ services, onServiceClick, className }: ServiceOverviewGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-6 lg:px-8", className)}>
      {services.map((service) => {
        const IconComponent = serviceIcons[service.type];
        const defaultDescription = serviceDescriptions[service.type];
        
        return (
          <Card 
            key={service.id}
            className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-2 hover:border-primary/30"
            onClick={() => onServiceClick?.(service)}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-5 p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <IconComponent className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-xl font-serif font-bold group-hover:text-primary transition-colors duration-300">
                {service.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pt-0">
              <CardDescription className="text-center mb-6 min-h-[3rem] flex items-center leading-relaxed">
                {service.description || defaultDescription}
              </CardDescription>
              
              {service.capabilities && service.capabilities.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-3 text-foreground">Key Capabilities:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {service.capabilities.slice(0, 3).map((capability, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                    {service.capabilities.length > 3 && (
                      <li className="text-xs text-muted-foreground/70 italic pl-5">
                        +{service.capabilities.length - 3} more capabilities
                      </li>
                    )}
                  </ul>
                </div>
              )}
              
              <Button 
                variant="outline" 
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
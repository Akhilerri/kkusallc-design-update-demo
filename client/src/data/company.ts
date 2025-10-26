import { CompanyInfo } from '@shared/types/common';

export const companyData: CompanyInfo = {
  id: 'karan-kothari-usa-llc',
  name: 'Karan Kothari USA LLC',
  description: 'Trusted FF&E supplier specializing in quality Furniture, Fixtures & Equipment for hotels. We source and supply premium hospitality products, working with leading brands like Hilton, IHG, and Marriott.',
  foundedYear: 2010,
  mission: 'To supply exceptional FF&E solutions that elevate hospitality experiences through quality products, reliable sourcing, and dedicated service to hotel owners and operators.',
  values: [
    'Quality craftsmanship and attention to detail',
    'Innovative design solutions that exceed expectations',
    'Sustainable and responsible business practices',
    'Building lasting partnerships with our clients',
    'Continuous improvement and professional excellence'
  ],
  contactInfo: {
    phone: '+1 (555) 123-4567',
    email: 'office@kkusallc.com',
    address: {
      street: '399 Hoes LN',
      city: 'Piscataway',
      state: 'NJ',
      zipCode: '08854',
      country: 'United States'
    },
    businessHours: {
      monday: '8:00 AM - 6:00 PM',
      tuesday: '8:00 AM - 6:00 PM',
      wednesday: '8:00 AM - 6:00 PM',
      thursday: '8:00 AM - 6:00 PM',
      friday: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 4:00 PM',
      sunday: 'Closed'
    }
  },
  createdAt: new Date('2010-01-01'),
  updatedAt: new Date()
};
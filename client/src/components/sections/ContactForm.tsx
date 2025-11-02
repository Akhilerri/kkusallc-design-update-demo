import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ContactForm as ContactFormType, ProjectType, BudgetRange, TimelineRange, PreferredContactMethod } from '../../../../shared/types/contact';
import { contactFormSchema } from '../../../../shared/validation/contact';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import { Alert, AlertDescription } from '../ui/alert';
import { Loader2, CheckCircle, Send, AlertCircle, Mail } from 'lucide-react';
import { useContactForm } from '../../hooks/useContact';

interface ContactFormProps {
  onSuccess?: () => void;
  className?: string;
}

const projectTypeOptions: { value: ProjectType; label: string }[] = [
  { value: 'residential_design', label: 'Residential Interior Design' },
  { value: 'commercial_design', label: 'Commercial Interior Design' },
  { value: 'manufacturing', label: 'Custom Manufacturing' },
  { value: 'procurement', label: 'Procurement Services' },
  { value: 'project_management', label: 'Project Management' },
  { value: 'consultation', label: 'Design Consultation' },
  { value: 'other', label: 'Other' },
];

const budgetOptions: { value: BudgetRange; label: string }[] = [
  { value: 'under_10k', label: 'Under $10,000' },
  { value: '10k_25k', label: '$10,000 - $25,000' },
  { value: '25k_50k', label: '$25,000 - $50,000' },
  { value: '50k_100k', label: '$50,000 - $100,000' },
  { value: '100k_250k', label: '$100,000 - $250,000' },
  { value: 'over_250k', label: 'Over $250,000' },
  { value: 'not_sure', label: 'Not sure yet' },
];

const timelineOptions: { value: TimelineRange; label: string }[] = [
  { value: 'asap', label: 'As soon as possible' },
  { value: '1_3_months', label: '1-3 months' },
  { value: '3_6_months', label: '3-6 months' },
  { value: '6_12_months', label: '6-12 months' },
  { value: 'over_1_year', label: 'Over 1 year' },
  { value: 'flexible', label: 'Flexible timeline' },
];

const contactMethodOptions: { value: PreferredContactMethod; label: string }[] = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone call' },
  { value: 'text', label: 'Text message' },
  { value: 'no_preference', label: 'No preference' },
];

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess, className = "" }) => {
  const { submitForm, submitting, submitted, error, resetForm } = useContactForm();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
    setValue,
    watch,
    reset,
    trigger
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
    defaultValues: {
      marketingConsent: false
    }
  });

  const onSubmit = async (data: ContactFormType) => {
    const result = await submitForm(data);
    if (result && onSuccess) {
      onSuccess();
    }
  };

  const handleReset = () => {
    reset();
    resetForm();
  };

  if (submitted) {
    return (
      <Card className={className}>
        <CardContent className="p-10 sm:p-12 text-center">
          <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
          <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3">Thank you for your message!</h3>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
            We've received your inquiry and will get back to you within 24 hours during business days.
          </p>
          <Button onClick={handleReset} variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader className="p-6 sm:p-8">
        <CardTitle className="flex items-center gap-3 text-2xl sm:text-3xl font-serif font-bold">
          <Send className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
          Get in Touch
        </CardTitle>
        <p className="text-muted-foreground text-base sm:text-lg mt-3 leading-relaxed">
          Ready to start your project? Fill out the form below and we'll get back to you soon.
        </p>
      </CardHeader>
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
          {/* Basic Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider">Name *</Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Your full name"
                className={`h-12 border-2 transition-all duration-300 ${errors.name ? 'border-destructive focus:border-destructive' : touchedFields.name && !errors.name ? 'border-primary' : 'focus:border-primary'}`}
                onBlur={() => trigger('name')}
              />
              {errors.name && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <Label htmlFor="phone" className="text-sm font-semibold uppercase tracking-wider">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="(555) 123-4567"
                className={`h-12 border-2 transition-all duration-300 ${errors.phone ? 'border-destructive focus:border-destructive' : touchedFields.phone && !errors.phone ? 'border-primary' : 'focus:border-primary'}`}
                onBlur={() => trigger('phone')}
              />
              {errors.phone && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="your.email@example.com"
                className={`h-12 border-2 transition-all duration-300 ${errors.email ? 'border-destructive focus:border-destructive' : touchedFields.email && !errors.email ? 'border-primary' : 'focus:border-primary'}`}
                onBlur={() => trigger('email')}
              />
              {errors.email && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider">Subject *</Label>
              <Input
                id="subject"
                {...register('message')}
                placeholder="What can we help you with?"
                className={`h-12 border-2 transition-all duration-300 ${errors.message ? 'border-destructive focus:border-destructive' : touchedFields.message && !errors.message ? 'border-primary' : 'focus:border-primary'}`}
                onBlur={() => trigger('message')}
              />
              {errors.message && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>

          {/* Office Email Display */}
          <div className="p-5 bg-primary/5 rounded-xl border-2 border-primary/20">
            <div className="flex items-center gap-3 text-sm sm:text-base">
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-semibold">Our Office Email:</span>
              <a href="mailto:office@kkusallc.com" className="text-primary hover:underline font-medium">
                office@kkusallc.com
              </a>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={submitting}
            className="w-full h-14 text-base font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            size="lg"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>

          <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
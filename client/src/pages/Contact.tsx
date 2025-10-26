import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    subject: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Company Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">KK USA LLC</h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                Premier FF&E supplier to hotel owners, providing complete Furniture, 
                Fixtures & Equipment solutions for hospitality projects. We specialize in 
                supplying high-quality FF&E with design assistance available to 
                support your hotel development needs.
              </p>
            </div>

            {/* Office Email */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#6D2239] rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Office Email</div>
                  <a 
                    href="mailto:office@kkusallc.com" 
                    className="text-[#8B3A5C] hover:text-[#A0527D] text-lg font-medium"
                  >
                    office@kkusallc.com
                  </a>
                </div>
              </div>
            </div>

            {/* Office Address */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#6D2239] rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Office Address</div>
                  <div className="text-lg">
                    <div className="font-medium">399 Hoes LN</div>
                    <div>Piscataway, NJ 08854</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#6D2239] rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Phone</div>
                  <a 
                    href="tel:+15551234567" 
                    className="text-lg font-medium hover:text-[#8B3A5C]"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#6D2239] rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-3">Business Hours</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tuesday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Wednesday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Thursday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Saturday</span>
                      <span>Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Send className="h-5 w-5 text-[#8B3A5C]" />
                <h2 className="text-2xl font-bold">Get in Touch</h2>
              </div>
              <p className="text-gray-400">
                Ready to discuss your FF&E needs? Fill out the form below and we'll get back to you soon.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-[#6D2239]"
                />
              </div>

              {/* Number */}
              <div>
                <label htmlFor="number" className="block text-sm font-medium mb-2">
                  Number <span className="text-red-500">*</span>
                </label>
                <Input
                  id="number"
                  name="number"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-[#6D2239]"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-[#6D2239]"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="subject"
                  name="subject"
                  placeholder="Brief description of your inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 focus:border-[#6D2239] resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#6D2239] hover:bg-[#4D1829] text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
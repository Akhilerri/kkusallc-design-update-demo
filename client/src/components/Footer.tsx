import { Link } from "wouter";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

// Custom Link component that scrolls to top
function ScrollToTopLink({ href, children, className, ...props }: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
  [key: string]: any;
}) {
  const handleClick = () => {
    // Scroll to top smoothly when link is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    {
      name: "Facebook", 
      icon: Facebook,
      url: "https://facebook.com/kkusallc",
      color: "hover:text-blue-600"
    },
    {
      name: "X (Twitter)",
      icon: FaXTwitter,
      url: "https://x.com/kkusallc",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/kkusallc",
      color: "hover:text-blue-700"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/kkusallc",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Left Section - Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">KK</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Karan Kothari</h3>
                <p className="text-lg font-semibold text-primary">USA LLC</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Distinguished hospitality procurement enterprise renowned for exceptional standards in FF&E manufacturing and interior design.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 ${social.color} transition-colors`}
                    title={social.name}
                    data-testid={`social-${social.name.toLowerCase()}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Middle Section - Explore */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <ScrollToTopLink
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink
                  href="/portfolio"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  data-testid="link-footer-projects"
                >
                  Our Projects
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink
                  href="/brand-hotels"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  data-testid="link-footer-brands"
                >
                  Brand hotels
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact Us
                </ScrollToTopLink>
              </li>
            </ul>
          </div>

          {/* Right Section - Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-600">
                399 Hoes LN, Piscataway, NJ 08854
              </li>
              <li>
                <a 
                  href="mailto:office@kkusallc.com" 
                  className="text-gray-600 hover:text-gray-900 transition-colors underline"
                >
                  office@kkusallc.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+11234567890" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  (123) 456 - 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Karan Kothari USA LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

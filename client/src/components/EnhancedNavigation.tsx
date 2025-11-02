import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, Sun, Moon, ChevronDown, Globe, X, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useTheme } from "./ThemeProvider";
import { useNavigation } from "@/hooks/useNavigation";
import type { NavigationItem } from "@shared/types/navigation";
import { cn } from "@/lib/utils";

// Business website navigation structure
const businessNavigation: NavigationItem[] = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/portfolio",
  },
  {
    label: "Brand Hotels",
    href: "/brand-hotels",
  },
];

// Language options
const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
];

interface MobileNavigationProps {
  items: NavigationItem[];
  isActiveItem: (item: NavigationItem) => boolean;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

function MobileNavigation({ items, isActiveItem, isOpen, onOpenChange }: MobileNavigationProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [isClosing, setIsClosing] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleExpanded = (href: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(href)) {
      newExpanded.delete(href);
    } else {
      newExpanded.add(href);
    }
    setExpandedItems(newExpanded);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onOpenChange(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => onOpenChange(true)}
        data-testid="button-mobile-menu"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className={cn(
              "fixed inset-0 z-[9998] bg-black/50 md:hidden transition-opacity duration-300",
              isClosing ? "opacity-0" : "opacity-100"
            )}
            onClick={handleClose}
          />
          
          {/* Sliding menu panel */}
          <div 
            className={cn(
              "fixed inset-y-0 left-0 z-[9999] w-full max-w-sm bg-white dark:bg-gray-900 md:hidden transition-transform duration-300 ease-in-out",
              isClosing ? "transform -translate-x-full" : "transform translate-x-0"
            )}
            style={{
              transform: isOpen && !isClosing ? 'translateX(0)' : 'translateX(-100%)'
            }}
          >
            <div className="flex flex-col h-full">
              {/* Header with logo and close button */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-700">
                <Link
                  href="/"
                  className="flex items-center gap-2 group"
                  onClick={handleClose}
                >
                  <img 
                    src="/logo.png" 
                    alt="KK USA LLC Logo" 
                    className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-xl font-bold text-primary">
                    KK USA LLC
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-primary/5 transition-all duration-300 rounded-full"
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              {/* Navigation items - center aligned */}
              <div className="flex-1 flex flex-col items-center justify-center px-6 bg-white dark:bg-gray-900">
                <nav className="flex flex-col items-center space-y-8 animate-fade-in-up">
                  <Link
                    href="/"
                    onClick={handleClose}
                    className={cn(
                      "text-2xl font-semibold text-center transition-all duration-300 hover:scale-105",
                      isActiveItem({ href: "/", label: "Home" }) 
                        ? "text-primary" 
                        : "text-gray-900 dark:text-gray-100 hover:text-primary"
                    )}
                  >
                    Home
                  </Link>
                  
                  {items.map((item) => (
                    <div key={item.href} className="text-center">
                      {item.children ? (
                        <div className="space-y-4">
                          <button
                            onClick={() => toggleExpanded(item.href)}
                            className={cn(
                              "text-2xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2",
                              isActiveItem(item) 
                                ? "text-primary" 
                                : "text-gray-900 dark:text-gray-100 hover:text-primary"
                            )}
                          >
                            {item.label}
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 transition-transform duration-300",
                                expandedItems.has(item.href) && "rotate-180"
                              )}
                            />
                          </button>
                          {expandedItems.has(item.href) && (
                            <div className="space-y-3 animate-fade-in">
                              {item.children.map((child: NavigationItem) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={handleClose}
                                  className={cn(
                                    "block text-lg font-medium transition-all duration-300 hover:scale-105",
                                    isActiveItem(child) 
                                      ? "text-primary" 
                                      : "text-gray-600 dark:text-gray-400 hover:text-primary"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={handleClose}
                          className={cn(
                            "text-2xl font-semibold transition-all duration-300 hover:scale-105",
                            isActiveItem(item) 
                              ? "text-primary" 
                              : "text-gray-900 dark:text-gray-100 hover:text-primary"
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col items-center gap-4 px-6 py-6 bg-white dark:bg-gray-900">
                {/* GET STARTED Button */}
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full w-full max-w-[320px] flex items-center justify-center gap-2 text-base transition-all duration-300 hover:shadow-lg hover:scale-105"
                  onClick={handleClose}
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Social media icons at bottom */}
              <div className="flex items-center justify-center gap-6 px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M12 0C5.373 0 0 5.372 0 12 0 17.084 3.163 21.426 7.627 23.174c-.105-.949-.2-2.405.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.690 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.624 0 11.999-5.373 11.999-12C24 5.372 18.626.001 12.001.001z"/>
                  </svg>
                  <span className="sr-only">Pinterest</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export function EnhancedNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const { theme, setTheme } = useTheme();
  const { isOpen, toggleMenu, closeMenu, isActiveItem, isMobile } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-md border-b border-gray-200/50 dark:border-gray-800/50" 
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-3 group transition-all duration-300"
              data-testid="link-home"
            >
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="KK USA LLC Logo" 
                  className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-primary/80">
                KK USA LLC
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {/* Home Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className={cn(
                        "relative inline-flex items-center justify-center text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg group",
                        "hover:bg-primary/5 hover:text-primary",
                        isActiveItem({ href: "/", label: "Home" }) 
                          ? "text-primary font-semibold" 
                          : "text-foreground/80"
                      )}
                    >
                      Home
                      {isActiveItem({ href: "/", label: "Home" }) && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                      )}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                {/* Other Navigation Items */}
                {businessNavigation.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "relative inline-flex items-center justify-center text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg group",
                          "hover:bg-primary/5 hover:text-primary",
                          isActiveItem(item) 
                            ? "text-primary font-semibold" 
                            : "text-foreground/80"
                        )}
                      >
                        {item.label}
                        {isActiveItem(item) && (
                          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                        )}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Contact Us Button - Desktop */}
            <Button
              asChild
              className="hidden md:flex bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>

            {/* Mobile Navigation */}
            <MobileNavigation
              items={businessNavigation}
              isActiveItem={isActiveItem}
              isOpen={isOpen}
              onOpenChange={isMobile ? toggleMenu : closeMenu}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
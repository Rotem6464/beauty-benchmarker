import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, Sun, Droplets, Shield, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/best-lift-creams", label: "Best Lift Creams" },
];

const skinTypeLinks = [
  { href: "/best-lifting-cream-by-skin-type", label: "All Skin Types", icon: null, isParent: true },
  { href: "/best-lifting-cream-oily-skin", label: "Oily Skin", icon: Sun },
  { href: "/best-lifting-cream-dry-skin", label: "Dry Skin", icon: Droplets },
  { href: "/best-lifting-cream-sensitive-skin", label: "Sensitive Skin", icon: Shield },
  { href: "/best-lifting-cream-mature-skin", label: "Mature Skin", icon: Sparkles },
  { href: "/best-lifting-cream-combination-skin", label: "Combination Skin", icon: Zap },
];

const moreLinks = [
  { href: "/how-we-test", label: "How We Test" },
  { href: "/experts", label: "Our Experts" },
  { href: "/editorial-mission", label: "About" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-bold text-brand-600"
          aria-label="BestLiftingCream.com - Home"
        >
          BestLiftingCream.com
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-muted-foreground hover:text-brand-600 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}

          {/* By Skin Type Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-brand-600 transition-colors font-medium">
              By Skin Type
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {skinTypeLinks.map((link, index) => (
                <div key={link.href}>
                  {link.isParent ? (
                    <>
                      <DropdownMenuItem asChild>
                        <Link to={link.href} className="font-medium">
                          View All Skin Types
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  ) : (
                    <DropdownMenuItem asChild>
                      <Link to={link.href} className="flex items-center gap-2">
                        {link.icon && <link.icon className="w-4 h-4 text-muted-foreground" />}
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  )}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {moreLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-muted-foreground hover:text-brand-600 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-bold text-brand-600">Menu</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-foreground hover:text-brand-600 transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Skin Type Section */}
                <div className="py-2 border-t mt-2">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    By Skin Type
                  </p>
                  {skinTypeLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-foreground hover:text-brand-600 transition-colors py-2 pl-2"
                    >
                      {link.icon && <link.icon className="w-4 h-4 text-muted-foreground" />}
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="border-t mt-2 pt-2">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-foreground hover:text-brand-600 transition-colors py-2 block"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
              <div className="mt-auto pt-8 border-t">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-muted-foreground hover:text-brand-600 py-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { School, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/util'; // Optional: replace with custom `cn` if needed

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#pricing', label: 'Pricing' },
  ];

  return (

    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-[var(--border)]/40 bg-[var(--background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--background)]/60 shadow-sm"
          : "bg-transparent"
      )}
    > 
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <School className="h-8 w-8 text-primary" />
          <span className="font-headline font-bold text-xl text-foreground">UniSchool</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-primary/10"
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline" size="sm" className="transition-all hover:shadow-md">
            <Link to="/login">Login</Link>
          </Button>
          <Button
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-[var(--accent)]/90 transition-all hover:shadow-md"
          >
            <Link to="/signup">Sign Up</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 p-2 transition transform origin-top-right bg-[ shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="outline" className="w-full mt-2 transition-all hover:shadow-md">
              <Link to="/login">Login</Link>
            </Button>
            <Button
              className="w-full bg-[var(--accent)] text-accent-foreground hover:bg-[var(--accent)]/90 transition-all hover:shadow-md"
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

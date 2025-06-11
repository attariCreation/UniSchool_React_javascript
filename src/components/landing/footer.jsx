import { Link } from 'react-router-dom';
import { School, Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com', icon: <Facebook className="h-6 w-6" />, label: 'Facebook' },
    { href: 'https://twitter.com', icon: <Twitter className="h-6 w-6" />, label: 'Twitter' },
    { href: 'https://linkedin.com', icon: <Linkedin className="h-6 w-6" />, label: 'LinkedIn' },
    { href: 'https://instagram.com', icon: <Instagram className="h-6 w-6" />, label: 'Instagram' },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border/60 text-foreground/80">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* UniSchool Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <School className="h-8 w-8 text-primary" />
              <span className="font-headline font-bold text-xl text-foreground">UniSchool</span>
            </Link>
            <p className="text-sm">
              Empowering educational institutions with unified management and boundless learning opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-primary hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-primary hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary shrink-0" />
                <a href="mailto:info@unischool.com" className="hover:text-primary hover:underline">info@unischool.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary shrink-0" />
                <span>+1 (234) 567-8900</span>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(social => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-foreground/70 hover:text-primary transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm">
          <p>&copy; {currentYear} UniSchool. All rights reserved. Designed for a brighter future in education.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

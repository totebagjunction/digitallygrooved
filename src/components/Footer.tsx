import { Code2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                DigitallyGrooved
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transforming digital experiences with modern web development solutions that drive results.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>React/Next.js Development</li>
              <li>WordPress Websites</li>
              <li>Shopify Stores</li>
              <li>Website Maintenance</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                    <p className="text-muted-foreground"><a href="mailto:Digitallygrooved@gmail.com">Digitallygrooved@gmail.com</a></p>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                    <p className="text-muted-foreground"><a href="tel:+918178944116">+91-8178944116</a></p>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} DigitalDoom. All rights reserved. Crafted with passion for digital excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
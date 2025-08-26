import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Globe, ShoppingCart, Wrench, Rocket, Shield, Instagram,AppWindow, Search, Wallpaper, AtSign, ChartLine } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="h-12 w-12 text-primary" />,
      title: "React/Next.js Development",
      description: "Modern, fast, and scalable web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Custom React Applications", "Next.js Full-Stack Solutions", "TypeScript Development", "API Integration"]
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "WordPress Websites",
      description: "Professional WordPress sites with custom themes, plugins, and content management systems tailored to your business needs.",
      features: ["Custom Theme Development", "Plugin Integration", "SEO Optimization", "Content Management"]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-primary" />,
      title: "Shopify Stores",
      description: "Complete e-commerce solutions with custom Shopify themes, payment integration, and conversion-optimized designs.",
      features: ["Custom Store Design", "Payment Integration", "Product Management", "Mobile Optimization"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Website Maintenance",
      description: "Comprehensive maintenance services to keep your website secure, updated, and performing at its best.",
      features: ["Security Updates", "Performance Optimization", "Content Updates", "Bug Fixes"]
    },
    {
      icon: <Rocket className="h-12 w-12 text-primary" />,
      title: "Performance Optimization",
      description: "Speed up your website with advanced optimization techniques for better user experience and search rankings.",
      features: ["Speed Optimization", "SEO Enhancement", "Core Web Vitals", "Mobile Performance"]
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Security & Hosting",
      description: "Secure hosting solutions with SSL certificates, regular backups, and protection against threats.",
      features: ["SSL Certificates", "Regular Backups", "Security Monitoring", "Cloud Hosting"]
    },
  {
    icon: <Instagram className="h-12 w-12 text-primary" />,
    title: "Social Media Marketing & Management",
    description: "Comprehensive social media strategy, content, and growth services across major platforms.",
    features: [
      "Social Media Account Setup (Facebook, Instagram, LinkedIn, YouTube)",
      "Content Calendar Creation",
      "Daily/Weekly Posting & Engagement",
      "Paid Ad Campaigns (Meta Ads – Facebook & Instagram Ads)",
      "Influencer Collaboration Strategy",
      "Social Media Growth Strategy"
    ]
  },
  {
    icon: <AppWindow className="h-12 w-12 text-primary" />,
    title: "Content Creation & Design",
    description: "Creative content production for social, branding, and promotional needs.",
    features: [
      "Reels/Short-form Video Editing",
      "Motion Graphics & Animation",
      "Posters, Banners & Flyers (Static + Motion)",
      "Branding Material (Logos, Brand Kits, Templates)",
      "Photography & Videography Direction (if client provides raw content)"
    ]
  },
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "SEO (Search Engine Optimization)",
    description: "Boost your search engine visibility with technical, local, and content-driven SEO.",
    features: [
      "On-Page SEO Optimization",
      "Off-Page SEO (Backlinking, Guest Posting)",
      "Local SEO (Google My Business Optimization)",
      "Keyword Research & Ranking Strategy",
      "Monthly SEO Reporting"
    ]
  },
  {
    icon: <Wallpaper className="h-12 w-12 text-primary" />,
    title: "Paid Ads & Performance Marketing",
    description: "ROI-driven ad strategies across top platforms to generate qualified leads and conversions.",
    features: [
      "Meta Ads (Facebook + Instagram)",
      "Google Ads (Search, Display, Shopping, YouTube)",
      "LinkedIn Ads (for B2B clients)",
      "Campaign Setup, Monitoring & Optimization"
    ]
  },
  {
    icon: <AtSign className="h-12 w-12 text-primary" />,
    title: "Email & WhatsApp Marketing",
    description: "Direct marketing strategies through personalized email and WhatsApp campaigns.",
    features: [
      "Email Campaign Setup (Design + Automation)",
      "Newsletter Creation",
      "WhatsApp Marketing Strategy & Automation"
    ]
  },
  {
    icon: <ChartLine className="h-12 w-12 text-primary" />,
    title: "Branding & Strategy",
    description: "Strategic brand building and go-to-market planning to strengthen market presence.",
    features: [
      "Brand Identity Development",
      "Digital Marketing Strategy Roadmap",
      "Market Research & Competitor Analysis",
      "Sales Funnel Building"
    ]
  }

  ];

  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development solutions to elevate your digital presence and drive business growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 group h-full hover:shadow-2xl hover:glow-secondary transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.15, rotate: 15 }}
                    whileTap={{ scale: 0.95 }}

                    transition={{ 
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 },
                      rotateY: { duration: 8, repeat: Infinity, ease: "linear", delay: index * 1 }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
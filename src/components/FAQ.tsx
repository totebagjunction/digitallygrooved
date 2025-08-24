import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Clock, DollarSign, Code, Zap, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of websites do you develop?",
      answer: "We specialize in React/Next.js applications, WordPress websites, Shopify e-commerce stores, and custom web solutions. Whether you need a simple business website, complex web application, or online store, we have the expertise to deliver."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Timeline varies based on project complexity. A simple WordPress site takes 1-2 weeks, while custom React applications can take 2-4 weeks. We provide detailed project timelines during the initial consultation."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes! We offer comprehensive maintenance packages including security updates, performance optimization, content updates, bug fixes, and regular backups. Our team monitors your site 24/7 to ensure optimal performance."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing depends on project scope, complexity, and timeline. We offer transparent, fixed-price quotes after understanding your requirements. Contact us for a free consultation and detailed quote."
    },
    {
      question: "Do you optimize websites for search engines (SEO)?",
      answer: "Absolutely! All our websites are built with SEO best practices in mind. We optimize for Core Web Vitals, implement proper meta tags, ensure mobile responsiveness, and can provide ongoing SEO services."
    },
    {
      question: "Can you help with website performance optimization?",
      answer: "Yes, we specialize in performance optimization. We can improve loading speeds, optimize images, implement caching, and enhance Core Web Vitals to improve user experience and search rankings."
    },
    {
      question: "Do you work with existing websites or only build new ones?",
      answer: "We work with both! We can redesign, optimize, or add new features to existing websites, as well as build completely new sites from scratch. We're experienced with various platforms and technologies."
    },
    {
      question: "What makes your development process different?",
      answer: "We focus on transparency, regular communication, and delivering results that drive business growth. Our process includes detailed planning, regular updates, testing, and post-launch support to ensure your success."
    }
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden costs"
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Modern Technology",
      description: "Latest frameworks and best practices"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Performance Focused",
      description: "Optimized for speed and user experience"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      title: "24/7 Support",
      description: "Ongoing support and maintenance available"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <HelpCircle className="h-10 w-10 text-primary" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions we receive about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <AccordionItem 
                          value={`item-${index}`} 
                          className="border-border/50 bg-background/30 rounded-lg px-4 hover:bg-background/50 transition-colors"
                        >
                          <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Features Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground text-center">
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-background/30 transition-colors group"
                    >
                      <motion.div
                        whileHover={{ rotate: 15 }}
                        transition={{ duration: 0.2 }}
                        className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                      >
                        {feature.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-32 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -25, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-16 w-28 h-28 bg-accent/10 rounded-full blur-xl"
          animate={{ 
            y: [0, 20, 0],
            x: [0, 15, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        />
      </div>
    </section>
  );
};

export default FAQ;
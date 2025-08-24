import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Solutions",
      content: "DigitalDoom transformed our online presence completely. The React application they built is fast, modern, and exactly what we needed to scale our business.",
      rating: 5,
      company: "TechStart Solutions"
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoGreen Store",
      content: "The Shopify store they created exceeded all our expectations. Sales increased by 40% within the first month after launch. Outstanding work!",
      rating: 5,
      company: "EcoGreen Store"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, CreativeCorp",
      content: "Professional, responsive, and incredibly talented. Our WordPress site looks amazing and performs flawlessly. Highly recommend DigitalDoom!",
      rating: 5,
      company: "CreativeCorp"
    },
    {
      name: "David Thompson",
      role: "Business Owner, LocalBiz",
      content: "The maintenance service is exceptional. My website has never been more secure and fast. They handle everything so I can focus on my business.",
      rating: 5,
      company: "LocalBiz"
    },
    {
      name: "Lisa Wang",
      role: "Startup Founder, InnovateLab",
      content: "From concept to launch, the team at DigitalDoom guided us through every step. The final product is a masterpiece of modern web development.",
      rating: 5,
      company: "InnovateLab"
    },
    {
      name: "James Miller",
      role: "E-commerce Manager, RetailPro",
      content: "The performance optimization they provided made our site 3x faster. Customer satisfaction has improved dramatically. Worth every penny!",
      rating: 5,
      company: "RetailPro"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-gradient-secondary border-border/50 relative group overflow-hidden h-full hover:glow-secondary transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  <motion.div 
                    className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-smooth"
                    whileHover={{ rotate: 15, scale: 1.2 }}
                  >
                    <Quote className="h-8 w-8 text-primary" />
                  </motion.div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 italic flex-grow">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-border/50 pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary font-medium mt-1">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-16 left-20 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-24 right-12 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  );
};

export default Testimonials;
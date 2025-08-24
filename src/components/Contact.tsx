import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-secondary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and bring your vision to life.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:glow-secondary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  Let's Start a Conversation
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  We're here to help you succeed. Reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="p-3 bg-primary/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Mail className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-foreground">Email Us</p>
                    <p className="text-muted-foreground"><a href="mailto:Digitallygrooved@gmail.com">Digitallygrooved@gmail.com</a></p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="p-3 bg-primary/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Phone className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-foreground">Call Us</p>
                    <p className="text-muted-foreground"><a href="tel:+918178944116">+91-8178944116</a></p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="p-3 bg-primary/10 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <MapPin className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-foreground">Visit Us</p>
                    <p className="text-muted-foreground">New Delhi, India
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:glow-secondary transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Send Us a Message
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Tell us about your project and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-background/50 border border-input rounded-md text-foreground"
                    >
                      <option value="">Select a service</option>
                      <option value="react-nextjs">React/Next.js Development</option>
                      <option value="wordpress">WordPress Website</option>
                      <option value="shopify">Shopify Store</option>
                      <option value="maintenance">Website Maintenance</option>
                      <option value="optimization">Performance Optimization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-background/50 resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:glow-primary transition-smooth py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        Sending...
                      </motion.div>
                    ) : (
                      <>
                        Send Message
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Send className="ml-2 h-4 w-4" />
                        </motion.div>
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 right-16 w-32 h-32 bg-accent/10 rounded-full blur-xl"
          animate={{ 
            y: [0, 15, 0],
            x: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </section>
  );
};

export default Contact;
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/90 dark:bg-background/80"></div>
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div>
              <Code2 className="h-8 w-8 text-primary" />
            </div>
            <span className="text-muted-foreground font-medium">Professional Web Development</span>
            <div>
              <Zap className="h-6 w-6 text-primary" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight"
          >
            Transform Your Digital Presence
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Custom web solutions that drive results. From modern React applications to WordPress sites, 
            we craft digital experiences that captivate and convert.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-gradient-primary hover:glow-primary transition-smooth px-8 py-6 text-lg"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToServices}
                className="border-primary/50 hover:bg-primary/10 transition-smooth px-8 py-6 text-lg"
              >
                View Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-xl"
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 0.9, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-lg"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -25, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
};

export default Hero;
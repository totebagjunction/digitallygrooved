import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Heart, Lightbulb, TrendingUp, Shield } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Transparency",
      description: "Clear communication and honest reporting are at the heart of what we do."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We ensure your website is ready for future innovations by optimizing it for emerging technologies like Generative Engines (GE) and AI."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Results-Driven",
      description: "Your success is our success. Every decision we make is focused on delivering real value."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover who we are, what drives us, and how we can help transform your digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Users className="h-10 w-10 text-primary" />
                  </motion.div>
                  <CardTitle className="text-3xl font-bold text-foreground">
                    Who We Are?
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  At Do-digital, we are a team of professionals dedicated to helping businesses succeed online. 
                  With years of experience in SEO, Paid Ads, and emerging technologies like Generative Engine 
                  and AI, we create strategies that align with your goals and prepare your business for the future.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Target className="h-10 w-10 text-primary" />
                  </motion.div>
                  <CardTitle className="text-3xl font-bold text-foreground">
                    Our Mission
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Our mission is simple: to help businesses connect with their audience and achieve meaningful results. 
                  We focus on using the latest technologies and data-driven strategies to deliver solutions that make a difference.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-10 w-10 text-primary" />
            </motion.div>
            <h3 className="text-3xl font-bold text-foreground">Our Values</h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full group-hover:glow-secondary transition-all duration-300">
                <CardHeader className="text-center">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-16 h-16 bg-primary/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl"
          animate={{ 
            y: [0, 10, 0],
            x: [0, -10, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>
    </section>
  );
};

export default About;
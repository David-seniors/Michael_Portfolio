"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Zap, Target, Users, Heart } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1mnB2cwaBFQOfQN1SVTfmxj1fg-WQogB0", '_blank');
  };

  const values = [
    {
      icon: Zap,
      title: "Performance & Optimization",
      description: "Boosted app responsiveness by 40% through query optimization and caching strategies."
    },
    {
      icon: Target,
      title: "Full-Stack Excellence",
      description: "Built end-to-end solutions with React and Vue frontends and Laravel and Node backends."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Empowered Glasgow, KY small businesses with custom websites and digital tools."
    },
    {
      icon: Heart,
      title: "Ownership & Craft",
      description: "Take pride in clean, maintainable code and intuitive user experiences."
    }
  ];

  const personalStats = [
    { label: "Years of Experience", value: "10+" },
    { label: "Full-Stack Projects", value: "50+" },
    { label: "Technologies Used", value: "20+" },
    { label: "Local Businesses Served", value: "15+" }
  ];

  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Senior Full Stack Developer with 10+ years of experience building scalable web applications using React, Vue.js, Laravel, Node.js, and Ruby on Rails, serving startups, enterprises, and local communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold font-display mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a Senior Full Stack Developer with over a decade of experience crafting robust, user-friendly web applications for clients ranging from startups to local businesses.
                </p>
                <p>
                  My expertise spans modern JavaScript frameworks like React and Vue.js, along with powerful backends in Laravel (PHP), Node.js, and Ruby on Rails. I have built real-time SaaS platforms like VenuePilot and community-focused marketplaces like FarmStand Connect.
                </p>
                <p>
                  Beyond tech, I am passionate about supporting my local economy, having developed custom websites for Glasgow dentists, landscapers, and farms. I believe great software solves real problems, whether for a global audience or a neighbor down the street.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="hover-elevate">React</Badge>
              <Badge variant="secondary" className="hover-elevate">Vue.js</Badge>
              <Badge variant="secondary" className="hover-elevate">Laravel</Badge>
              <Badge variant="secondary" className="hover-elevate">Node.js</Badge>
              <Badge variant="secondary" className="hover-elevate">Ruby on Rails</Badge>
              <Badge variant="secondary" className="hover-elevate">TypeScript</Badge>
              <Badge variant="secondary" className="hover-elevate">Docker & CI/CD</Badge>
            </div>

            <Button 
              onClick={handleDownloadResume}
              className="hover-elevate"
              data-testid="button-about-resume"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          {/* Stats and Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold font-display mb-6 text-center">
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {personalStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Values */}
            <div>
              <h3 className="text-xl font-semibold font-display mb-6">
                What Drives Me
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <Card className="p-4 h-full hover-elevate transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">{value.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {value.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
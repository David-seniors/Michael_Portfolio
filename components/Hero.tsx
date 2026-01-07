"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    // Replace with Michael's actual public resume URL when available
    window.open("https://drive.google.com/file/d/1mnB2cwaBFQOfQN1SVTfmxj1fg-WQogB0", '_blank');
  };

  const handleSocialClick = (platform: string) => {
    const links = {
      github: "https://github.com/michael0725-senior",
      email: "mailto:Mkirk9215@gmail.com"
    };
    
    if (links[platform as keyof typeof links]) {
      window.open(links[platform as keyof typeof links], '_blank');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold font-display mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                Michael Kirk
              </span>
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl text-muted-foreground mb-8 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.span
                key="typing"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 0.6, duration: 2 }}
                className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-primary"
              >
                Senior Full Stack Developer | React • Vue • Laravel • Ruby on Rails Expert
              </motion.span>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Senior Full Stack Developer with 10+ years of experience building scalable web applications using React, Vue.js, Laravel, Node.js, and Ruby on Rails-serving startups, rural clinics, and local Kentucky businesses.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="hover-elevate"
                data-testid="button-view-projects"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadResume}
                className="hover-elevate"
                data-testid="button-download-resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center lg:justify-start mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {[
                { icon: Github, label: "GitHub", platform: "github" },
                { icon: Mail, label: "Email", platform: "email" },
              ].map(({ icon: Icon, label, platform }) => (
                <Button
                  key={platform}
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSocialClick(platform)}
                  className="hover-elevate text-muted-foreground hover:text-primary"
                  data-testid={`link-${platform}`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* Avatar */}
          
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary hover-elevate"
            data-testid="button-scroll-down"
          >
            <span className="text-sm">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
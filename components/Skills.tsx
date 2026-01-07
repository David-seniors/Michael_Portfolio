"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Cloud, Palette, Users } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  id: string;
  label: string;
  icon: any;
  skills: Skill[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories: SkillCategory[] = [
    {
      id: "frontend",
      label: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React", level: 95, category: "frontend" },
        { name: "Vue.js", level: 92, category: "frontend" },
        { name: "TypeScript", level: 90, category: "frontend" },
        { name: "JavaScript (ES6+)", level: 95, category: "frontend" },
        { name: "HTML5 / CSS3", level: 93, category: "frontend" },
        { name: "Tailwind CSS", level: 88, category: "frontend" },
        { name: "Vite", level: 85, category: "frontend" },
        { name: "Webpack", level: 85, category: "frontend" },
      ],
    },
    {
      id: "backend",
      label: "Backend & APIs",
      icon: Server,
      skills: [
        { name: "Laravel (PHP)", level: 95, category: "backend" },
        { name: "Node.js / Express", level: 92, category: "backend" },
        { name: "Ruby on Rails", level: 88, category: "backend" },
        { name: "RESTful APIs", level: 95, category: "backend" },
        { name: "Authentication & Auth", level: 90, category: "backend" },
        { name: "Stripe Payments", level: 85, category: "backend" },
        { name: "Twilio SMS", level: 85, category: "backend" },
      ],
    },
    {
      id: "database",
      label: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 93, category: "database" },
        { name: "PostgreSQL", level: 90, category: "database" },
        { name: "SQLite", level: 85, category: "database" },
        { name: "MongoDB", level: 80, category: "database" },
        { name: "Redis (Caching)", level: 88, category: "database" },
        { name: "Eloquent ORM", level: 92, category: "database" },
        { name: "ActiveRecord", level: 85, category: "database" },
      ],
    },
    {
      id: "devops",
      label: "DevOps & Deployment",
      icon: Cloud,
      skills: [
        { name: "Git", level: 95, category: "devops" },
        { name: "Docker", level: 90, category: "devops" },
        { name: "GitHub Actions", level: 88, category: "devops" },
        { name: "CI/CD Pipelines", level: 88, category: "devops" },
        { name: "Vercel", level: 92, category: "devops" },
        { name: "Render", level: 90, category: "devops" },
        { name: "Heroku", level: 85, category: "devops" },
        { name: "AWS (RDS, S3)", level: 85, category: "devops" },
      ],
    },
    {
      id: "testing",
      label: "Testing & QA",
      icon: Palette,
      skills: [
        { name: "Jest", level: 88, category: "testing" },
        { name: "Cypress", level: 85, category: "testing" },
        { name: "PHPUnit", level: 90, category: "testing" },
        { name: "Pest PHP", level: 88, category: "testing" },
        { name: "TDD Practices", level: 85, category: "testing" },
      ],
    },
  ];

  const allSkills = skillCategories.flatMap(category => category.skills);
  
  const filteredSkills = activeCategory === "all" 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <section id="skills" className="py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack expertise in modern JavaScript frameworks, PHP/Laravel, and Ruby on Rails—built through 10+ years of shipping real-world applications.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => handleCategoryChange("all")}
            className="hover-elevate"
            data-testid="filter-all"
          >
            <Palette className="mr-2 h-4 w-4" />
            All Skills
          </Button>
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
                className="hover-elevate"
                data-testid={`filter-${category.id}`}
              >
                <Icon className="mr-2 h-4 w-4" />
                {category.label}
              </Button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.category}-${skill.name}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="hover-elevate transition-all duration-300 group-hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}%
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      data-testid={`progress-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Proficiency</span>
                      <span className="font-medium">{skill.level}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center font-display">
                <Users className="inline-block mr-2 h-5 w-5" />
                Real-World Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">10+ Years</div>
                  <div className="text-sm text-muted-foreground">Full-Stack Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">50+ Apps</div>
                  <div className="text-sm text-muted-foreground">Built & Shipped</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">90%</div>
                  <div className="text-sm text-muted-foreground">Fewer Double-Bookings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">35%</div>
                  <div className="text-sm text-muted-foreground">Fewer No-Shows</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  projectLinks?: { name: string; url: string }[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: "1",
      company: "Bluegrass Digital Labs",
      position: "Senior Full Stack Developer",
      location: "Bowling Green, KY",
      startDate: "Jan 2022",
      endDate: "Present",
      description: [
        "Architected and delivered VenuePilot, a real-time venue booking platform serving 150+ Southeast venues. Eliminated double-bookings by 90% using Redis-powered availability sync.",
        "Built FarmStand Connect, a B2B farm-to-restaurant marketplace that drove a 25% increase in direct farm revenue during its pilot year.",
        "Modernized Bluegrass Catering Co. website using React + Laravel SPA, reducing page load time by 45% and increasing online conversions by 30%.",
        "Containerized applications with Docker and deployed on AWS with full CI/CD pipelines using GitHub Actions."
      ],
      technologies: ["React", "Laravel", "PHP", "Redis", "Docker", "AWS", "GitHub Actions", "TypeScript", "MySQL", "Vercel", "Render"],
      projectLinks: [
        { name: "VenuePilot", url: "https://www.venuepilot.com/" },
        { name: "FarmStand Connect", url: "https://farm-connect-da7ba9f0.base44.app/" },
        { name: "Bluegrass Catering", url: "https://www.catering-bluegrass.com/cartoonica/" }
      ]
    },
    {
      id: "2",
      company: "Cumberland Web Solutions",
      position: "Full Stack Developer",
      location: "Glasgow, KY",
      startDate: "Jan 2019",
      endDate: "Dec 2021",
      description: [
        "Developed ClinicFlow, a HIPAA-aligned patient intake and scheduling system adopted by 12 rural clinics in Southern KY. Reduced no-shows by 35% with SMS reminders and secure form handling.",
        "Built Glasgow Auto Repair Portal, enabling online service booking and maintenance history tracking. Reduced phone inquiries by 60% and improved technician scheduling efficiency."
      ],
      technologies: ["Vue.js", "Laravel", "PHP", "MySQL", "Redis", "Twilio", "Nginx", "Vercel", "Tailwind CSS"],
      projectLinks: [
        { name: "ClinicFlow", url: "https://clinicflowai.com/" },
        { name: "Glasgow Garage Portal", url: "https://www.glasgowgarage.com/" }
      ]
    },
    {
      id: "3",
      company: "Southern Rails Collective",
      position: "Software Engineer",
      location: "Nashville, TN",
      startDate: "Jan 2016",
      endDate: "Dec 2018",
      description: [
        "Launched TalentHub, a freelance talent marketplace connecting 5,000+ creatives with clients across KY and TN. Implemented portfolios, reviews, messaging, and Stripe payments.",
        "Built Nashville Music Lessons instructor booking platform with video demos, calendar sync, and automated reminders. Maintained 99.8% uptime over 2 years."
      ],
      technologies: ["Ruby on Rails", "JavaScript", "PostgreSQL", "Stripe", "Sidekiq", "Redis", "Heroku", "jQuery", "Bootstrap"],
      projectLinks: [
        { name: "TalentHub", url: "https://www.talenthub.eu/" },
        { name: "Musicologie", url: "https://musicologie.com/" }
      ]
    },
    {
      id: "4",
      company: "Barren County Tech Group",
      position: "Junior Web Developer",
      location: "Glasgow, KY",
      startDate: "Jan 2014",
      endDate: "Dec 2015",
      description: [
        "Developed over 10 responsive websites for local Glasgow businesses including dentists, landscapers, and farms.",
        "Handled full-stack delivery: domain setup, contact forms, photo galleries, and basic SEO optimization.",
        "Built Byron McKenzie Law website with clean UI and mobile-first design."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "WordPress", "Bootstrap", "SEO"],
      projectLinks: [
        { name: "Byron McKenzie Law", url: "https://www.byronmckenzie.com/" }
      ]
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 10 years of experience building full-stack web applications for SaaS platforms, local businesses, and community-focused digital solutions across Kentucky and Tennessee.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-2 border-background" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-12 md:ml-0`}>
                  <Card className="hover-elevate transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div className="flex items-center gap-3">
                          <Building2 className="h-5 w-5 text-primary" />
                          <h3 className="text-xl font-semibold font-display text-foreground">
                            {experience.company}
                          </h3>
                        </div>
                        <Badge variant="secondary" className="w-fit">
                          {experience.startDate} – {experience.endDate}
                        </Badge>
                      </div>
                      
                      <h4 className="text-lg font-medium text-primary mb-2">
                        {experience.position}
                      </h4>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs hover-elevate"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Project Links */}
                      {experience.projectLinks && experience.projectLinks.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {experience.projectLinks.map((link, idx) => (
                            <Link
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                            >
                              <ExternalLink className="h-3 w-3" />
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-2/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
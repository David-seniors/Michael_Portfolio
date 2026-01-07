"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Play, Eye, Calendar, Download } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  category: string;
  image: string;
  liveUrl: string;
  features: string[];
  stats: {
    downloads?: string;
    rating?: string;
  };
  completedDate: string;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "VenuePilot",
      description: "Real-time venue booking platform for independent music venues across the Southeast.",
      fullDescription: "Architected and delivered a SaaS platform serving 150+ venues, eliminating double-bookings by 90% through Redis-powered real-time availability sync. Built with React, Laravel, and AWS, with Dockerized deployments and full CI/CD via GitHub Actions.",
      technologies: ["React", "Laravel", "PHP", "Redis", "Docker", "AWS", "GitHub Actions", "MySQL"],
      category: "saas",
      image: "/assets/venuepilot_1.jpg",
      liveUrl: "https://www.venuepilot.com/",
      features: [
        "Real-time availability synchronization",
        "Custom venue websites with embedded booking",
        "Artist performance analytics",
        "Flexible ticketing with custom fees"
      ],
      stats: { downloads: "150+ Venues", rating: "90% Fewer Double-Bookings" },
      completedDate: "2022–Present"
    },
    {
      id: "2",
      title: "FarmStand Connect",
      description: "B2B farm-to-restaurant marketplace enabling direct sales and live inventory tracking.",
      fullDescription: "Built a full-stack marketplace connecting local farms with restaurants, featuring live inventory dashboards, order management, and payment processing. Drove a 25% increase in direct farm revenue during its pilot year.",
      technologies: ["Vue.js", "Laravel", "PHP", "MySQL", "Tailwind CSS", "Vercel", "Render"],
      category: "marketplace",
      image: "/assets/Farm_1.jpg",
      liveUrl: "https://farm-connect-da7ba9f0.base44.app/",
      features: [
        "Live farm inventory dashboard",
        "Restaurant ordering & history",
        "Vendor performance analytics",
        "Mobile-responsive UI"
      ],
      stats: { downloads: "Pilot Farms & Restaurants", rating: "25% Revenue Increase" },
      completedDate: "2022–2023"
    },
    {
      id: "3",
      title: "Bluegrass Catering Co.",
      description: "Modernized catering website with dynamic menu builder and instant quoting.",
      fullDescription: "Replaced a legacy PHP site with a React + Laravel SPA featuring a dynamic menu builder, instant quote calculator, and streamlined checkout. Reduced page load time by 45% and increased online conversions by 30%.",
      technologies: ["React", "Laravel", "PHP", "Tailwind CSS", "Vercel"],
      category: "website",
      image: "/assets/catering_1.jpg",
      liveUrl: "https://www.catering-bluegrass.com/cartoonica/",
      features: [
        "Interactive menu builder",
        "Real-time quote calculator",
        "Online booking & payment",
        "Mobile-first responsive design"
      ],
      stats: { downloads: "Online Users", rating: "30% More Conversions" },
      completedDate: "2022"
    },
    {
      id: "4",
      title: "ClinicFlow",
      description: "HIPAA-aligned scheduling and patient intake system for rural clinics.",
      fullDescription: "Developed a secure patient management system adopted by 12 rural clinics in Southern Kentucky. Integrated SMS reminders via Twilio and secure form handling, reducing patient no-shows by 35%.",
      technologies: ["Vue.js", "Laravel", "PHP", "MySQL", "Twilio", "Redis", "Nginx", "Vercel"],
      category: "healthcare",
      image: "/assets/clinic_1.jpg",
      liveUrl: "https://clinicflowai.com/",
      features: [
        "HIPAA-compliant patient intake forms",
        "Automated SMS appointment reminders",
        "Clinic staff dashboard",
        "Secure appointment management"
      ],
      stats: { downloads: "12 Rural Clinics", rating: "35% Fewer No-Shows" },
      completedDate: "2019–2021"
    },
    {
      id: "5",
      title: "Glasgow Garage Portal",
      description: "Online service booking and maintenance history tracker for local auto shop.",
      fullDescription: "Built a custom portal enabling customers to book services online and track vehicle maintenance history. Reduced phone inquiries by 60% and improved technician scheduling efficiency.",
      technologies: ["Vue.js", "Laravel", "PHP", "MySQL", "Bootstrap", "Render"],
      category: "website",
      image: "/assets/glasgow_1.jpg",
      liveUrl: "https://www.glasgowgarage.com/",
      features: [
        "Online service booking",
        "Vehicle maintenance history",
        "Technician scheduling",
        "Admin management dashboard"
      ],
      stats: { downloads: "Local Customers", rating: "60% Fewer Phone Calls" },
      completedDate: "2020"
    },
    {
      id: "6",
      title: "TalentHub",
      description: "Freelance talent marketplace connecting 5,000+ creatives with clients across KY and TN.",
      fullDescription: "Launched a full-featured marketplace with portfolios, reviews, messaging, and Stripe payments. The platform enabled seamless collaboration between freelancers and businesses in the creative sector.",
      technologies: ["Ruby on Rails", "PostgreSQL", "Stripe", "Sidekiq", "Redis", "Heroku", "jQuery"],
      category: "marketplace",
      image: "/assets/talent_1.jpg",
      liveUrl: "https://www.talenthub.eu/",
      features: [
        "Freelancer portfolios & reviews",
        "Secure messaging system",
        "Stripe payment integration",
        "Job posting & application flow"
      ],
      stats: { downloads: "5,000+ Users", rating: "High Engagement Rate" },
      completedDate: "2016–2018"
    },
    {
      id: "7",
      title: "Musicologie Lessons",
      description: "Instructor booking platform with video demos and automated reminders.",
      fullDescription: "Built a scheduling site for music lessons featuring instructor video demos, calendar sync, and automated email/SMS reminders. Maintained 99.8% uptime over 2 years of operation.",
      technologies: ["Ruby on Rails", "PostgreSQL", "Sidekiq", "Heroku", "Bootstrap"],
      category: "website",
      image: "/assets/music_1.jpg",
      liveUrl: "https://musicologie.com/",
      features: [
        "Instructor video demos",
        "Calendar-based booking",
        "Automated reminders",
        "Lesson history tracking"
      ],
      stats: { downloads: "Students & Parents", rating: "99.8% Uptime" },
      completedDate: "2017"
    },
    {
      id: "8",
      title: "Byron McKenzie Law",
      description: "Professional law firm website with clean UI and mobile-first design.",
      fullDescription: "Developed a responsive website for a local Glasgow attorney, featuring practice area details, contact forms, and mobile-optimized navigation—part of a suite of 10+ local business sites built between 2014–2015.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "WordPress", "Bootstrap"],
      category: "website",
      image: "/assets/byronm_1.jpg",
      liveUrl: "https://www.byronmckenzie.com/",
      features: [
        "Mobile-first responsive design",
        "Practice area showcase",
        "Contact form with validation",
        "Local SEO optimization"
      ],
      stats: { downloads: "Local Clients", rating: "High Conversion Rate" },
      completedDate: "2015"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "saas", label: "SaaS Platforms" },
    { id: "marketplace", label: "Marketplaces" },
    { id: "healthcare", label: "Healthcare Tech" },
    { id: "website", label: "Websites & Portals" },
  ];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleProjectAction = (action: string, project: Project) => {
    if (action === "view-details") {
      setSelectedProject(project);
    } else if (action === "live-site" && project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications I've built for startups, rural clinics, and local Kentucky businesses.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className="hover-elevate"
              data-testid={`filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover-elevate transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleProjectAction("live-site", project)}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Visit Site
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.completedDate}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    {project.stats.downloads && (
                      <div className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {project.stats.downloads}
                      </div>
                    )}
                    {project.stats.rating && (
                      <div className="flex items-center gap-1">
                        ⭐ {project.stats.rating}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => handleProjectAction("view-details", project)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-display">
                            {project.title}
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-64 object-cover rounded-lg mb-4"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop";
                              }}
                            />
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">{tech}</Badge>
                              ))}
                            </div>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              {project.stats.downloads && (
                                <div className="flex items-center gap-1">
                                  <Download className="h-4 w-4" />
                                  {project.stats.downloads}
                                </div>
                              )}
                              {project.stats.rating && (
                                <div className="flex items-center gap-1">
                                  ⭐ {project.stats.rating}
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold mb-2">About</h3>
                            <p className="text-muted-foreground mb-4">
                              {project.fullDescription}
                            </p>
                            
                            <h3 className="font-semibold mb-2">Key Features</h3>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="w-1 h-1 bg-primary rounded-full mt-2" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex gap-4 pt-4 border-t">
                          <Button onClick={() => handleProjectAction("live-site", project)}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Live Site
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
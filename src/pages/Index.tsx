import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Linkedin,
  Database,
  Users,
  Zap,
  Target,
  BarChart3,
  Settings,
  Globe,
  Rocket,
  Shield,
  TrendingUp,
  Layers,
  Clock,
} from "lucide-react";
import logoBlack from "@/assets/logo_black.png";
import logoWhite from "@/assets/logo_white.png";
import HeroBackground from "@/components/HeroBackground";
import TrustedClients from "@/components/TrustedClients";
import ComparisonSection from "@/components/ComparisonSection";
import GTMFlowchart from "@/components/GTMFlowchart";
import TechStack from "@/components/TechStack";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const textReveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const Index = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: Globe,
      title: "Outbound Engine",
      subtitle: "Automated prospecting at scale",
      desc: "Multi-channel sequences across email, LinkedIn, and calls. AI-powered personalization that converts. Intent-based targeting to reach buyers when they're ready.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Database,
      title: "Data Infrastructure",
      subtitle: "Your CRM as a growth asset",
      desc: "100+ enrichment providers integrated. Real-time lead scoring and routing. Clean, accurate data that sales teams actually trust.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Users,
      title: "Inbound Automation",
      subtitle: "Never miss a hot lead",
      desc: "Intelligent lead routing and qualification. Lifecycle nurture flows that work 24/7. Speed-to-lead optimization that converts.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: TrendingUp,
      title: "Revenue Operations",
      subtitle: "End-to-end visibility",
      desc: "Pipeline dashboards that tell the truth. Attribution and forecasting. Unified data across marketing, sales, and CS.",
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home">
            <img src={logoBlack} alt="GTMfirst" className="h-10 md:h-12" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("services")} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection("process")} className="nav-link">
              Process
            </button>
            <button onClick={() => scrollToSection("features")} className="nav-link">
              Features
            </button>
            <button onClick={() => scrollToSection("why-us")} className="nav-link">
              Why Us
            </button>
          </nav>
          <a href="https://calendly.com/ahmed-tkrupt/30min" className="btn-primary text-sm">
            Book a Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative" id="home">
        <HeroBackground />
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-badge mb-8 animate-border-flow"
          >
            <span className="text-xs tracking-wider uppercase">For B2B Companies Ready to Scale</span>
          </motion.div>

          <div className="overflow-visible mb-8">
            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-display leading-[1.15] tracking-tight">
              <motion.span
                initial={textReveal.hidden}
                animate={textReveal.visible}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block pb-1"
              >
                Build a Predictable
              </motion.span>
              <br />
              <motion.span
                initial={textReveal.hidden}
                animate={textReveal.visible}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="gradient-text inline-block pb-2"
              >
                Go-To-Market Engine
              </motion.span>
              <br />
              <motion.span
                initial={textReveal.hidden}
                animate={textReveal.visible}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-muted-foreground font-semibold inline-block pb-1"
              >
                Not Just Campaigns
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            GTMfirst designs and implements end-to-end GTM systems that turn your ICP into qualified pipeline using
            data, automation, and proven execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://calendly.com/ahmed-tkrupt/30min" className="btn-primary text-base">
              Book a GTM Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
            <button onClick={() => scrollToSection("process")} className="btn-secondary text-base">
              See How It Works
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trusted Clients */}
      <TrustedClients />

      {/* Services Section - Two Column Sticky Layout */}
      <section id="services" className="py-24 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column - Sticky on desktop */}
            <div className="lg:w-[45%] lg:flex-shrink-0">
              <div className="lg:sticky lg:top-[100px] lg:h-fit">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                >
                  <div className="section-badge mb-6 animate-border-flow">
                    <span className="text-xs tracking-wider uppercase">The Foundation</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight">
                    Your GTM system,
                    <br />
                    <span className="text-muted-foreground">built and managed</span>
                  </h2>
                  <p className="text-xl text-muted-foreground mb-4">
                    So you can focus on closing deals, not managing tools.
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    We don't just consult we implement. From strategy to execution, we build the entire GTM
                    infrastructure your team needs to scale predictably. Every system we create is designed for
                    long-term growth, not quick fixes.
                  </p>
                  <a href="https://calendly.com/ahmed-tkrupt/30min" className="btn-primary text-base">
                    Request a Call <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Scrolling timeline */}
            <div className="lg:w-[55%]">
              <div className="space-y-6">
                {[
                  {
                    title: "ICP Definition & TAM Mapping",
                    desc: "We identify your Ideal Customer Profile with precision, map your Total Addressable Market, and segment high-value accounts for targeted outreach.",
                    icon: Target,
                  },
                  {
                    title: "Data Infrastructure & CRM Setup",
                    desc: "Build a clean, enriched database with 100+ data providers. Structure your CRM so every rep has accurate, actionable insights.",
                    icon: Database,
                  },
                  {
                    title: "Outbound Engine Development",
                    desc: "Multi-channel sequences across email, LinkedIn, and calls. AI-powered personalization at scale that books qualified meetings.",
                    icon: Rocket,
                  },
                  {
                    title: "Inbound-Led Outbound Systems",
                    desc: "When prospects engage with content or visit your site, we trigger automated outbound sequences to convert intent into conversations.",
                    icon: Zap,
                  },
                  {
                    title: "Lifecycle & Nurture Automation",
                    desc: "No lead falls through the cracks. Automated nurture flows, re-engagement campaigns, and handoff sequences capture every opportunity.",
                    icon: Clock,
                  },
                  {
                    title: "Revenue Dashboards & Playbooks",
                    desc: "Full visibility into pipeline metrics, attribution, and forecasting. Plus team playbooks so your gains compound over time.",
                    icon: BarChart3,
                  },
                ].map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline connector */}
                    {idx < 5 && (
                      <div className="absolute left-6 top-[72px] w-px h-[calc(100%+24px-72px)] bg-gradient-to-b from-primary/30 to-transparent" />
                    )}
                    <div className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 group cursor-pointer relative">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform relative z-10">
                          <service.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold font-display text-lg mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GTM Flowchart - How We Work */}
      <GTMFlowchart />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Simple, yet powerful
              <br />
              <span className="gradient-text">features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build a predictable revenue engine
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-display mb-2">{feature.title}</h3>
                  <p className="text-primary font-medium mb-4">{feature.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why GTMfirst Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="section-badge mb-6 animate-border-flow">
              <span className="text-xs tracking-wider uppercase">What Sets Us Apart</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Built for <span className="gradient-text italic">results</span>,<br />
              not just deliverables
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not a typical agency. We embed with your team, own outcomes, and build systems that compound over
              time.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "Dedicated GTM Engineers",
                desc: "No junior account managers. Senior engineers work directly on your systems, investing real time into your success.",
                highlight: "Senior-only team",
              },
              {
                icon: Rocket,
                title: "Execution, Not Just Strategy",
                desc: "We don't hand you a strategy deck and walk away. We build, launch, and optimize until the numbers move.",
                highlight: "Full implementation",
              },
              {
                icon: TrendingUp,
                title: "Revenue-Aligned Partnership",
                desc: "We measure success by pipeline and revenue, not activity metrics. If you don't grow, we haven't done our job.",
                highlight: "Outcome-focused",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {card.highlight}
                  </span>
                </div>
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <card.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Why Us Section */}
      <section id="why-us" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Why <span className="gradient-text">GTMfirst</span>
            </h2>
            <p className="text-lg text-muted-foreground">We build GTM like an operating system not a growth hack.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Target,
                title: "System-First Approach",
                desc: "Not tactics. We build repeatable, scalable systems.",
              },
              {
                icon: Zap,
                title: "Automation + Execution",
                desc: "One partner for strategy, build, and optimization.",
              },
              {
                icon: BarChart3,
                title: "Revenue-Aligned",
                desc: "We measure pipeline and revenue, not vanity metrics.",
              },
              { icon: Settings, title: "You Own Everything", desc: "Every workflow, every tool — it's yours to keep." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="card-elevated p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold font-display text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <section id="cta" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="card-elevated p-12 bg-gradient-to-br from-card to-secondary"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Ready to Fix Your <span className="gradient-text">Go-To-Market?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If your GTM feels fragmented, manual, or unpredictable let's fix it.
            </p>
            <a href="https://calendly.com/ahmed-tkrupt/30min" className="btn-primary text-lg">
              Book a GTM Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-muted-foreground mt-4">No obligation. Clear next steps. Real insights.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="#home">
                <img src={logoWhite} alt="GTMfirst" className="h-12 mb-6" />
              </a>
              <p className="text-background/70 max-w-sm mb-6">
                Empowering B2B companies with advanced Go-To-Market systems to improve pipeline generation and revenue
                outcomes.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/tkrupt/"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-background/90">Site Map</h4>
              <ul className="space-y-3 text-background/70">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-background transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("process")}
                    className="hover:text-background transition-colors"
                  >
                    Process
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-background transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("why-us")} className="hover:text-background transition-colors">
                    Why Us
                  </button>
                </li>
                <li>
                  <a href="#cta" className="hover:text-background transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-background/90">Legal</h4>
              <ul className="space-y-3 text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Terms of Services
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">© {new Date().getFullYear()} GTMfirst. All rights reserved.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-4 py-2 rounded-full border border-background/20 text-sm text-background/70 hover:bg-background/10 transition-colors"
            >
              ↑ Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Import logo images
import emailbisonLogo from "@/assets/techstack/emailbison.png";
import gmailLogo from "@/assets/techstack/gmail.png";
import heyreachLogo from "@/assets/techstack/heyreach.png";
import hubspotLogo from "@/assets/techstack/hubspot.png";
import instantlyLogo from "@/assets/techstack/instantly.png";
import linkedinLogo from "@/assets/techstack/linkedin.png";
import makeLogo from "@/assets/techstack/make.png";
import prospeoLogo from "@/assets/techstack/prospeo.png";
import zapmailLogo from "@/assets/techstack/zapmail.png";
import attioLogo from "@/assets/techstack/attio.png";
import clayLogo from "@/assets/techstack/clay.png";
import salesforceLogo from "@/assets/techstack/salesforce.png";
import saleshandyLogo from "@/assets/techstack/saleshandy.png";

const TechStack = () => {
  const techCategories = [
    {
      title: "Outreach",
      tools: [
        { name: "LinkedIn", logo: linkedinLogo, flips: true },
        { name: "Gmail", logo: gmailLogo, flips: false },
      ],
    },
    {
      title: "Prospecting",
      tools: [
        { name: "Make", logo: makeLogo, flips: true },
        { name: "Prospeo", logo: prospeoLogo, flips: false },
        { name: "Clay", logo: clayLogo, flips: true },
      ],
    },
    {
      title: "Sequencing",
      tools: [
        { name: "Saleshandy", logo: saleshandyLogo, flips: false },
        { name: "HeyReach", logo: heyreachLogo, flips: true },
        { name: "Instantly", logo: instantlyLogo, flips: false },
      ],
    },
    {
      title: "CRM & Data",
      tools: [
        { name: "HubSpot", logo: hubspotLogo, flips: true },
        { name: "Salesforce", logo: salesforceLogo, flips: false },
        { name: "Attio", logo: attioLogo, flips: true },
      ],
    },
    {
      title: "Automation",
      tools: [
        { name: "EmailBison", logo: emailbisonLogo, flips: false },
        { name: "Zapmail", logo: zapmailLogo, flips: true },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-6 animate-border-flow">
            <span className="text-xs tracking-wider uppercase">Our Arsenal</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Tech Stack We <span className="gradient-text">Master</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Best-in-class tools, expertly integrated into your GTM engine
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-10"
        >
          {techCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider text-center">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.tools.map((tool, toolIdx) => (
                  <FlipCard 
                    key={toolIdx} 
                    name={tool.name}
                    logo={tool.logo}
                    shouldFlip={tool.flips} 
                    delay={catIdx * 0.1 + toolIdx * 0.05}
                    flipDelay={6000 + catIdx * 2000 + toolIdx * 1200}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FlipCard = ({ 
  name, 
  logo,
  shouldFlip, 
  delay,
  flipDelay 
}: { 
  name: string; 
  logo: string;
  shouldFlip: boolean; 
  delay: number;
  flipDelay: number;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (!shouldFlip) return;
    
    const flipInterval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, flipDelay);
    
    // Initial delayed flip
    const initialTimeout = setTimeout(() => {
      setIsFlipped(true);
    }, flipDelay / 2);

    return () => {
      clearInterval(flipInterval);
      clearTimeout(initialTimeout);
    };
  }, [shouldFlip, flipDelay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group perspective-1000"
      onMouseEnter={() => shouldFlip && setIsFlipped(true)}
      onMouseLeave={() => shouldFlip && setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-20 transform-style-3d flip-transition ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-card rounded-xl flex items-center justify-center p-4">
          <img 
            src={logo} 
            alt={name} 
            className="max-h-12 max-w-full object-contain"
          />
        </div>
        {/* Back - Same logo for pure animation effect */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card rounded-xl flex items-center justify-center p-4">
          <img 
            src={logo} 
            alt={name} 
            className="max-h-12 max-w-full object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;

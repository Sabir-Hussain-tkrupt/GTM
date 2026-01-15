import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Mail, Target, Users, Zap, BarChart3, Globe, Layers, Database, Calendar, CheckCircle, TrendingUp, Eye, Sparkles, Send, Filter, UserCheck, Phone } from "lucide-react";

// Import tool logos
import linkedinLogo from "@/assets/techstack/linkedin.png";
import hubspotLogo from "@/assets/techstack/hubspot.png";
import salesforceLogo from "@/assets/techstack/salesforce.png";
import instantlyLogo from "@/assets/techstack/instantly.png";
import clayLogo from "@/assets/techstack/clay.png";
import heyreachLogo from "@/assets/techstack/heyreach.png";
import prospeoLogo from "@/assets/techstack/prospeo.png";
import gmailLogo from "@/assets/techstack/gmail.png";
import makeLogo from "@/assets/techstack/make.png";
import attioLogo from "@/assets/techstack/attio.png";

const GTMFlowchart = () => {
  return (
    <section id="process" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="section-badge mb-6 animate-border-flow">
            <span className="text-xs tracking-wider uppercase">The Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our integrated approach combines strategic outbound with inbound-led signals for maximum impact
          </p>
        </motion.div>

        {/* Two Flow Diagrams Side by Side */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Outbound Flow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-12">
              <h3 className="text-3xl font-bold font-display mb-4">Outbound</h3>
              <p className="text-muted-foreground text-lg">
                We run personalized prospecting campaigns that flood your calendar with qualified leads.
              </p>
            </div>

            {/* Platform Logos Row */}
            <div className="flex flex-wrap gap-10 mb-10 justify-center">
              {[linkedinLogo, hubspotLogo, clayLogo, instantlyLogo].map((logo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                >
                  <img src={logo} alt="" className="w-16 h-16 object-contain" />
                </motion.div>
              ))}
            </div>

            {/* Flow Steps */}
            <div className="flex flex-col items-center gap-6">
              {/* Step 1 */}
              <FlowStep 
                icon={Target} 
                label="Play & Signals Selection" 
                logos={[linkedinLogo, hubspotLogo]}
                delay={0.3}
              />
              <FlowConnector />

              {/* Step 2 */}
              <FlowStep 
                icon={Database} 
                label="Company & Contact Sourcing" 
                logos={[clayLogo, prospeoLogo, linkedinLogo]}
                delay={0.4}
              />
              <FlowConnector />

              {/* Step 3 */}
              <FlowStep 
                icon={Layers} 
                label="Lead Scoring & Tiering" 
                logos={[hubspotLogo, attioLogo]}
                delay={0.5}
              />

              {/* Tier Split with Curved Connectors */}
              <div className="relative w-full py-8">
                <svg className="absolute left-1/2 -translate-x-1/2 top-0" width="300" height="60" viewBox="0 0 300 60">
                  <path d="M150 0 L150 20 Q150 30 80 45 L50 55" stroke="hsl(var(--border))" fill="none" strokeWidth="2" strokeLinecap="round" />
                  <path d="M150 0 L150 20 Q150 30 150 45 L150 55" stroke="hsl(var(--border))" fill="none" strokeWidth="2" strokeLinecap="round" />
                  <path d="M150 0 L150 20 Q150 30 220 45 L250 55" stroke="hsl(var(--border))" fill="none" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div className="flex gap-6 justify-center flex-wrap">
                {[
                  { tier: "Tier 1", label: "High-Intent", color: "from-emerald-500 to-teal-600" },
                  { tier: "Tier 2", label: "Signal-Based", color: "from-purple-500 to-pink-600" },
                  { tier: "Tier 3", label: "Personalized", color: "from-orange-500 to-red-500" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className={`bg-gradient-to-r ${item.color} text-white text-base font-bold px-6 py-3 rounded-full mb-2 shadow-lg`}>
                      {item.tier}
                    </div>
                    <span className="text-base text-muted-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Merge Connectors */}
              <div className="relative w-full py-8">
                <svg className="absolute left-1/2 -translate-x-1/2 top-0" width="300" height="60" viewBox="0 0 300 60">
                  <path d="M50 5 L80 15 Q150 30 150 45 L150 55" stroke="hsl(var(--border))" fill="none" strokeWidth="2" strokeLinecap="round" />
                  <path d="M150 5 L150 55" stroke="hsl(var(--border))" fill="none" strokeWidth="2" strokeLinecap="round" />
                  <path d="M250 5 L220 15 Q150 30 150 45 L150 55" stroke="hsl(var(--border))" fill="none" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* Channel Output - Just Logos */}
              <div className="flex gap-8 justify-center flex-wrap">
                {[gmailLogo, linkedinLogo, instantlyLogo, heyreachLogo].map((logo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                  >
                    <img src={logo} alt="" className="w-14 h-14 object-contain" />
                  </motion.div>
                ))}
              </div>

              <FlowConnector />

              {/* Meeting & Pipeline */}
              <FlowStep 
                icon={Calendar} 
                label="Meeting Booked" 
                delay={0.9}
                highlight
                small
              />
              <FlowConnector />
              <FlowStep 
                icon={BarChart3} 
                label="Sales Process" 
                delay={1.0}
                small
              />
              <FlowConnector />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="px-5 py-2.5 rounded-full gradient-bg text-primary-foreground font-semibold text-sm shadow-xl flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                Closed Won
              </motion.div>
            </div>
          </motion.div>

          {/* Inbound-Led Outbound Flow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-12">
              <h3 className="text-3xl font-bold font-display mb-4">Inbound-Led Outbound</h3>
              <p className="text-muted-foreground text-lg">
                When someone engages with your content or platform, we approach them with strategic outbound.
              </p>
            </div>

            {/* Inbound Signals Flow */}
            <div className="flex flex-col items-center gap-6 mb-10">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-center mb-4"
              >
                <span className="text-base text-muted-foreground uppercase tracking-wider font-medium">Signal Sources</span>
              </motion.div>
              
              <div className="flex flex-wrap gap-10 justify-center">
                {[hubspotLogo, linkedinLogo, gmailLogo].map((logo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                  >
                    <img src={logo} alt="" className="w-16 h-16 object-contain" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Merge Connectors for signals */}
            <div className="relative w-full py-6">
              <svg className="absolute left-1/2 -translate-x-1/2 top-0" width="280" height="50" viewBox="0 0 280 50">
                <path d="M60 5 L90 15 Q140 30 140 45" stroke="hsl(var(--border))" fill="none" strokeWidth="2" strokeLinecap="round" />
                <path d="M140 5 L140 45" stroke="hsl(var(--border))" fill="none" strokeWidth="2" strokeLinecap="round" />
                <path d="M220 5 L190 15 Q140 30 140 45" stroke="hsl(var(--border))" fill="none" strokeWidth="2" strokeLinecap="round" />
                <circle cx="140" cy="45" r="4" fill="hsl(var(--primary))" />
              </svg>
            </div>

            {/* Processing */}
            <div className="flex flex-col items-center gap-6 mt-6">
              <FlowStep 
                icon={Filter} 
                label="Signal Qualification & Scoring" 
                logos={[clayLogo, hubspotLogo]}
                delay={0.5}
              />
              <FlowConnector />
              <FlowStep 
                icon={UserCheck} 
                label="Intent-Based Prioritization" 
                logos={[attioLogo, salesforceLogo]}
                delay={0.6}
              />
              <FlowConnector />
            </div>

            {/* Output Actions */}
            <div className="flex flex-col items-center gap-6 mt-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="text-center mb-4"
              >
                <span className="text-base text-muted-foreground uppercase tracking-wider font-medium">Outbound Execution</span>
              </motion.div>
              
              <div className="flex flex-wrap gap-8 justify-center">
                {[instantlyLogo, heyreachLogo, hubspotLogo].map((logo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                  >
                    <img src={logo} alt="" className="w-14 h-14 object-contain" />
                  </motion.div>
                ))}
              </div>

              <FlowConnector />

              {/* Meeting & Pipeline for Inbound-Led */}
              <FlowStep 
                icon={Calendar} 
                label="Meeting Booked" 
                delay={0.9}
                highlight
                small
              />
              <FlowConnector />
              <FlowStep 
                icon={BarChart3} 
                label="Sales Process" 
                delay={1.0}
                small
              />
              <FlowConnector />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="px-5 py-2.5 rounded-full gradient-bg text-primary-foreground font-semibold text-sm shadow-xl flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                Closed Won
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* GTM Flywheel - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 flex flex-col items-center"
        >
          <div className="relative w-80 h-80">
            {/* Outer ring with segments */}
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Content segment - Purple */}
              <path 
                d="M100 15 A85 85 0 0 1 185 100" 
                fill="none" 
                stroke="hsl(var(--primary))" 
                strokeWidth="26"
                strokeLinecap="round"
              />
              {/* Outbound segment - Green */}
              <path 
                d="M185 100 A85 85 0 0 1 100 185" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="26"
                strokeLinecap="round"
              />
              {/* ABM Ads segment - Teal */}
              <path 
                d="M100 185 A85 85 0 0 1 15 100" 
                fill="none" 
                stroke="#14b8a6" 
                strokeWidth="26"
                strokeLinecap="round"
              />
              {/* Inbound segment - Blue */}
              <path 
                d="M15 100 A85 85 0 0 1 100 15" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="26"
                strokeLinecap="round"
              />
              {/* Rotating arrows */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "100px 100px" }}
              >
                <polygon points="100,8 95,18 105,18" fill="hsl(var(--primary))" />
                <polygon points="192,100 182,95 182,105" fill="#10b981" />
                <polygon points="100,192 105,182 95,182" fill="#14b8a6" />
                <polygon points="8,100 18,105 18,95" fill="#3b82f6" />
              </motion.g>
            </svg>
            
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-card border-2 border-border rounded-full w-44 h-44 flex flex-col items-center justify-center text-center shadow-xl">
                <span className="text-lg font-bold font-display">GTM Flywheel</span>
                <span className="text-sm text-muted-foreground mt-1">Each closed deal</span>
                <span className="text-sm text-muted-foreground">fuels the next cycle</span>
              </div>
            </div>

            {/* Segment Labels */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-medium text-primary">Content</div>
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 text-sm font-medium text-emerald-500">Outbound</div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium text-teal-500">ABM Ads</div>
            <div className="absolute top-1/2 -left-20 -translate-y-1/2 text-sm font-medium text-blue-500">Inbound</div>
          </div>

          {/* Flywheel Descriptions */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <span className="font-medium">Content builds authority</span>
                <span className="text-muted-foreground"> that compounds over time.</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-start gap-4"
            >
              <div className="w-3 h-3 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
              <div>
                <span className="font-medium">Outbound generates</span>
                <span className="text-muted-foreground"> immediate pipeline.</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-start gap-4"
            >
              <div className="w-3 h-3 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
              <div>
                <span className="font-medium">ABM Ads warm up</span>
                <span className="text-muted-foreground"> cold prospects.</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-start gap-4"
            >
              <div className="w-3 h-3 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
              <div>
                <span className="font-medium">Inbound signals</span>
                <span className="text-muted-foreground"> prioritize outreach.</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
            <a
              href="https://calendly.com/ahmed-tkrupt/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full gradient-bg text-primary-foreground font-semibold flex items-center gap-2 shadow-xl text-base cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </a>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FlowStep = ({ 
  icon: Icon, 
  label, 
  logos,
  delay = 0,
  highlight = false,
  small = false
}: { 
  icon: React.ElementType; 
  label: string; 
  logos?: string[];
  delay?: number;
  highlight?: boolean;
  small?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="flex flex-col items-center"
  >
    <div className={`bg-card border ${highlight ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'} rounded-xl ${small ? 'px-4 py-2' : 'px-5 py-2.5'} flex items-center gap-2 hover:shadow-lg transition-shadow shadow-sm`}>
      <Icon className={`${small ? 'w-4 h-4' : 'w-5 h-5'} ${highlight ? 'text-primary' : 'text-primary'}`} />
      <span className={`${small ? 'text-sm' : 'text-base'} font-medium`}>{label}</span>
    </div>
    {logos && logos.length > 0 && (
      <div className="flex gap-6 mt-4">
        {logos.map((logo, idx) => (
          <img key={idx} src={logo} alt="" className="w-14 h-14 object-contain" />
        ))}
      </div>
    )}
  </motion.div>
);

const FlowConnector = ({ horizontal = false }: { horizontal?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className={horizontal ? "flex items-center" : "flex flex-col items-center"}
  >
    {horizontal ? (
      <>
        <div className="w-12 h-px bg-border" />
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </>
    ) : (
      <>
        <div className="w-px h-6 bg-border" />
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
        <div className="w-px h-4 bg-border" />
      </>
    )}
  </motion.div>
);

export default GTMFlowchart;
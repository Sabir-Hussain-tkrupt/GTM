import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const ComparisonSection = () => {
  const beforeTasks = [
    ["Audience Research", "Setup Domain", "Find Emails", "Select Tool Stack"],
    ["Craft Copywriting", "Configure Inboxes", "Clean Files", "Purchase Software"],
    ["Warm up Inboxes", "Verify Emails", "Automate Sending"],
  ];

  const afterTasks = ["Pitch", "Close Deal"];

  return (
    <section className="py-24 px-6 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Focus on What <span className="text-primary">Matters</span>
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            You handle the deals. We handle everything else.
          </p>
        </motion.div>

        {/* Before GTMfirst */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xl font-medium text-background/60">Before GTMfirst</span>
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-background/40">
              <path d="M10 20 Q20 10 30 25" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" />
              <path d="M28 20 L30 25 L25 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          {/* Task Grid - Before */}
          <div className="flex flex-wrap gap-4 items-center">
            {beforeTasks.map((column, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-3">
                {column.map((task, taskIdx) => (
                  <motion.div
                    key={taskIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (colIdx * 0.1) + (taskIdx * 0.05) }}
                    className="relative"
                  >
                    <div className="bg-background/5 border border-background/10 rounded-xl px-5 py-4 min-w-[180px] group hover:border-background/20 transition-all">
                      <span className="text-sm text-background/80">{task}</span>
                      <div className="absolute bottom-2 left-5 right-5">
                        <div className="h-px bg-background/20 mt-2" />
                      </div>
                    </div>
                    {/* Connector Arrow */}
                    {taskIdx < column.length - 1 && (
                      <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 z-10">
                        <div className="w-px h-3 bg-background/20" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ))}

            {/* Arrow to After Tasks */}
            <div className="flex items-center mx-4">
              <div className="h-px w-8 bg-background/20" />
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 text-background/40" />
              </motion.div>
            </div>

            {/* After Tasks - Stacked vertically */}
            <div className="flex flex-col gap-3">
              {afterTasks.map((task, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                  className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-xl px-6 py-4"
                >
                  <span className="text-sm font-medium text-background">{task}</span>
                  <div className="h-px bg-background/20 mt-3" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* With GTMfirst */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xl font-medium text-background/60">With</span>
            <span className="text-xl font-bold gradient-text">GTMfirst</span>
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-background/40">
              <path d="M10 20 Q20 30 30 15" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" />
              <path d="M28 20 L30 15 L25 16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          <div className="flex flex-wrap gap-4 items-center">
            {/* We Handle Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-[calc(180px*3+16px*2)] flex-shrink-0"
            >
              <div className="gradient-bg rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
                <div className="relative flex items-center gap-4">
                  <Check className="w-6 h-6 text-primary-foreground" />
                  <span className="text-lg font-medium text-primary-foreground">We take care of that</span>
                </div>
                <div className="h-px bg-white/20 mt-4" />
                <motion.div
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6 text-primary-foreground/60" />
                </motion.div>
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="flex items-center mx-2">
              <div className="h-px w-8 bg-background/20" />
              <ArrowRight className="w-5 h-5 text-background/40" />
            </div>

            {/* Your Focus - After Tasks - Stacked vertically */}
            <div className="flex flex-col gap-3">
              {afterTasks.map((task, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl px-6 py-4"
                >
                  <span className="text-sm font-medium text-background">{task}</span>
                  <div className="h-px bg-background/20 mt-3" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Result Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-12 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/20 border border-green-500/30">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-400"
              />
              <span className="text-sm font-medium text-green-400">You focus on revenue. We handle the rest.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

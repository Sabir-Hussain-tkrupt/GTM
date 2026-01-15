import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orbs - more visible */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.5) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.5) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating circles - top left - more visible */}
      <motion.div
        className="absolute top-20 left-[10%] w-56 h-56 rounded-full border-2 border-primary/20"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Dashed circle - top right - more visible */}
      <motion.div
        className="absolute top-32 right-[15%] w-72 h-72 rounded-full border-2 border-dashed border-accent/30"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Small solid circle - bottom left */}
      <motion.div
        className="absolute bottom-[30%] left-[5%] w-28 h-28 rounded-full border-2 border-primary/25"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating dots scattered around - more visible */}
      {[
        { left: "12%", top: "25%", delay: 0 },
        { left: "85%", top: "20%", delay: 0.5 },
        { left: "8%", top: "60%", delay: 1 },
        { left: "92%", top: "55%", delay: 1.5 },
        { left: "25%", top: "75%", delay: 2 },
        { left: "75%", top: "70%", delay: 2.5 },
        { left: "45%", top: "15%", delay: 0.3 },
        { left: "55%", top: "85%", delay: 1.2 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-primary/40"
          style={{ left: dot.left, top: dot.top }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}

      {/* Larger accent dots - more prominent */}
      <motion.div
        className="absolute top-[40%] left-[20%] w-5 h-5 rounded-full"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[35%] right-[18%] w-4 h-4 rounded-full"
        style={{
          background: "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))",
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />


      {/* Floating geometric shapes - more visible */}
      <motion.div
        className="absolute top-[15%] right-[25%] w-20 h-20"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          y: [0, -10, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-full h-full border-2 border-primary/15 rounded-lg" />
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[30%] w-14 h-14"
        animate={{
          rotate: [360, 270, 180, 90, 0],
          x: [0, 10, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-full h-full border-2 border-accent/15 rotate-45" />
      </motion.div>
    </div>
  );
};

export default HeroBackground;

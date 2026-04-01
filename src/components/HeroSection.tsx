import { motion } from "framer-motion";
import Sharingan from "./Sharingan";

const HeroSection = () => (
  <section
    id="hero"
    className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-dark px-4"
  >
    {/* Background Sharingan */}
    <div className="absolute opacity-10">
      <Sharingan size={500} />
    </div>

    <div className="relative z-20 text-center">
      <motion.p
        className="mb-4 font-body text-xs tracking-[0.4em] text-muted-foreground uppercase md:text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        AI Enthusiast • Full Stack Developer
      </motion.p>

      <motion.h1
        className="font-display text-4xl font-bold tracking-wider text-gradient-sharingan md:text-7xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        KATAKAM SHARATH
        <br />
        KUMAR REDDY
      </motion.h1>

      <motion.p
        className="mt-6 font-body text-lg italic text-muted-foreground md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        "Silent Mind. Powerful Code."
      </motion.p>

      <motion.a
        href="#about"
        className="mt-10 inline-block rounded-sm border border-sharingan/40 px-8 py-3 font-display text-xs tracking-[0.2em] text-foreground uppercase transition-all duration-300 hover:border-sharingan hover:glow-sharingan hover:text-primary-foreground hover:bg-sharingan/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Enter the Genjutsu — View Portfolio
      </motion.a>
    </div>

    {/* Bottom fade */}
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;

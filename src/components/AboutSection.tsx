import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const AboutSection = () => (
  <section id="about" className="relative px-4 py-24 md:py-32">
    <div className="mx-auto max-w-3xl">
      <SectionHeading title="About Me" subtitle="Ninja Dossier" />

      <motion.div
        className="relative rounded-sm border border-border bg-gradient-card p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ boxShadow: "0 0 40px hsl(var(--sharingan) / 0.05)" }}
      >
        {/* Corner accents */}
        <div className="absolute left-0 top-0 h-8 w-px bg-sharingan/40" />
        <div className="absolute left-0 top-0 h-px w-8 bg-sharingan/40" />
        <div className="absolute bottom-0 right-0 h-8 w-px bg-sharingan/40" />
        <div className="absolute bottom-0 right-0 h-px w-8 bg-sharingan/40" />

        <p className="font-body text-base leading-relaxed text-muted-foreground md:text-lg">
          A passionate and curious B.Tech Computer Science student with a deep interest in{" "}
          <span className="text-foreground">Artificial Intelligence</span> and{" "}
          <span className="text-foreground">Full Stack Development</span>. I thrive on solving complex
          problems and transforming ideas into elegant, functional solutions.
        </p>
        <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
          With hands-on experience as a Full Stack Intern and a strong foundation in data analytics,
          I bring a disciplined, methodical approach to every project — like a shinobi who plans
          three steps ahead.
        </p>
        <p className="mt-6 font-display text-sm italic text-sharingan/70">
          "Those who forgive themselves, and are able to accept their true nature... they are the strong ones."
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;

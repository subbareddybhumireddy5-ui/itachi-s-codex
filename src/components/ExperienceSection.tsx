import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ExperienceSection = () => (
  <section id="experience" className="px-4 py-24 md:py-32">
    <div className="mx-auto max-w-3xl">
      <SectionHeading title="Field Operations" subtitle="Experience" />

      <motion.div
        className="relative rounded-sm border border-border bg-gradient-card p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ boxShadow: "0 0 30px hsl(var(--sharingan) / 0.08)" }}
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-display text-lg tracking-wider text-foreground">
            Full Stack Developer Intern
          </h3>
          <span className="font-mono text-xs text-sharingan/70">4 Months</span>
        </div>
        <p className="mt-1 font-body text-sm text-muted-foreground">Study Owl</p>
        <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
          Developed and maintained full-stack web applications, collaborating with cross-functional
          teams to deliver scalable solutions. Gained hands-on experience with modern frameworks,
          RESTful APIs, database management, and agile development workflows.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["React", "Node.js", "MongoDB", "REST APIs"].map((t) => (
            <span
              key={t}
              className="rounded-sm border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;

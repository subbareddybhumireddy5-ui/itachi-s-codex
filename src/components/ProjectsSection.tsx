import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Telegram Language Translator Bot",
    description:
      "A Telegram bot that translates messages across multiple languages in real-time, leveraging translation APIs and natural language processing.",
    tech: ["Python", "Telegram API", "NLP"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="px-4 py-24 md:py-32">
    <div className="mx-auto max-w-4xl">
      <SectionHeading title="Missions" subtitle="Projects" />

      <div className="grid gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="group relative overflow-hidden rounded-sm border border-border bg-gradient-card p-8 transition-all duration-500 hover:border-sharingan/40"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ boxShadow: "0 0 40px hsl(var(--sharingan) / 0.1)" }}
          >
            {/* Reveal line */}
            <div className="absolute inset-y-0 left-0 w-px bg-sharingan/0 transition-all duration-500 group-hover:bg-sharingan/60" />

            <h3 className="font-display text-xl tracking-wider text-foreground">{project.title}</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-sm border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href={project.github}
                className="font-body text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-sharingan"
              >
                GitHub →
              </a>
              <a
                href={project.demo}
                className="font-body text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-sharingan"
              >
                Live Demo →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

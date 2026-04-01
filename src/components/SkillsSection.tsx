import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "Java", icon: "☕" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "MS Access", icon: "📊" },
  { name: "Windows", icon: "🖥️" },
  { name: "Ubuntu", icon: "🐧" },
  { name: "React", icon: "⚛️" },
];

const SkillsSection = () => (
  <section id="skills" className="px-4 py-24 md:py-32">
    <div className="mx-auto max-w-4xl">
      <SectionHeading title="Arsenal" subtitle="Technical Skills" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="group relative flex flex-col items-center gap-3 rounded-sm border border-border bg-gradient-card p-6 transition-all duration-300 hover:border-sharingan/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            whileHover={{ y: -4, boxShadow: "0 0 25px hsl(var(--sharingan) / 0.15)" }}
          >
            <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </span>
            <span className="font-body text-sm tracking-wider text-muted-foreground transition-colors group-hover:text-foreground">
              {skill.name}
            </span>
            {/* Glow dot */}
            <div className="absolute -top-px left-1/2 h-px w-0 -translate-x-1/2 bg-sharingan transition-all duration-300 group-hover:w-8" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const achievements = [
  { title: "Best Intern", org: "Digital Bhem, 2025", icon: "🏆" },
  { title: "Data Analytics Simulation", org: "Accenture (Forage)", icon: "📈" },
  { title: "Google Data Analytics", org: "Google Certificate", icon: "🔍" },
  { title: "Web Development", org: "IBM Certification", icon: "💻" },
];

const AchievementsSection = () => (
  <section id="achievements" className="px-4 py-24 md:py-32">
    <div className="mx-auto max-w-4xl">
      <SectionHeading title="Honors" subtitle="Achievements & Certifications" />

      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            className="group relative flex items-start gap-4 rounded-sm border border-border bg-gradient-card p-6 transition-all duration-300 hover:border-sharingan/40"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ boxShadow: "0 0 30px hsl(var(--sharingan) / 0.12)" }}
          >
            <span className="text-2xl">{a.icon}</span>
            <div>
              <h3 className="font-display text-sm tracking-wider text-foreground">{a.title}</h3>
              <p className="mt-1 font-body text-xs text-muted-foreground">{a.org}</p>
            </div>
            {/* Bottom glow line */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-sharingan/0 transition-all duration-300 group-hover:bg-sharingan/30" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;

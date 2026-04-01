import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const activities = [
  { title: "SAC Member", description: "Student Activity Council representative", icon: "🎓" },
  { title: "Event Organizer", description: "Planned and executed campus events", icon: "🎪" },
];

const ActivitiesSection = () => (
  <section id="activities" className="px-4 py-24 md:py-32">
    <div className="mx-auto max-w-3xl">
      <SectionHeading title="Side Quests" subtitle="Extra Activities" />

      <div className="flex flex-col gap-4 sm:flex-row">
        {activities.map((a, i) => (
          <motion.div
            key={a.title}
            className="group flex flex-1 items-center gap-4 rounded-sm border border-border bg-gradient-card p-6 transition-all duration-300 hover:border-sharingan/40"
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ boxShadow: "0 0 25px hsl(var(--sharingan) / 0.1)" }}
          >
            <span className="text-3xl">{a.icon}</span>
            <div>
              <h3 className="font-display text-sm tracking-wider text-foreground">{a.title}</h3>
              <p className="mt-1 font-body text-xs text-muted-foreground">{a.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ActivitiesSection;

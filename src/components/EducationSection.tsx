import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const timeline = [
  {
    period: "2024 – 2028",
    title: "B.Tech in Computer Science",
    place: "Madanapalle Institute of Technology & Science",
    detail: "CGPA: 8.3",
  },
  {
    period: "2022 – 2024",
    title: "Intermediate (MPC)",
    place: "Board of Intermediate Education",
    detail: "Score: 92%",
  },
  {
    period: "2021 – 2022",
    title: "Secondary School Certificate",
    place: "Board of Secondary Education",
    detail: "Score: 95%",
  },
];

const EducationSection = () => (
  <section id="education" className="px-4 py-24 md:py-32">
    <div className="mx-auto max-w-3xl">
      <SectionHeading title="Journey" subtitle="Education Timeline" />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />

        {timeline.map((item, i) => (
          <motion.div
            key={item.title}
            className={`relative mb-12 flex flex-col md:flex-row ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            {/* Dot */}
            <div className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-sharingan bg-background md:left-1/2" />

            {/* Content */}
            <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <span className="font-mono text-xs text-sharingan/70">{item.period}</span>
              <h3 className="mt-1 font-display text-base tracking-wider text-foreground">{item.title}</h3>
              <p className="mt-1 font-body text-sm text-muted-foreground">{item.place}</p>
              <span className="mt-1 inline-block font-mono text-xs text-sharingan">{item.detail}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;

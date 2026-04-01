import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    className="mb-12 text-center md:mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="font-display text-3xl font-bold tracking-wider text-gradient-sharingan md:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 font-body text-sm tracking-widest text-muted-foreground uppercase">
        {subtitle}
      </p>
    )}
    <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-sharingan to-transparent" />
  </motion.div>
);

export default SectionHeading;

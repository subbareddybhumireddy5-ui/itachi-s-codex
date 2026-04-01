import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useState } from "react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <SectionHeading title="Secret Message" subtitle="Contact" />

        <motion.div
          className="relative rounded-sm border border-border bg-gradient-card p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Corner accents */}
          <div className="absolute left-0 top-0 h-8 w-px bg-sharingan/40" />
          <div className="absolute left-0 top-0 h-px w-8 bg-sharingan/40" />
          <div className="absolute bottom-0 right-0 h-8 w-px bg-sharingan/40" />
          <div className="absolute bottom-0 right-0 h-px w-8 bg-sharingan/40" />

          <div className="mb-8 space-y-3">
            <a href="mailto:sharathkumarreddy@example.com" className="flex items-center gap-3 font-body text-sm text-muted-foreground transition-colors hover:text-sharingan">
              <span className="text-sharingan">✉</span> sharathkumarreddy@example.com
            </a>
            <a href="tel:+910000000000" className="flex items-center gap-3 font-body text-sm text-muted-foreground transition-colors hover:text-sharingan">
              <span className="text-sharingan">☎</span> +91 00000 00000
            </a>
            <a href="#" className="flex items-center gap-3 font-body text-sm text-muted-foreground transition-colors hover:text-sharingan">
              <span className="text-sharingan">🔗</span> LinkedIn Profile
            </a>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-sm border border-border bg-background/50 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-sharingan/50 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-sm border border-border bg-background/50 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-sharingan/50 focus:outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full resize-none rounded-sm border border-border bg-background/50 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-sharingan/50 focus:outline-none"
              required
            />
            <motion.button
              type="submit"
              className="w-full rounded-sm border border-sharingan/40 px-6 py-3 font-display text-xs tracking-[0.2em] text-foreground uppercase transition-all duration-300 hover:border-sharingan hover:bg-sharingan/20"
              whileHover={{ boxShadow: "0 0 25px hsl(var(--sharingan) / 0.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              {sent ? "Message Sent ✓" : "Send Secret Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

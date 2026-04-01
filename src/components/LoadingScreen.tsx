import { motion, AnimatePresence } from "framer-motion";
import Sharingan from "./Sharingan";

const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Sharingan size={80} />
        <motion.p
          className="mt-6 font-display text-sm tracking-[0.3em] text-muted-foreground"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ENTERING GENJUTSU
        </motion.p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default LoadingScreen;

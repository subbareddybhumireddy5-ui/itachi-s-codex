import { motion } from "framer-motion";

const Sharingan = ({ size = 200, className = "" }: { size?: number; className?: string }) => {
  const r = size / 2;
  const tomoeR = r * 0.55;

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-sharingan"
        style={{ boxShadow: "0 0 30px hsl(var(--sharingan) / 0.4), inset 0 0 20px hsl(var(--sharingan) / 0.1)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      {/* Inner circle (pupil) */}
      <div
        className="absolute rounded-full bg-sharingan"
        style={{
          width: size * 0.18,
          height: size * 0.18,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 15px hsl(var(--sharingan) / 0.8)",
        }}
      />
      {/* Tomoe */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2].map((i) => {
          const angle = (i * 120 - 90) * (Math.PI / 180);
          const x = r + tomoeR * Math.cos(angle) - size * 0.06;
          const y = r + tomoeR * Math.sin(angle) - size * 0.06;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-sharingan"
              style={{
                width: size * 0.12,
                height: size * 0.12,
                left: x,
                top: y,
                boxShadow: "0 0 10px hsl(var(--sharingan) / 0.6)",
              }}
            />
          );
        })}
      </motion.div>
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, hsl(var(--sharingan) / 0.1) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default Sharingan;

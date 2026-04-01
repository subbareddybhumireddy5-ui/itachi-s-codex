import { useEffect, useState } from "react";

interface Crow {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
}

const CrowSVG = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="opacity-60">
    <path
      d="M2 12C4 10 6 9 8 9C7 7 8 5 10 4C11 6 12 7 14 7C14 5 16 3 18 3C17 5 17 7 16 8C18 8 20 9 22 12C19 11 16 11 14 12C16 14 17 16 17 19C15 17 13 16 12 16C11 16 9 17 7 19C7 16 8 14 10 12C8 11 5 11 2 12Z"
      fill="currentColor"
      className="text-foreground/20"
    />
  </svg>
);

const FallingCrows = () => {
  const [crows, setCrows] = useState<Crow[]>([]);

  useEffect(() => {
    const spawn = () => {
      const crow: Crow = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: -5,
        delay: 0,
        duration: 6 + Math.random() * 6,
        size: 16 + Math.random() * 16,
      };
      setCrows((prev) => [...prev.slice(-8), crow]);
    };

    const interval = setInterval(spawn, 3000);
    spawn();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {crows.map((crow) => (
        <div
          key={crow.id}
          className="absolute"
          style={{
            left: `${crow.x}%`,
            top: `${crow.y}%`,
            animation: `crow-fly ${crow.duration}s ease-out forwards`,
            animationDelay: `${crow.delay}s`,
          }}
        >
          <CrowSVG size={crow.size} />
        </div>
      ))}
    </div>
  );
};

export default FallingCrows;

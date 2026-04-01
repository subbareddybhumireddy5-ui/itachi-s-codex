import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: pos.x - 8,
          top: pos.y - 8,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "hsl(var(--sharingan))",
          boxShadow: "0 0 20px hsl(var(--sharingan) / 0.6), 0 0 60px hsl(var(--sharingan) / 0.2)",
          transition: "left 0.05s, top 0.05s",
        }}
      />
      <div
        className="pointer-events-none fixed z-[9998] hidden md:block"
        style={{
          left: pos.x - 20,
          top: pos.y - 20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid hsl(var(--sharingan) / 0.3)",
          transition: "left 0.1s, top 0.1s",
        }}
      />
    </>
  );
};

export default CursorGlow;

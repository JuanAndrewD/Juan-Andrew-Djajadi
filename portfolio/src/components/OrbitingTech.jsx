import { useMemo } from 'react';
import { motion } from 'motion/react';
import { techStack } from '../data/techStack';
import './OrbitingTech.css';

/**
 * Render-inspired hero: a centered glass card surrounded by orbiting tech tiles.
 * Two counter-rotating rings slowly spin while each tile converges (scales/fades) in.
 */
function Ring({ items, radius, duration, reverse, startIndex = 0 }) {
  const placed = useMemo(() => {
    const count = items.length;
    return items.map((t, i) => {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return { ...t, x, y, i };
    });
  }, [items, radius]);

  return (
    <div
      className="orbit-ring"
      style={{
        width: radius * 2,
        height: radius * 2,
        animationDuration: `${duration}s`,
        animationDirection: reverse ? 'reverse' : 'normal'
      }}
    >
      {placed.map(t => (
        <motion.div
          key={t.title}
          className="orbit-tile"
          style={{ transform: `translate(-50%, -50%) translate(${t.x}px, ${t.y}px)` }}
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 + (startIndex + t.i) * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="orbit-tile-inner"
            style={{ animationDuration: `${duration}s`, animationDirection: reverse ? 'normal' : 'reverse' }}
            title={t.title}
          >
            <span style={{ color: t.color }}>{t.node}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function OrbitingTech({ children }) {
  const inner = techStack.slice(0, 8);
  const outer = techStack.slice(8);

  return (
    <div className="orbit-stage" aria-hidden="false">
      <Ring items={outer} radius={250} duration={48} reverse startIndex={inner.length} />
      <Ring items={inner} radius={150} duration={34} />
      <motion.div
        className="orbit-center"
        initial={{ opacity: 0, scale: 0.8, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

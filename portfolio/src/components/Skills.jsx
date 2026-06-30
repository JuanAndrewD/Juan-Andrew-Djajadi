import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import AnimatedContent from '../reactbits/AnimatedContent';
import { skills } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <SectionHeading
        eyebrow="Toolbox"
        title="Skills & Technologies"
        subtitle="A categorized snapshot of the tools I reach for across the stack."
      />

      <div className="skills__grid">
        {skills.map((cat, idx) => (
          <AnimatedContent key={cat.group} direction="vertical" distance={50} delay={idx * 0.05}>
            <div className="skills__card">
              <h4 className="skills__group">{cat.group}</h4>
              <div className="skills__chips">
                {cat.items.map(item => (
                  <motion.span
                    key={item}
                    className="skills__chip"
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}

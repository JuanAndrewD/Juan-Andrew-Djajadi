import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import AnimatedContent from '../reactbits/AnimatedContent';
import SpotlightCard from '../reactbits/SpotlightCard';
import { projects } from '../data/portfolio';
import './Projects.css';

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects that ship and place"
        subtitle="Production-grade, award-winning systems built across hackathons and solo sprints."
      />

      <div className="projects__list">
        {projects.map((p, i) => (
          <AnimatedContent key={p.name} direction="vertical" distance={60} delay={i * 0.05}>
            <SpotlightCard className="project" spotlightColor={`${p.accent}40`}>
              <div className="project__bar" style={{ background: p.accent }} />
              <div className="project__top">
                <div>
                  <span className="project__badge" style={{ color: p.accent, borderColor: `${p.accent}55` }}>
                    {p.badge}
                  </span>
                  <h3 className="project__name">{p.name}</h3>
                  <p className="project__subtitle">{p.subtitle}</p>
                </div>
                <span className="project__period">{p.period}</span>
              </div>

              <p className="project__desc">{p.description}</p>

              <ul className="project__highlights">
                {p.highlights.map(h => (
                  <li key={h}>
                    <FiCheck style={{ color: p.accent }} /> {h}
                  </li>
                ))}
              </ul>

              <div className="project__footer">
                <div className="project__stack">
                  {p.stack.map(s => (
                    <span key={s} className="project__tag">{s}</span>
                  ))}
                </div>
                <a className="project__link" href={p.link} target="_blank" rel="noreferrer" style={{ color: p.accent }}>
                  {p.linkLabel} <FiArrowUpRight />
                </a>
              </div>
            </SpotlightCard>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
}

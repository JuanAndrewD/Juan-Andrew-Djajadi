import { FiBriefcase } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import AnimatedContent from '../reactbits/AnimatedContent';
import SpotlightCard from '../reactbits/SpotlightCard';
import { experience, education } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <SectionHeading
        eyebrow="Journey"
        title="Experience & Education"
        subtitle="Leading teams, shipping infrastructure, and studying the systems beneath it all."
      />

      <div className="experience__timeline">
        {experience.map((e, i) => (
          <AnimatedContent key={`${e.org}-${e.role}`} direction="horizontal" reverse distance={50} delay={i * 0.05}>
            <div className="timeline__item">
              <div className="timeline__marker">
                <FiBriefcase />
              </div>
              <div className="timeline__content">
                <div className="timeline__head">
                  <h4>{e.role}</h4>
                  <span className="timeline__period">{e.period}</span>
                </div>
                <div className="timeline__org">{e.org} · <span>{e.mode}</span></div>
                <ul>
                  {e.points.map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>

      <AnimatedContent direction="vertical" distance={40}>
        <SpotlightCard className="education" spotlightColor="rgba(34, 211, 238, 0.25)">
          <div className="education__head">
            <h3>{education.degree}</h3>
            <span className="education__grade">GPA {education.grade}</span>
          </div>
          <div className="education__school">{education.school}</div>
          <div className="education__meta">{education.period}</div>
          <p className="education__focus"><strong>Focus:</strong> {education.focus}</p>
          <p className="education__activities"><strong>Activities:</strong> {education.activities}</p>
        </SpotlightCard>
      </AnimatedContent>
    </section>
  );
}

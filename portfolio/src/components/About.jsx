import SectionHeading from './SectionHeading';
import AnimatedContent from '../reactbits/AnimatedContent';
import CountUp from '../reactbits/CountUp';
import SpotlightCard from '../reactbits/SpotlightCard';
import { profile, stats, highlights } from '../data/portfolio';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Engineering at the intersection of AI, Cloud & Systems"
        subtitle="From neural networks to serverless backends to bare-metal performance."
      />

      <div className="about__grid">
        <AnimatedContent direction="horizontal" reverse distance={60} className="about__bio">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="about__stats">
            {stats.map(s => (
              <div className="about__stat" key={s.label}>
                <div className="about__stat-num">
                  <CountUp to={s.value} duration={2} />
                  {s.suffix}
                </div>
                <div className="about__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </AnimatedContent>

        <AnimatedContent direction="horizontal" distance={60} className="about__focus">
          {profile.focus.map(f => (
            <SpotlightCard key={f.title} className="about__focus-card" spotlightColor="rgba(124, 58, 237, 0.28)">
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </SpotlightCard>
          ))}
        </AnimatedContent>
      </div>

      <AnimatedContent direction="vertical" distance={40}>
        <div className="about__highlights">
          {highlights.map(h => (
            <div className="about__highlight" key={h.title}>
              <span className="about__highlight-icon">{h.icon}</span>
              <div>
                <div className="about__highlight-title">{h.title}</div>
                <div className="about__highlight-sub">{h.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedContent>
    </section>
  );
}

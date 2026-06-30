import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import AnimatedContent from '../reactbits/AnimatedContent';
import GradientText from '../reactbits/GradientText';
import StarBorder from '../reactbits/StarBorder';
import { profile } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <AnimatedContent direction="vertical" distance={50}>
        <div className="contact__card">
          <span className="contact__eyebrow">Let&apos;s build something</span>
          <h2 className="contact__title">
            <GradientText colors={['#7C3AED', '#22D3EE', '#FF9FFC', '#7C3AED']} animationSpeed={8}>
              Open to internships & collaborations
            </GradientText>
          </h2>
          <p className="contact__sub">
            Whether it&apos;s an AI experiment, a cloud architecture, or a low-level systems puzzle — I&apos;d love to hear about it.
          </p>

          <StarBorder
            as="a"
            href={`mailto:${profile.email}`}
            color="#22D3EE"
            speed="5s"
            className="contact__cta"
            style={{ textDecoration: 'none' }}
          >
            <span className="contact__cta-inner"><FiMail /> {profile.email}</span>
          </StarBorder>

          <div className="contact__links">
            <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
            <span><FiMapPin /> {profile.location}</span>
          </div>
        </div>
      </AnimatedContent>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}.</span>
        <span>Crafted with React, Motion & react-bits.</span>
      </footer>
    </section>
  );
}

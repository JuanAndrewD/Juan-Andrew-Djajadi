import { motion } from 'motion/react';
import { FiArrowDown, FiGithub, FiMapPin } from 'react-icons/fi';
import OrbitingTech from './OrbitingTech';
import TextType from '../reactbits/TextType';
import GradientText from '../reactbits/GradientText';
import ShinyText from '../reactbits/ShinyText';
import StarBorder from '../reactbits/StarBorder';
import { profile } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__intro">
        <motion.div
          className="hero__pill"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero__dot" />
          <ShinyText text="Available for internships & collaborations" speed={4} color="#9890a8" shineColor="#ffffff" />
        </motion.div>

        <h1 className="hero__title">
          <span className="hero__hi">Hi, I&apos;m</span>
          <GradientText
            className="hero__gradient"
            colors={['#7C3AED', '#22D3EE', '#FF9FFC', '#7C3AED']}
            animationSpeed={9}
          >
            {profile.name}
          </GradientText>
        </h1>

        <div className="hero__role">
          <TextType
            text={profile.roles}
            typingSpeed={70}
            pauseDuration={1600}
            deletingSpeed={40}
            className="hero__typed"
            textColors={['#22D3EE']}
          />
        </div>

        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__meta">
          <span><FiMapPin /> {profile.location}</span>
        </div>

        <div className="hero__cta">
          <StarBorder
            as="a"
            href="#projects"
            color="#7C3AED"
            speed="5s"
            className="hero__cta-primary"
            style={{ textDecoration: 'none' }}
          >
            View My Work
          </StarBorder>
          <a className="hero__cta-secondary" href={profile.github} target="_blank" rel="noreferrer">
            <FiGithub /> GitHub
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <OrbitingTech>
          <div className="hero-card">
            <div className="hero-card__avatar">{profile.initials}</div>
            <h3 className="hero-card__name">{profile.name}</h3>
            <p className="hero-card__sub">AI · Cloud · Systems</p>
            <div className="hero-card__line">
              <span>Zero ops.</span>
              <span className="hero-card__accent">Maximum impact.</span>
            </div>
          </div>
        </OrbitingTech>
      </div>

      <a className="hero__scroll" href="#stack" aria-label="Scroll down">
        <FiArrowDown />
      </a>
    </section>
  );
}

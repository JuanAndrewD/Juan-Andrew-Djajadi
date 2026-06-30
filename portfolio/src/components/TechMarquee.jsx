import LogoLoop from '../reactbits/LogoLoop';
import { logoItemsTop, logoItemsBottom } from '../data/techStack';
import './TechMarquee.css';

export default function TechMarquee() {
  return (
    <section className="marquee" id="stack">
      <div className="marquee__head">
        <h2 className="marquee__title">Whatever the stack, I build on it.</h2>
        <p className="marquee__sub">A toolkit spanning AI, cloud, and full-stack engineering.</p>
      </div>

      <div className="marquee__rows">
        <LogoLoop
          logos={logoItemsTop}
          direction="left"
          speed={70}
          logoHeight={40}
          gap={56}
          fadeOut
          fadeOutColor="#0b0a12"
          scaleOnHover
          pauseOnHover
          ariaLabel="Technologies row one"
        />
        <LogoLoop
          logos={logoItemsBottom}
          direction="right"
          speed={70}
          logoHeight={40}
          gap={56}
          fadeOut
          fadeOutColor="#0b0a12"
          scaleOnHover
          pauseOnHover
          ariaLabel="Technologies row two"
        />
      </div>
    </section>
  );
}

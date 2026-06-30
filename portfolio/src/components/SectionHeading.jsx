import AnimatedContent from '../reactbits/AnimatedContent';
import './SectionHeading.css';

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <AnimatedContent distance={40} direction="vertical" duration={0.7}>
      <div className="section-heading">
        {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
        <h2 className="section-heading__title">{title}</h2>
        {subtitle && <p className="section-heading__sub">{subtitle}</p>}
      </div>
    </AnimatedContent>
  );
}

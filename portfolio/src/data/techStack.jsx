import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiGit,
  SiGithub,
  SiDocker,
  SiOpenai,
  SiC,
  SiTailwindcss,
  SiFlask
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';

// Each entry: { node, title, color }
export const techStack = [
  { node: <SiPython />, title: 'Python', color: '#3776AB' },
  { node: <SiTypescript />, title: 'TypeScript', color: '#3178C6' },
  { node: <SiJavascript />, title: 'JavaScript', color: '#F7DF1E' },
  { node: <FaJava />, title: 'Java', color: '#EA2D2E' },
  { node: <SiC />, title: 'C', color: '#A8B9CC' },
  { node: <FaAws />, title: 'AWS', color: '#FF9900' },
  { node: <FiDatabase />, title: 'DynamoDB', color: '#4053D6' },
  { node: <SiReact />, title: 'React', color: '#61DAFB' },
  { node: <SiNextdotjs />, title: 'Next.js', color: '#ffffff' },
  { node: <SiNodedotjs />, title: 'Node.js', color: '#5FA04E' },
  { node: <SiExpress />, title: 'Express', color: '#ffffff' },
  { node: <SiFlask />, title: 'Flask', color: '#ffffff' },
  { node: <SiPostgresql />, title: 'PostgreSQL', color: '#4169E1' },
  { node: <SiSupabase />, title: 'Supabase', color: '#3FCF8E' },
  { node: <SiOpenai />, title: 'Generative AI', color: '#10A37F' },
  { node: <SiTailwindcss />, title: 'Tailwind', color: '#06B6D4' },
  { node: <SiVercel />, title: 'Vercel', color: '#ffffff' },
  { node: <SiDocker />, title: 'Docker', color: '#2496ED' },
  { node: <SiGit />, title: 'Git', color: '#F05032' },
  { node: <SiGithub />, title: 'GitHub', color: '#ffffff' }
];

// Build LogoLoop-ready items (colored nodes)
export const logoItems = techStack.map(t => ({
  node: <span style={{ color: t.color, display: 'inline-flex' }}>{t.node}</span>,
  title: t.title,
  ariaLabel: t.title
}));

// Two halves for the dual marquee rows
export const logoItemsTop = logoItems.slice(0, 10);
export const logoItemsBottom = logoItems.slice(10);

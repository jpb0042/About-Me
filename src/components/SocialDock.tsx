import { SITE } from '../views/Home/constants';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

const SOCIAL = [
  { label: 'GitHub', href: SITE.github, icon: GitHubIcon },
  { label: 'LinkedIn', href: SITE.linkedin, icon: LinkedInIcon },
] as const;

export function SocialDock() {
  return (
    <nav className="social-dock" aria-label="Social">
      {SOCIAL.map((item) => (
        <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
          <item.icon />
          <span className="visually-hidden">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}

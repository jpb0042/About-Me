import { SectionHead } from 'components';
import { EmailIcon, GitHubIcon, LinkedInIcon } from 'components/SocialIcons';
import { CONTACT, LINKS } from '../constants';
//vercel
const ICONS = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: EmailIcon,
} as const;

export function Contact() {
  return (
    <section className="block" id="contact">
      <SectionHead index="04" title={CONTACT.title} />
      <div className="contact">
        <p className="contact__body">{CONTACT.body}</p>
        <nav className="contact__icons" aria-label="Contact links">
          {LINKS.map((item) => {
            const Icon = ICONS[item.label];
            return (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <Icon />
                <span className="visually-hidden">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { SITE } from '../views/Home/constants';
import { usePageMotion } from '../lib/usePageMotion';
import { SocialDock } from './SocialDock';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#built', label: 'Built' },
  { href: '#focus', label: 'Focus' },
  { href: '#contact', label: 'Contact' },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pageRef = usePageMotion();

  return (
    <div className="page" ref={pageRef}>
      <header className="site-nav">
        <Link href="/" className="site-nav__name">
          {SITE.name}
        </Link>
        <nav className="site-nav__links" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
              <span className="nav-line" aria-hidden />
            </a>
          ))}
        </nav>
        <div className="site-nav__aside">
          <a className="site-nav__email" href={`mailto:${SITE.email}`}>
            {SITE.email}
            <span className="nav-line" aria-hidden />
          </a>
          <a className="site-nav__resume" href={SITE.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </header>

      <div className="page__main">
        <main>{children}</main>
        <footer className="site-footer">
          <p>
            {SITE.name}, {SITE.location}
          </p>
        </footer>
      </div>

      <SocialDock />
    </div>
  );
}

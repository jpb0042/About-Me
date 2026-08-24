import { Link, Outlet } from 'react-router-dom';
import { SITE } from '../views/Home/constants';
import { usePageMotion } from '../lib/usePageMotion';
import { SocialDock } from './SocialDock';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#focus', label: 'Focus' },
  { href: '#path', label: 'Path' },
  { href: '#contact', label: 'Contact' },
] as const;

export function Layout() {
  const pageRef = usePageMotion();

  return (
    <div className="page" ref={pageRef}>
      <header className="site-nav">
        <Link to="/" className="site-nav__name">
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
        <a className="site-nav__email" href={`mailto:${SITE.email}`}>
          {SITE.email}
          <span className="nav-line" aria-hidden />
        </a>
      </header>

      <div className="page__main">
        <main>
          <Outlet />
        </main>
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

import { Link, Outlet } from 'react-router-dom';
import { SITE } from '../views/Home/constants';

export function Layout() {
  return (
    <div className="page">
      <aside className="identity">
        <Link to="/" className="identity__name">
          {SITE.name}
        </Link>
        <p className="identity__meta">
          {SITE.role}
          <span aria-hidden> · </span>
          {SITE.location}
        </p>
        <nav className="identity__nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
          <a href="#path">Path</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="identity__email" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
      </aside>

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
    </div>
  );
}

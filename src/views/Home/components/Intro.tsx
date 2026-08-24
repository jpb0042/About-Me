import { INTRO, SITE } from '../constants';

export function Intro() {
  return (
    <section className="intro" id="top">
      <h1>{INTRO.title}</h1>
      <p className="intro__lede">{INTRO.lede}</p>
      <p className="intro__meta">
        {SITE.role}
        <span aria-hidden> / </span>
        {SITE.location}
      </p>
    </section>
  );
}

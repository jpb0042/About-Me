import { INTRO, SITE } from '../constants';

export function Intro() {
  return (
    <section className="intro" id="top">
      <p className="kicker">
        <span className="kicker__dot" aria-hidden />
        {INTRO.kicker}
      </p>
      <h1>{INTRO.title}</h1>
      <p className="intro__lede">{INTRO.lede}</p>
      <p className="intro__meta">
        {SITE.role}
        <span aria-hidden> / </span>
        {SITE.location}
      </p>
      <a className="intro__cue" href="#about">
        <span className="intro__cue-track" aria-hidden>
          <span className="intro__cue-dot" />
        </span>
        Scroll
      </a>
    </section>
  );
}

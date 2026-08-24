import { INTRO } from '../constants';

export function Intro() {
  return (
    <section className="intro" id="top">
      <div className="intro__head">
        <p className="intro__kicker">{INTRO.kicker}</p>
        <h1>
          {INTRO.title.map((line) => (
            <span key={line} className="intro__line">
              {line}
            </span>
          ))}
        </h1>
      </div>
      <p className="intro__lede">{INTRO.lede}</p>
    </section>
  );
}

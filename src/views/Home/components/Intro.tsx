import { INTRO } from '../constants';

export function Intro() {
  return (
    <section className="intro" id="top">
      <p className="kicker">{INTRO.kicker}</p>
      <h1>{INTRO.title}</h1>
      <p className="intro__lede">{INTRO.lede}</p>
    </section>
  );
}

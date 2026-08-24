import { Placeholder } from 'components';
import { ABOUT } from '../constants';

export function About() {
  return (
    <section className="block" id="about">
      <header className="block__head">
        <h2>{ABOUT.title}</h2>
      </header>
      <div className="about">
        <div className="about__copy">
          {ABOUT.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Placeholder label="Portrait" caption="Photo placeholder" />
      </div>
    </section>
  );
}

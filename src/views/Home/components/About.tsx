import { Placeholder, SectionHead } from 'components';
import { ABOUT } from '../constants';

export function About() {
  return (
    <section className="block" id="about">
      <SectionHead index="01" title={ABOUT.title} />
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

import { SectionHead } from 'components';
import golf from '../../../assets/golf.jpg';
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
        <figure className="portrait">
          <img src={golf} alt="Golf" />
          <figcaption>Golf</figcaption>
        </figure>
      </div>
    </section>
  );
}

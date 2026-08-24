import { SectionHead } from 'components';
import { CONTACT, SITE } from '../constants';

export function Contact() {
  return (
    <section className="block" id="contact">
      <SectionHead index="04" title={CONTACT.title} />
      <div className="contact">
        <p className="contact__body">{CONTACT.body}</p>
        <a className="contact__link" href={`mailto:${SITE.email}`}>
          {SITE.email}
          <span className="contact__link-rule" aria-hidden />
        </a>
      </div>
    </section>
  );
}

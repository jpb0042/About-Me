import { CONTACT, SITE } from '../constants';

export function Contact() {
  return (
    <section className="block" id="contact">
      <header className="block__head">
        <h2>{CONTACT.title}</h2>
      </header>
      <p className="contact__body">{CONTACT.body}</p>
      <p>
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
    </section>
  );
}

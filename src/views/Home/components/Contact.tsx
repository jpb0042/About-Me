import { SectionHead } from 'components';
import { CONTACT, LINKS, SITE } from '../constants';

export function Contact() {
  return (
    <section className="block" id="contact">
      <SectionHead index="04" title={CONTACT.title} />
      <div className="contact">
        <p className="contact__body">{CONTACT.body}</p>
        <ul className="contact__links">
          {LINKS.map((item) => (
            <li key={item.label}>
              <a
                className="contact__link"
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {item.label === 'Email' ? SITE.email : item.label}
                <span className="contact__link-rule" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

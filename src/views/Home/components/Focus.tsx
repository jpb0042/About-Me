import { SectionHead } from 'components';
import { FOCUS } from '../constants';

export function Focus() {
  return (
    <section className="block" id="focus">
      <SectionHead index="02" title="Focus" />
      <ul className="focus-grid">
        {FOCUS.map((item, index) => (
          <li key={item.title} className="focus-card">
            <span className="focus-card__index" aria-hidden>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

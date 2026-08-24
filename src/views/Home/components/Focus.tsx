import { SectionHead } from 'components';
import { FOCUS } from '../constants';
import { FocusIcon } from './FocusIcons';

export function Focus() {
  return (
    <section className="block" id="focus">
      <SectionHead index="02" title="Focus" />
      <ul className="focus-grid">
        {FOCUS.map((item) => (
          <li key={item.title} className="focus-card">
            <span className="focus-card__icon">
              <FocusIcon name={item.icon} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

import { FOCUS } from '../constants';

export function Focus() {
  return (
    <section className="block" id="focus">
      <header className="block__head">
        <h2>Focus</h2>
      </header>
      <dl className="focus-list">
        {FOCUS.map((item) => (
          <div key={item.title} className="focus-list__row">
            <dt>{item.title}</dt>
            <dd>{item.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

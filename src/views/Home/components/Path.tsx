import { PATH } from '../constants';

export function Path() {
  return (
    <section className="block" id="path">
      <header className="block__head">
        <h2>Path</h2>
      </header>
      <ol className="path-list">
        {PATH.map((item) => (
          <li key={item.step} className="path-list__item">
            <span className="path-list__step">{item.step}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

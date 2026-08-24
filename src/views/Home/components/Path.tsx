import { SectionHead } from 'components';
import { PATH } from '../constants';

export function Path() {
  return (
    <section className="block" id="path" hidden>
      <SectionHead index="04" title="Path" />
      <div className="path-list-wrap">
        <span className="path-list__rail" aria-hidden />
        <ol className="path-list">
          {PATH.map((item) => (
            <li key={item.step} className="path-list__item">
              <span className="path-list__step" aria-hidden>
                {item.step}
              </span>
              <div className="path-list__body">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

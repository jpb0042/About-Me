import { useState } from 'react';
import { SectionHead } from 'components';
import { BUILT } from '../constants';

export function Built() {
  const [activeId, setActiveId] = useState<(typeof BUILT.items)[number]['id']>(BUILT.items[0].id);
  const active = BUILT.items.find((item) => item.id === activeId) ?? BUILT.items[0];

  return (
    <section className="block" id="built">
      <SectionHead index="02" title={BUILT.title} />
      <div className="built">
        <div className="built__tabs" role="tablist" aria-label="Projects">
          {BUILT.items.map((item) => {
            const selected = item.id === active.id;
            return (
              <button
                key={item.id}
                id={`built-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`built-panel-${item.id}`}
                className={selected ? 'built__tab is-active' : 'built__tab'}
                onClick={() => setActiveId(item.id)}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        <div
          className="built__panel"
          id={`built-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`built-tab-${active.id}`}
        >
          <div className="built__copy">
            <h3>{active.title}</h3>
            {active.body ? <p>{active.body}</p> : null}
          </div>
          <div className="built__media">
            <figure className="built-frame">
              <div className="built-frame__slot" role="img" aria-label={`${active.title} photo`}>
                <span>Photo</span>
              </div>
              <figcaption>Photo</figcaption>
            </figure>
            <figure className="built-frame">
              <div className="built-frame__slot" role="img" aria-label={`${active.title} gif`}>
                <span>Gif</span>
              </div>
              <figcaption>Gif</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

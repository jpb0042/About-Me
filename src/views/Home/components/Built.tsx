import { useState } from 'react';
import { SectionHead } from 'components';
import { prefersReducedMotion } from '../../../lib/gsap';
import { BUILT } from '../constants';

type BuiltItem = (typeof BUILT.items)[number];

function photosOf(item: BuiltItem) {
  return 'photos' in item ? item.photos : [];
}

function videoOf(item: BuiltItem) {
  return 'video' in item ? item.video : undefined;
}

function Chevron({ dir }: { dir: 'prev' | 'next' }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      {dir === 'prev' ? (
        <path d="M10.5 3.5 5.5 8l5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      ) : (
        <path d="M5.5 3.5 10.5 8l-5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      )}
    </svg>
  );
}

function BuiltGallery({ item }: { item: BuiltItem }) {
  const photos = photosOf(item);
  const video = videoOf(item);
  const [index, setIndex] = useState(0);
  const count = photos.length;
  const photo = photos[index];

  const go = (next: number) => {
    if (!count) return;
    setIndex((next + count) % count);
  };

  if (video && !photo) {
    return (
      <figure className="built-frame">
        <div className="built-frame__slot is-filled">
          <video
            autoPlay={!prefersReducedMotion()}
            loop
            muted
            playsInline
            controls
            preload="metadata"
            aria-label={`${item.title} video`}
          >
            <source src={video} type={video.includes('.mp4') ? 'video/mp4' : 'video/webm'} />
          </video>
        </div>
      </figure>
    );
  }

  if (!photo) {
    return (
      <figure className="built-frame">
        <div className="built-frame__slot">
          <span>Photos</span>
        </div>
      </figure>
    );
  }

  return (
    <div
      className="built-gallery"
      onKeyDown={(event) => {
        if (count < 2) return;
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          go(index - 1);
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          go(index + 1);
        }
      }}
    >
      <figure className="built-frame">
        <div className="built-frame__slot is-filled">
          <img src={photo} alt={`${item.title}, photo ${index + 1} of ${count}`} />
        </div>
      </figure>
      {count > 1 ? (
        <div className="built-gallery__bar">
          <button
            type="button"
            className="built-gallery__step"
            onClick={() => go(index - 1)}
            aria-label="Previous photo"
          >
            <Chevron dir="prev" />
          </button>
          <div className="built-gallery__thumbs">
            {photos.map((src, photoIndex) => {
              const selected = photoIndex === index;
              return (
                <button
                  key={src}
                  type="button"
                  className={selected ? 'built-gallery__thumb is-active' : 'built-gallery__thumb'}
                  aria-label={`${item.title} photo ${photoIndex + 1}`}
                  aria-current={selected ? true : undefined}
                  onClick={() => setIndex(photoIndex)}
                >
                  <img src={src} alt="" />
                </button>
              );
            })}
          </div>
          <button
            type="button"
            className="built-gallery__step"
            onClick={() => go(index + 1)}
            aria-label="Next photo"
          >
            <Chevron dir="next" />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function Built() {
  const [activeId, setActiveId] = useState<BuiltItem['id']>(BUILT.items[0].id);
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
          <BuiltGallery key={active.id} item={active} />
        </div>
      </div>
    </section>
  );
}

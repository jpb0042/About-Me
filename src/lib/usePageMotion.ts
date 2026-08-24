import { useRef } from 'react';
import { gsap, prefersReducedMotion, SplitText, useGSAP } from '../lib/gsap';

const EASE = 'power4.out';

/** Reveal order inside each section, first entry animates first. */
const SECTION_ORDER: Record<string, string[]> = {
  about: ['.about__copy p', '.placeholder'],
  focus: ['.focus-card'],
  path: ['.path-list__item'],
  contact: ['.contact__body', '.contact__link'],
};

export function usePageMotion() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const page = pageRef.current;
      if (prefersReducedMotion() || !page || !contextSafe) return;

      const cleanups: Array<() => void> = [];
      const find = <T extends Element>(selector: string) =>
        Array.from(page.querySelectorAll<T>(selector));

      // --- hero: identity rail, then kicker, headline, lede, meta, cue ---
      const hero = gsap.timeline({ defaults: { ease: EASE } });

      hero
        .from('.identity__name', { y: 20, autoAlpha: 0, duration: 0.9 }, 0)
        .from(
          find('.identity__meta, .identity__nav a, .identity__email'),
          { y: 14, autoAlpha: 0, duration: 0.8, stagger: 0.06 },
          0.12,
        )
        .from('.intro .kicker', { x: -14, autoAlpha: 0, duration: 0.8 }, 0.32)
        .from('.intro__lede', { y: 20, autoAlpha: 0, duration: 0.95 }, 1.02)
        .from('.intro__meta', { y: 14, autoAlpha: 0, duration: 0.85 }, 1.16)
        .from('.intro__cue', { y: 14, autoAlpha: 0, duration: 0.85 }, 1.3);

      SplitText.create('.intro h1', {
        type: 'words,lines',
        mask: 'lines',
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            yPercent: 115,
            duration: 1.2,
            stagger: 0.11,
            ease: EASE,
            delay: 0.5,
          });
        },
      });

      const cueDot = page.querySelector('.intro__cue-dot');
      if (cueDot) {
        gsap.fromTo(
          cueDot,
          { xPercent: -100 },
          {
            xPercent: 320,
            duration: 1.9,
            ease: 'power2.inOut',
            repeat: -1,
            repeatDelay: 0.7,
            delay: 2,
          },
        );
      }

      // --- sections: rule draws, label follows, content staggers in ---
      find<HTMLElement>('.block').forEach((section) => {
        const content = (SECTION_ORDER[section.id] ?? []).flatMap((selector) =>
          Array.from(section.querySelectorAll<HTMLElement>(selector)),
        );

        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
          scrollTrigger: { trigger: section, start: 'top 78%' },
        });

        tl.from(section.querySelectorAll('.block__rule'), {
          scaleX: 0,
          duration: 1.1,
          ease: 'power3.inOut',
        })
          .from(
            section.querySelectorAll('.block__index, .block__head h2'),
            { x: -12, autoAlpha: 0, duration: 0.7, stagger: 0.07 },
            0.08,
          )
          .from(content, { y: 34, autoAlpha: 0, duration: 0.9, stagger: 0.11 }, 0.3);
      });

      const rail = page.querySelector('.path-list__rail');
      if (rail) {
        gsap.fromTo(
          rail,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.path-list',
              start: 'top 72%',
              end: 'bottom 60%',
              scrub: 0.6,
            },
          },
        );
      }

      const contactRule = page.querySelector('.contact__link-rule');
      if (contactRule) {
        gsap.from(contactRule, {
          scaleX: 0,
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: '.contact__link', start: 'top 88%' },
        });
      }

      const sheen = page.querySelector('.placeholder__sheen');
      if (sheen) {
        gsap.to(sheen, {
          xPercent: 180,
          duration: 2.8,
          ease: 'power1.inOut',
          repeat: -1,
          repeatDelay: 2.4,
        });
      }

      find<HTMLAnchorElement>('.identity__nav a').forEach((link) => {
        const line = link.querySelector('.nav-line');
        if (!line) return;

        const enter = contextSafe(() => {
          gsap.to(line, { scaleX: 1, duration: 0.38, ease: 'power2.out' });
        });
        const leave = contextSafe(() => {
          gsap.to(line, { scaleX: 0, duration: 0.32, ease: 'power2.inOut' });
        });

        link.addEventListener('pointerenter', enter);
        link.addEventListener('pointerleave', leave);
        link.addEventListener('focus', enter);
        link.addEventListener('blur', leave);

        cleanups.push(() => {
          link.removeEventListener('pointerenter', enter);
          link.removeEventListener('pointerleave', leave);
          link.removeEventListener('focus', enter);
          link.removeEventListener('blur', leave);
        });
      });

      return () => {
        cleanups.forEach((fn) => fn());
      };
    },
    { scope: pageRef },
  );

  return pageRef;
}

import { useRef } from 'react';
import { gsap, prefersReducedMotion, SplitText, useGSAP } from '../lib/gsap';

const EASE = 'power4.out';

/** Reveal order inside each section, first entry animates first. */
const SECTION_ORDER: Record<string, string[]> = {
  about: ['.about__copy p', '.portrait'],
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

      const hero = gsap.timeline({ defaults: { ease: EASE } });

      hero
        .from('.site-nav__name', { y: -12, autoAlpha: 0, duration: 0.75 }, 0)
        .from(
          find('.site-nav__links a, .site-nav__email'),
          { y: -10, autoAlpha: 0, duration: 0.7, stagger: 0.05 },
          0.1,
        )
        .from('.social-dock a', { y: 16, autoAlpha: 0, duration: 0.7, stagger: 0.08 }, 0.35)
        .from('.intro__lede', { y: 20, autoAlpha: 0, duration: 0.95 }, 1.02)
        .from('.intro__meta', { y: 14, autoAlpha: 0, duration: 0.85 }, 1.16);

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

      const contactRules = find('.contact__link-rule');
      if (contactRules.length) {
        gsap.from(contactRules, {
          scaleX: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: '.contact__links', start: 'top 88%' },
        });
      }

      find<HTMLElement>('.focus-card').forEach((card) => {
        const icon = card.querySelector('.focus-card__icon');

        const enter = contextSafe(() => {
          gsap.to(card, { y: -6, duration: 0.32, ease: 'power2.out', overwrite: 'auto' });
          if (icon) {
            gsap.to(icon, {
              scale: 1.12,
              rotate: -8,
              duration: 0.4,
              ease: 'back.out(1.7)',
              overwrite: 'auto',
            });
          }
        });
        const leave = contextSafe(() => {
          gsap.to(card, { y: 0, duration: 0.36, ease: 'power2.inOut', overwrite: 'auto' });
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotate: 0,
              duration: 0.32,
              ease: 'power2.inOut',
              overwrite: 'auto',
            });
          }
        });

        card.addEventListener('pointerenter', enter);
        card.addEventListener('pointerleave', leave);

        cleanups.push(() => {
          card.removeEventListener('pointerenter', enter);
          card.removeEventListener('pointerleave', leave);
        });
      });

      find<HTMLAnchorElement>('.site-nav__links a, .site-nav__email').forEach((link) => {
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

'use client';

import { m } from 'motion/react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Stagger, StaggerItem } from '@/components/ui/Reveal';
import { values } from '@/data/company';

/** The EVENTIA acrostic: seven values, one letter each. */
export default function Values() {
  return (
    <section className="wrap section-y" aria-labelledby="values-title">
      <SectionHeading
        title="What EVENTIA Stands For"
        titleClassName="!text-brand-deep"
        intro="Every letter of our name is a value we expect each member of the Eventia family to live by in daily work."
      />
      <Stagger as="ol" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.09}>
        {values.map((v, i) => (
          <StaggerItem as="li" key={`${v.letter}-${i}`} className={i === 6 ? 'sm:col-span-2 lg:col-span-1' : undefined}>
            <m.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="flex h-full items-center gap-5 rounded-3xl border border-ink/10 bg-white p-5 shadow-[0_18px_40px_-30px_rgba(11,29,69,0.5)] transition-colors hover:border-brand"
            >
              <span aria-hidden="true" className="grid size-16 shrink-0 place-items-center rounded-full border-[3px] border-brand bg-night text-3xl font-extrabold text-brand">
                {v.letter}
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-brand-deep">{v.word}</h3>
                <p className="mt-0.5 text-[14px] leading-snug text-ink-soft">
                  <span className="sr-only">{v.letter} </span>
                  {v.text}
                </p>
              </div>
            </m.div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

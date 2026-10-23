'use client';

import { m } from 'motion/react';
import Photo from '@/components/ui/Photo';
import Button from '@/components/ui/Button';
import { Reveal, RevealText, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { certifications } from '@/data/company';
import { cn } from '@/lib/utils';

export default function QualityBand() {
  return (
    <section className="wrap section-y" aria-labelledby="quality-title">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <RevealText as="h2" text="Quality You Can Trust" className="h-title text-brand-deep" />
          <Reveal delay={0.1}>
            <p className="lead mt-6 text-ink-soft">
              Our operations are backed by an ISO 9001:2015 Quality Management System certificate and a Good Manufacturing Practice (GMP)
              certificate covering pharmaceuticals, nutraceuticals and ayurvedic products.
            </p>
            <div className="mt-8">
              <Button href="/quality" variant="outline">
                View Certifications
              </Button>
            </div>
          </Reveal>
        </div>
        <Stagger className="grid grid-cols-2 gap-4 sm:gap-6" stagger={0.15}>
          {certifications.map((c, i) => (
            <StaggerItem key={c.id}>
              <m.figure
                whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className={cn('overflow-hidden rounded-2xl bg-white p-2 shadow-[0_30px_60px_-30px_rgba(11,29,69,0.55)] ring-1 ring-ink/10', i === 0 ? '-rotate-2' : 'rotate-2 mt-6')}
              >
                <Photo src={c.image} alt={c.alt} ratio="3/4" sizes="(min-width:1024px) 22vw, 45vw" className="rounded-xl" />
                <figcaption className="px-2 pb-2 pt-3 text-center">
                  <span className="block text-base font-extrabold text-brand-deep">{c.title}</span>
                  <span className="block text-[13px] text-ink-soft">{c.subtitle}</span>
                </figcaption>
              </m.figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

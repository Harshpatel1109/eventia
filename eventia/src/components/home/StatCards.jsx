'use client';

import Image from 'next/image';
import { m } from 'motion/react';
import CountUp from '@/components/ui/CountUp';
import Photo from '@/components/ui/Photo';
import { Stagger, StaggerItem, ClipReveal } from '@/components/ui/Reveal';
import { site } from '@/data/site';
import { products } from '@/data/products';

const cards = [
  {
    title: 'Our Reach',
    stats: [
      { value: site.foundingYear, plain: true, suffix: '', label: 'Established' },
      { value: site.facts.clients, suffix: '+', label: 'Clients' },
      { value: site.statesServed.length, suffix: '', label: 'States: Gujarat, Maharashtra & Rajasthan' },
    ],
  },
  {
    title: 'Our Strength',
    stats: [
      { value: site.facts.team, suffix: '+', label: 'Team members' },
      { value: products.length, suffix: '', label: 'Brands in our portfolio' },
      { value: 2, suffix: '', label: 'Quality certifications: ISO 9001:2015 & GMP' },
    ],
  },
];

export default function StatCards() {
  return (
    <section aria-label="Eventia at a glance" className="relative z-10 -mt-20 md:-mt-28">
      <Stagger className="wrap grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.3fr]" stagger={0.12}>
        {cards.map((card) => (
          <StaggerItem key={card.title}>
            <m.article
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="relative isolate h-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-soft to-[#ffc46b] p-7 shadow-[0_30px_60px_-30px_rgba(247,148,29,0.6)] md:p-9"
            >
              <Image src="/images/brand/eventia-mark.svg" alt="" width={260} height={280} unoptimized className="absolute -right-10 -top-8 -z-10 w-56 opacity-[0.07] brightness-0" />
              <h2 className="text-xl font-extrabold tracking-tight text-night md:text-2xl">{card.title}</h2>
              <dl className="mt-7 space-y-5">
                {card.stats.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse gap-1.5 border-t border-night/15 pt-5">
                    <dt className="text-[15px] font-semibold leading-snug text-night">{s.label}</dt>
                    <dd className="text-[clamp(2.4rem,2rem+1.6vw,3.4rem)] font-extrabold leading-none tracking-tight text-brand-deep">
                      <CountUp value={s.value} suffix={s.suffix} plain={s.plain} />
                    </dd>
                  </div>
                ))}
              </dl>
            </m.article>
          </StaggerItem>
        ))}
        <StaggerItem className="md:col-span-2 lg:col-span-1">
          <ClipReveal className="h-full">
            <Photo
              src="/images/events/eventia-award-presentation.webp"
              alt="A plaque being presented at an Eventia Pharmaceuticals professional meeting"
              ratio="4/3"
              sizes="(min-width:1024px) 38vw, 100vw"
              className="w-full rounded-3xl lg:h-full lg:min-h-[280px] lg:!aspect-auto"
            />
          </ClipReveal>
        </StaggerItem>
      </Stagger>
    </section>
  );
}

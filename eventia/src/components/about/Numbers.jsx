'use client';

import Image from 'next/image';
import CountUp from '@/components/ui/CountUp';
import SectionHeading from '@/components/ui/SectionHeading';
import { Stagger, StaggerItem } from '@/components/ui/Reveal';
import { site } from '@/data/site';
import { products } from '@/data/products';

const numbers = [
  { value: site.foundingYear, plain: true, suffix: '', label: 'Year established' },
  { value: site.facts.clients, suffix: '+', label: 'Clients' },
  { value: site.facts.team, suffix: '+', label: 'Team members' },
  { value: products.length, suffix: '', label: 'Brands' },
];

export default function Numbers() {
  return (
    <section className="wrap section-y" aria-label="Eventia in numbers">
      <SectionHeading title="Strength In Numbers" titleClassName="!text-brand-deep" />
      <Stagger as="dl" stagger={0.1} className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {numbers.map((n) => (
          <StaggerItem key={n.label} className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep to-night p-6 text-center text-white md:p-9">
            <Image src="/images/brand/eventia-mark.svg" alt="" width={200} height={215} unoptimized className="absolute -bottom-6 -right-6 -z-10 w-32 opacity-10 brightness-0 invert" />
            <dd className="text-[clamp(2.2rem,1.6rem+2.6vw,3.6rem)] font-extrabold leading-none tracking-tight text-brand">
              <CountUp value={n.value} suffix={n.suffix} plain={n.plain} />
            </dd>
            <span aria-hidden="true" className="mx-auto my-4 block h-0.5 w-10 rounded-full bg-white/60" />
            <dt className="text-base font-bold md:text-lg">{n.label}</dt>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

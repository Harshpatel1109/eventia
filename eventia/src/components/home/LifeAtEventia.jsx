'use client';

import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { gallery } from '@/data/company';
import { cn } from '@/lib/utils';

export default function LifeAtEventia() {
  return (
    <section className="relative overflow-hidden bg-brand-mist section-y" aria-labelledby="life-title">
      <div aria-hidden="true" className="hex animate-float absolute -left-12 top-24 hidden size-32 bg-brand/40 lg:block" />
      <div aria-hidden="true" className="hex animate-float absolute -right-10 bottom-32 hidden size-24 bg-brand-deep/20 [animation-delay:2s] lg:block" />
      <div className="wrap relative">
        <SectionHeading
          title="Life at Eventia"
          titleClassName="!text-brand-deep"
          intro={[
            'A team that works together, learns together and celebrates together.',
            'From medical exhibitions to team outings, here is a glimpse of the people behind Eventia.',
          ]}
        />
        <Stagger
          as="ul"
          stagger={0.08}
          className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:auto-rows-[240px] lg:grid-cols-4"
        >
          {gallery.map((item) => (
            <StaggerItem as="li" key={item.title} className={cn('group relative overflow-hidden rounded-2xl sm:rounded-3xl', item.className)} y={36}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes={item.className.includes('row-span-2') ? '(min-width:1024px) 50vw, 100vw' : '(min-width:1024px) 25vw, 50vw'}
                className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-premium)] group-hover:scale-[1.07]"
                style={{ objectPosition: item.position }}
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="absolute inset-x-0 bottom-0 p-4 text-base font-bold text-white sm:p-5 sm:text-lg">{item.title}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 text-center">
          <Button href="/team" variant="outline">
            Meet the Team
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

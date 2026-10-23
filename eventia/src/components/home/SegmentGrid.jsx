'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { Baby, Bone, HeartPulse, Stethoscope } from 'lucide-react';
import { Stagger, StaggerItem } from '@/components/ui/Reveal';
import { segments } from '@/data/company';
import { productsInSegment } from '@/data/products';
import { cn } from '@/lib/utils';

const icons = { Bone, Baby, Stethoscope, HeartPulse };

/** The four medical segments Eventia serves. `compact` hides the description (used on About). */
export default function SegmentGrid({ compact = false }) {
  return (
    <Stagger as="ul" stagger={0.1} className={cn('grid gap-5 sm:grid-cols-2 lg:grid-cols-4', compact && 'lg:gap-6')}>
      {segments.map((s) => {
        const Icon = icons[s.icon];
        const count = productsInSegment(s.slug).length;
        return (
          <StaggerItem as="li" key={s.slug} className="h-full">
            <m.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }} className="h-full">
              <Link
                href={`/products?segment=${s.slug}`}
                className="group flex h-full flex-col items-center rounded-3xl border-2 border-brand/80 bg-white p-7 text-center transition-colors duration-500 hover:bg-brand-mist hover:shadow-[0_28px_50px_-28px_rgba(247,148,29,0.7)]"
              >
                <span className="grid size-20 place-items-center rounded-full bg-brand text-night transition-transform duration-700 ease-[var(--ease-premium)] group-hover:rotate-[360deg]">
                  <Icon aria-hidden="true" className="size-9" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-lg font-extrabold leading-tight text-brand-deep">{s.name}</h3>
                {!compact && <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{s.blurb}</p>}
                <p className="mt-4 text-sm font-bold text-ink">{count} products</p>
              </Link>
            </m.div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

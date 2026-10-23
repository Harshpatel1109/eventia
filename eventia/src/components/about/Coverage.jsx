import { MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '@/components/ui/Reveal';
import { site } from '@/data/site';

export default function Coverage() {
  return (
    <section className="bg-brand-mist section-y" aria-labelledby="coverage-title">
      <div className="wrap">
        <SectionHeading
          title="Where We Work"
          titleClassName="!text-brand-deep"
          intro="Eventia serves healthcare professionals across three states, supported by offices in Mumbai and Ahmedabad."
        />
        <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-3" stagger={0.12}>
          {site.statesServed.map((s) => (
            <StaggerItem as="li" key={s.code} className="flex items-center gap-4 rounded-3xl bg-white p-6 shadow-[0_20px_40px_-30px_rgba(11,29,69,0.5)] ring-1 ring-ink/5">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-brand text-night">
                <MapPin aria-hidden="true" className="size-6" />
              </span>
              <span className="text-xl font-extrabold text-brand-deep">{s.name}</span>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 grid gap-5 md:grid-cols-2">
          {site.offices.map((o) => (
            <div key={o.id} className="rounded-3xl border border-brand/40 bg-white/70 p-6">
              <h3 className="text-lg font-extrabold text-ink">{o.name}</h3>
              <address className="mt-2 text-[15px] not-italic leading-relaxed text-ink-soft">{o.lines.join(' ')}</address>
              <a href={o.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-bold text-brand-deep underline underline-offset-4 hover:text-night">
                Get directions
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

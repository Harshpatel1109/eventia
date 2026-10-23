import { Reveal, RevealText } from '@/components/ui/Reveal';
import { mission, vision } from '@/data/company';

/** Full vision and mission statements (anchor: /about#vision). */
export default function VisionMission() {
  return (
    <section id="vision" className="relative isolate overflow-hidden bg-night section-y text-white" aria-label="Vision and mission">
      <div aria-hidden="true" className="hex absolute -right-24 -top-20 size-[30rem] bg-brand-deep/40" />
      <div aria-hidden="true" className="hex absolute -bottom-32 -left-20 size-[26rem] bg-brand-deep/30" />
      <div className="wrap relative grid gap-8 lg:grid-cols-2 lg:gap-12">
        {[vision, mission].map((b, i) => (
          <Reveal key={b.title} delay={i * 0.12} y={36} className="rounded-3xl border border-white/15 bg-white/[0.07] p-8 backdrop-blur-md md:p-12">
            <RevealText as="h2" text={b.title} className="h-title text-brand" />
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-white/85">
              {b.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

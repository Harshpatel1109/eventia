import Photo from '@/components/ui/Photo';
import { ClipReveal, Reveal, RevealText } from '@/components/ui/Reveal';
import SegmentGrid from '@/components/home/SegmentGrid';
import { aboutParagraphs } from '@/data/company';

export default function Story() {
  const [lead, ...rest] = aboutParagraphs;
  return (
    <section className="wrap section-y">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <ClipReveal>
          <Photo
            src="/images/about/eventia-cover.webp"
            alt="Eventia Pharmaceuticals logo with a hexagon collage of a doctor, a family and medicines, and the tagline Life is Worth Living"
            ratio="2000/1417"
            sizes="(min-width:1024px) 48vw, 100vw"
            className="rounded-3xl ring-1 ring-ink/10"
          />
        </ClipReveal>
        <div>
          <RevealText as="h2" text="Who We Are" className="h-title text-brand-deep" />
          <Reveal delay={0.1}>
            <p className="lead mt-6 font-semibold text-ink">{lead}</p>
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-ink-soft">
              {rest.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <div className="mt-14 md:mt-20">
        <SegmentGrid compact />
      </div>
    </section>
  );
}

import ParallaxImage from '@/components/ui/Parallax';
import Button from '@/components/ui/Button';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { mission, vision } from '@/data/company';

/** Home-page teaser of the vision and mission (full text lives on /about). */
export default function VisionBand() {
  return (
    <section className="relative isolate overflow-hidden bg-night section-y text-white" aria-label="Vision and mission">
      <ParallaxImage src="/images/office/eventia-office-entrance.webp" sizes="100vw" strength={6} position="center 30%" className="opacity-25" />
      <div aria-hidden="true" className="hex absolute -left-20 top-10 size-96 bg-brand-deep/40" />
      <div aria-hidden="true" className="hex absolute -bottom-28 right-0 size-[30rem] bg-brand-deep/30" />
      <div className="wrap relative">
        <RevealText as="h2" text="Built on Trust and Purpose" className="h-title max-w-3xl text-white" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[vision, mission].map((b, i) => (
            <Reveal key={b.title} delay={i * 0.12} y={36} className="rounded-3xl border border-white/15 bg-white/[0.07] p-7 backdrop-blur-md md:p-10">
              <h3 className="h-sub text-brand">{b.title}</h3>
              <p className="mt-4 text-[17px] leading-relaxed text-white/85">{b.paragraphs[0]}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Button href="/about#vision" variant="light">
            Read more
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

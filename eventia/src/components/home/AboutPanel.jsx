import ParallaxImage from '@/components/ui/Parallax';
import Button from '@/components/ui/Button';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import { aboutParagraphs } from '@/data/company';

export default function AboutPanel() {
  const [lead, ...rest] = aboutParagraphs;
  return (
    <section className="relative isolate overflow-hidden section-y" aria-labelledby="about-heading">
      <ParallaxImage src="/images/office/eventia-office-interior.webp" sizes="100vw" strength={8} position="center 40%" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/35 to-night/10" />
      <div className="wrap relative">
        <Reveal y={40} className="max-w-4xl rounded-3xl border-l-[6px] border-brand bg-white/94 p-7 shadow-[0_40px_80px_-40px_rgba(11,29,69,0.55)] backdrop-blur-md sm:p-10 lg:p-14">
          <RevealText as="h2" text="About Eventia" className="h-title text-brand-deep" />
          <p id="about-heading" className="sr-only">About Eventia Pharmaceuticals</p>
          <p className="lead mt-6 font-semibold text-ink">{lead}</p>
          <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-ink-soft">
            {rest.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/about" variant="outline">
              Know More
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

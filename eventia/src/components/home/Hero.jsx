import ParallaxImage from '@/components/ui/Parallax';
import Button from '@/components/ui/Button';
import Magnetic from '@/components/ui/Magnetic';
import CountUp from '@/components/ui/CountUp';
import { site } from '@/data/site';

const lines = ['Life is', 'Worth Living.'];

/** Entrance is pure CSS so the headline animates immediately, even before JS hydrates. */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-72px)] items-end overflow-hidden bg-night lg:min-h-[calc(100svh-84px)]">
      <div className="absolute inset-0 animate-kenburns">
        <ParallaxImage
          src="/images/team/eventia-team-group.webp"
          alt=""
          priority
          sizes="100vw"
          strength={6}
          quality={85}
          position="center 30%"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/60 to-night/20" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
      <div aria-hidden="true" className="hex absolute -right-24 top-16 hidden size-[34rem] bg-white/[0.06] lg:block" />

      <div className="wrap relative grid gap-10 pb-32 pt-24 md:pb-40 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <h1 className="h-display text-white">
            <span className="sr-only">{site.name} &ndash; {site.tagline}.</span>
            {lines.map((line, i) => (
              <span key={line} aria-hidden="true" className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <span className={`block animate-line-up ${i === 1 ? 'text-brand' : ''}`} style={{ animationDelay: `${250 + i * 150}ms` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p className="lead mt-6 max-w-xl animate-fade-up text-white/90 [animation-delay:900ms]">
            Eventia Pharmaceuticals brings quality pharmaceutical products to healthcare professionals through reliable sourcing,
            responsible marketing and strong partnerships.
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:1050ms]">
            <Magnetic>
              <Button href="/products" variant="white">
                Explore Products
              </Button>
            </Magnetic>
            <Button href="/about" variant="light">
              About Us
            </Button>
          </div>
        </div>

        <aside
          aria-label="Our reach"
          className="max-w-sm animate-fade-up rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-xl [animation-delay:1250ms] md:p-7"
        >
          <p className="h-title !text-[clamp(2.6rem,2rem+2vw,3.75rem)] text-brand">
            <CountUp value={site.facts.clients} suffix="+" />
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-white/90">
            clients served across Gujarat, Maharashtra and Rajasthan.
          </p>
        </aside>
      </div>

      <div aria-hidden="true" className="absolute bottom-6 left-1/2 hidden h-12 w-px -translate-x-1/2 overflow-hidden bg-white/25 md:block">
        <span className="block h-full w-full animate-scroll-cue bg-white" />
      </div>
    </section>
  );
}

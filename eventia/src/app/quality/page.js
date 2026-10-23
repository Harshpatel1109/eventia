import Photo from '@/components/ui/Photo';
import PageHero from '@/components/ui/PageHero';
import { Reveal, RevealText } from '@/components/ui/Reveal';
import CtaBand from '@/components/home/CtaBand';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumb } from '@/lib/schema';
import { certifications } from '@/data/company';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Quality & Certifications \u2013 ISO and GMP',
  description:
    'Eventia Pharmaceuticals holds ISO 9001:2015 Quality Management System and GMP certificates for pharmaceuticals, nutraceuticals and ayurvedic products.',
  alternates: { canonical: '/quality' },
};

export default function QualityPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Quality', path: '/quality' }])} />
      <PageHero
        title="Quality"
        intro="Professionalism and ethical business practices, backed by recognised certifications."
        image="/images/events/eventia-award-presentation.webp"
        alt="A plaque being presented at an Eventia Pharmaceuticals professional meeting"
        position="center 40%"
      />

      <section className="wrap section-y">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="lead text-ink-soft">
            Quality is part of how we work with healthcare professionals, pharmaceutical manufacturers and business partners. Our commitment to
            integrity, transparency and customer satisfaction is supported by the certifications below.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20 md:space-y-28">
          {certifications.map((c, i) => (
            <article key={c.id} id={c.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <Reveal className={cn(i % 2 === 1 && 'lg:order-2')}>
                <figure className="mx-auto max-w-md overflow-hidden rounded-3xl bg-white p-3 shadow-[0_40px_80px_-40px_rgba(11,29,69,0.6)] ring-1 ring-ink/10">
                  <Photo src={c.image} alt={c.alt} ratio="3/4" sizes="(min-width:1024px) 40vw, 90vw" quality={85} className="rounded-2xl" />
                </figure>
              </Reveal>
              <div>
                <RevealText as="h2" text={c.title} className="h-title text-brand-deep" />
                <p className="h-sub mt-2 text-ink">{c.subtitle}</p>
                <dl className="mt-8 divide-y divide-ink/10 rounded-3xl bg-brand-mist p-2">
                  {c.details.map(([k, v]) => (
                    <div key={k} className="grid gap-1 px-5 py-4 sm:grid-cols-[11rem_1fr]">
                      <dt className="text-sm font-extrabold uppercase tracking-wider text-ink-soft">{k}</dt>
                      <dd className="font-semibold text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Questions about our quality standards?" text="Our team will be happy to share more about our certifications and processes." />
    </>
  );
}

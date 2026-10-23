import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Photo from '@/components/ui/Photo';
import { ClipReveal, Reveal, RevealText } from '@/components/ui/Reveal';
import LifeAtEventia from '@/components/home/LifeAtEventia';
import Values from '@/components/home/Values';
import CtaBand from '@/components/home/CtaBand';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumb } from '@/lib/schema';
import { owner, teamPhotos } from '@/data/company';
import { site } from '@/data/site';

export const metadata = {
  title: 'Our Team \u2013 People Behind Eventia',
  description:
    'Meet the Eventia Pharmaceuticals team: about 20 people serving around 3,000 clients across Gujarat, Maharashtra and Rajasthan.',
  alternates: { canonical: '/team' },
};

export default function TeamPage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Our Team', path: '/team' }])} />
      <PageHero
        title="Our Team"
        intro="The people who bring Eventia to life."
        image={teamPhotos.group.image}
        alt={teamPhotos.group.alt}
        position="center 30%"
      />

      <section className="wrap section-y">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <ClipReveal>
            <Photo src={owner.image} alt={owner.alt} ratio="3/4" position="center 20%" sizes="(min-width:1024px) 38vw, 100vw" className="mx-auto max-w-md rounded-3xl" />
          </ClipReveal>
          <div>
            <RevealText as="h2" text="Leadership" className="h-title text-brand-deep" />
            <Reveal delay={0.1}>
              <div className="mt-6 flex items-center gap-4 border-l-4 border-brand pl-4">
                <div>
                  <p className="text-2xl font-extrabold text-ink">{owner.name}</p>
                  <p className="text-ink-soft">{owner.role}, {site.name}</p>
                </div>
              </div>
              <p className="lead mt-6 text-ink-soft">
                Eventia is led by its owner, {owner.name}, together with a dedicated team of about {site.facts.team} people. Together they look after
                around {site.facts.clients.toLocaleString("en-IN")} clients, building long-term relationships with healthcare professionals, pharmaceutical manufacturers and
                business partners through integrity, transparency and a commitment to customer satisfaction.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist section-y" aria-label="Team on an outing">
        <div className="wrap">
          <ClipReveal>
            <div className="relative overflow-hidden rounded-3xl">
              <Image src={teamPhotos.outing.image} alt={teamPhotos.outing.alt} width={1600} height={720} sizes="(min-width:1320px) 1216px, 100vw" className="h-auto w-full" />
            </div>
          </ClipReveal>
          <Reveal className="mx-auto mt-10 max-w-3xl text-center">
            <p className="lead text-ink-soft">
              Beyond the work, we make time for each other. Team outings and shared celebrations are part of what keeps the Eventia family close.
            </p>
          </Reveal>
        </div>
      </section>

      <Values />
      <LifeAtEventia />
      <CtaBand title="Talk to the Eventia team" text="Whether you want to partner with us or simply learn more about Eventia, we would love to hear from you." />
    </>
  );
}

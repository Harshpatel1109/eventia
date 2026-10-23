import { Suspense } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/contact/ContactForm';
import { Reveal } from '@/components/ui/Reveal';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumb } from '@/lib/schema';
import { site } from '@/data/site';

export const metadata = {
  title: 'Contact Us \u2013 Mumbai & Ahmedabad',
  description:
    'Contact Eventia Pharmaceuticals: head office in Malad (West), Mumbai and an office on S.G. Highway, Ahmedabad. Call +91 98981 81701 or send a message.',
  alternates: { canonical: '/contact' },
};

function Row({ icon: Icon, children }) {
  return (
    <li className="flex gap-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-night">
        <Icon aria-hidden="true" className="size-[18px]" />
      </span>
      <div className="pt-1.5 text-[15px] leading-relaxed text-ink-soft">{children}</div>
    </li>
  );
}

export default function ContactPage() {
  const c = site.contact;
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([{ name: 'Home', path: '/' }, { name: 'Contact Us', path: '/contact' }]),
          { '@context': 'https://schema.org', '@type': 'ContactPage', name: `Contact ${site.name}`, url: `${site.url}/contact`, about: { '@id': `${site.url}/#organization` } },
        ]}
      />
      <PageHero
        title="Contact Us"
        intro="We would love to hear from you."
        image="/images/office/eventia-office-interior.webp"
        alt="Inside the Eventia Pharmaceuticals office"
        position="center 30%"
      />
      <section className="wrap section-y">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal className="space-y-12">
            <div>
              <h2 className="h-sub text-brand-deep">Get in touch</h2>
              <ul className="mt-6 space-y-5">
                <Row icon={Phone}>
                  <a href={c.phoneHref} className="text-lg font-bold text-ink hover:text-brand-deep">{c.phone}</a>
                </Row>
                <Row icon={Mail}>
                  <a href={`mailto:${c.email}`} className="break-all text-lg font-bold text-ink hover:text-brand-deep">{c.email}</a>
                </Row>
              </ul>
            </div>

            {site.offices.map((o) => (
              <div key={o.id}>
                <h2 className="h-sub text-brand-deep">{o.name}</h2>
                <ul className="mt-6 space-y-5">
                  <Row icon={MapPin}>
                    <address className="not-italic">{o.lines.join(' ')}</address>
                    <a href={o.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-bold text-brand-deep underline underline-offset-4 hover:text-night">
                      Get directions
                    </a>
                  </Row>
                </ul>
              </div>
            ))}

            <div className="rounded-3xl bg-brand-mist p-6 sm:p-8">
              <h2 className="h-sub text-ink">Who should contact us?</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                Healthcare professionals, pharmaceutical manufacturers and business partners are all welcome. Tell us what you need and we will respond as soon as we can.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
            <Suspense fallback={<div className="min-h-[520px] rounded-3xl bg-white shadow-lg" aria-busy="true" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}

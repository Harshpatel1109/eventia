import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { footerColumns } from '@/data/navigation';
import { site } from '@/data/site';

const socialPaths = {
  LinkedIn:
    'M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.44 13.2c0-3.1-1.65-4.55-3.86-4.55-1.78 0-2.58.98-3.03 1.67V8.5h-3.37c.04.95 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.69.13-.93.27-.69.9-1.4 1.95-1.4 1.37 0 1.92 1.05 1.92 2.59V20h3.38l-.49-6.8Z',
  Facebook:
    'M13.5 21v-7.5h2.52l.48-3H13.5V8.6c0-.87.3-1.6 1.6-1.6h1.5V4.3A18 18 0 0 0 14.4 4C12.1 4 10.5 5.4 10.5 8v2.5H8v3h2.5V21h3Z',
  'X (Twitter)':
    'M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.19L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43Z',
  Instagram:
    'M12 7.4A4.6 4.6 0 1 0 12 16.6 4.6 4.6 0 0 0 12 7.4Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0ZM21 8.1c-.07-1.45-.4-2.74-1.46-3.8S17.35 3.07 15.9 3C14.4 2.93 9.6 2.93 8.1 3 6.65 3.07 5.36 3.4 4.3 4.46S3.07 6.65 3 8.1c-.07 1.5-.07 6.3 0 7.8.07 1.45.4 2.74 1.46 3.8s2.35 1.39 3.8 1.46c1.5.07 6.3.07 7.8 0 1.45-.07 2.74-.4 3.8-1.46s1.39-2.35 1.46-3.8c.07-1.5.07-6.3 0-7.8ZM19.2 17.4a3.1 3.1 0 0 1-1.74 1.74c-1.2.48-4.05.37-5.46.37s-4.26.11-5.46-.37A3.1 3.1 0 0 1 4.8 17.4c-.48-1.2-.37-4.05-.37-5.4s-.11-4.26.37-5.46A3.1 3.1 0 0 1 6.54 4.8C7.74 4.32 10.59 4.43 12 4.43s4.26-.11 5.46.37a3.1 3.1 0 0 1 1.74 1.74c.48 1.2.37 4.05.37 5.46s.11 4.26-.37 5.4Z',
};

function Column({ title, children }) {
  return (
    <div>
      <h2 className="border-b border-white/15 pb-4 text-lg font-bold text-white">{title}</h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function Footer() {
  const socials = site.social.filter((s) => s.href);
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-night text-white/75">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand-deep/40 blur-3xl" />
      <div aria-hidden="true" className="hex pointer-events-none absolute -bottom-24 -left-16 size-72 bg-brand-deep/30" />
      <div className="wrap relative section-y !pb-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_0.8fr] lg:gap-10">
          <div>
            <Link href="/" aria-label={`${site.name} – home`} className="inline-block">
              <Image src={site.logoOnDark} alt={site.name} width={260} height={52} unoptimized className="h-11 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/70">
              {site.tagline}. Quality pharmaceutical products through reliable sourcing, responsible marketing and strong partnerships.
            </p>
            <ul className="mt-6 space-y-3 text-[15px]">
              <li className="flex items-center gap-3">
                <Phone aria-hidden="true" className="size-4 shrink-0 text-brand" />
                <a href={site.contact.phoneHref} className="transition-colors hover:text-brand">
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail aria-hidden="true" className="size-4 shrink-0 text-brand" />
                <a href={`mailto:${site.contact.email}`} className="break-all transition-colors hover:text-brand">
                  {site.contact.email}
                </a>
              </li>
            </ul>
            {socials.length > 0 && (
              <ul className="mt-6 flex gap-3">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      aria-label={`${site.shortName} on ${s.name}`}
                      className="grid size-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-brand hover:bg-brand hover:text-night"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[18px] fill-current">
                        <path d={socialPaths[s.name] || ''} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Column title="Our Offices">
            <ul className="space-y-5 text-[15px]">
              {site.offices.map((o) => (
                <li key={o.id} className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand" />
                  <address className="not-italic">
                    <span className="block font-semibold text-white">{o.name}</span>
                    {o.lines.join(' ')}
                    <a href={o.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm font-semibold text-brand hover:underline">
                      Get directions
                    </a>
                  </address>
                </li>
              ))}
            </ul>
          </Column>

          <Column title="Company">
            <ul className="space-y-3 text-[15px]">
              {footerColumns.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>

          <Column title="Legal">
            <ul className="space-y-3 text-[15px]">
              {footerColumns.legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-brand">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Column>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="wrap py-5 text-center text-sm text-white/60">
          Copyright © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

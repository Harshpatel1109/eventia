import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { faqs } from '@/data/company';

/** Native <details> accordion: accessible by default, works without JavaScript, and the answers stay in the HTML for search and AI engines. */
export default function Faq() {
  return (
    <section className="wrap section-y" aria-labelledby="faq-title">
      <SectionHeading title="Frequently Asked Questions" titleClassName="!text-brand-deep" />
      <Reveal className="mx-auto mt-12 max-w-3xl divide-y divide-ink/10 rounded-3xl bg-white ring-1 ring-ink/10">
        {faqs.map((f, i) => (
          <details key={f.q} className="group px-6 py-5 md:px-8" {...(i === 0 ? { open: true } : {})}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-bold text-brand-deep [&::-webkit-details-marker]:hidden">
              <h3 className="text-lg font-bold">{f.q}</h3>
              <ChevronDown aria-hidden="true" className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">{f.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}

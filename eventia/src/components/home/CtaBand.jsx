import Button from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/data/site';

/** Closing call-to-action, reused at the bottom of several pages. */
export default function CtaBand({ title = 'Partner with Eventia', text = 'Whether you are a healthcare professional, a pharmaceutical manufacturer or a business partner, we would love to hear from you.' }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-deep to-[#0a3d85] text-white" aria-label="Get in touch">
      <div aria-hidden="true" className="hex absolute -right-16 -top-24 size-[26rem] bg-brand/30" />
      <div aria-hidden="true" className="hex absolute -bottom-32 left-[8%] size-80 bg-white/[0.07]" />
      <div className="wrap relative section-y !py-16 md:!py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="h-title">{title}</h2>
          <p className="lead mt-5 text-white/80">{text}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="white">
              Contact Us
            </Button>
            <Button href={site.contact.phoneHref} variant="light" arrow={false}>
              Call {site.contact.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

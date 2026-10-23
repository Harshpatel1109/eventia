import ParallaxImage from './Parallax';

/** Inner-page hero: big photo, title anchored bottom-left, CSS-only entrance (works before JS loads). */
export default function PageHero({ title, intro, image, alt = '', position = 'center' }) {
  return (
    <section className="relative isolate flex min-h-[52svh] items-end overflow-hidden bg-night md:min-h-[64svh]">
      <ParallaxImage src={image} alt={alt} priority sizes="100vw" position={position} quality={75} />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/25 to-night/10" />
      <div className="wrap relative pb-10 pt-32 md:pb-16">
        <h1 className="overflow-hidden pb-[0.12em]">
          <span className="h-display block animate-line-up text-white">{title}</span>
        </h1>
        {intro && (
          <p className="lead mt-4 max-w-2xl animate-fade-up text-white/90 [animation-delay:350ms]">{intro}</p>
        )}
      </div>
    </section>
  );
}

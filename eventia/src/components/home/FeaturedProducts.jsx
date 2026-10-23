import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Carousel from '@/components/ui/Carousel';
import { Reveal } from '@/components/ui/Reveal';
import ProductCard from '@/components/products/ProductCard';
import { featuredSlugs, getProduct, products } from '@/data/products';

export default function FeaturedProducts() {
  const featured = featuredSlugs.map(getProduct).filter(Boolean);
  return (
    <section className="bg-brand-soft/70 section-y" aria-labelledby="featured-title">
      <div className="wrap">
        <SectionHeading
          title="Featured Products"
          titleClassName="!text-brand-deep"
          intro={`A selection from our portfolio of ${products.length} brands across orthopaedics, gynaecology, physician and general practice.`}
        />
        <Reveal className="mt-12">
          <Carousel label="Featured products" slideClassName="w-[85%] sm:w-[46%] lg:w-[31%] xl:w-[24%]" autoplay={7000}>
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </Carousel>
        </Reveal>
        <Reveal className="mt-10 text-center">
          <Button href="/products">View All Products</Button>
        </Reveal>
      </div>
    </section>
  );
}

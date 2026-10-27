import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { products } from "@/lib/products";
import { cn } from "@/lib/utils";

export default function ProductShowcase() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="py-20 sm:py-24"
    >
      {/* Product JSON-LD for better indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: products.map((p, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "Product",
                name: p.name,
                description: p.description,
                image: `https://giftsanitarynapkins.com${p.image}`,
                sku: `GSN-${p.id}`,
                brand: { "@type": "Brand", name: "Gift Sanitary Napkins" },
                offers: {
                  "@type": "Offer",
                  priceCurrency: "USD",
                  price: "0.00",
                  availability: "https://schema.org/InStock",
                },
              },
            })),
          }),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="products-heading"
          eyebrow="Our collection"
          title="Find your perfect comfort"
          description="A pad for every moment of your cycle — from busy days to restful nights."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <li key={product.id}>
              <Reveal delay={index * 0.1} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow duration-300 hover:shadow-[0_24px_60px_-28px_rgba(30,42,120,0.4)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={`Gift ${product.name} sanitary napkins`}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                      className={cn(
                        "object-cover transition-transform duration-700 group-hover:scale-[1.04]",
                        product.imagePosition
                      )}
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                      {product.tag}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {product.description}
                    </p>

                    <ul className="mt-6 flex-1 space-y-2.5">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-foreground"
                        >
                          <span className="flex size-5 items-center justify-center rounded-full bg-rose-soft text-rose-soft-foreground">
                            <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="#contact"
                      className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary"
                    >
                      Ask about {product.name}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

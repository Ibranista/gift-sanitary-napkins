"use client";

import dynamic from "next/dynamic";

const DynamicHeroCarousel = dynamic(() => import("./hero-carousel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 sm:h-80 lg:h-72 bg-white/90 rounded-2xl" />
  ),
});

export default function HeroCarouselLoader(props: any) {
  return <DynamicHeroCarousel {...props} />;
}

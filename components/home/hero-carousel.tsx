"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

type Item = { image: string; title: string; description: string };

export default function HeroCarousel({ items }: { items: Item[] }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCurrent((c) => (c + 1) % items.length);
    }, 4000) as unknown as number;
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [items.length]);

  return (
    <div className="w-full">
      <div className="relative">
        <div className="relative w-full h-48 sm:h-64 lg:h-72">
          <Image
            src={items[current].image}
            alt={items[current].title}
            fill
            className="object-contain rounded-2xl"
            sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, 500px"
            priority={false}
          />
        </div>
        <div className="mt-4 px-2 text-center">
          <h4 className="text-lg font-semibold text-gray-800">
            {items[current].title}
          </h4>
          <p className="text-sm text-gray-700 mt-2">
            {items[current].description}
          </p>
        </div>
      </div>

      <div
        className="flex items-center justify-center gap-2 mt-4"
        role="tablist"
        aria-label="Carousel slides"
      >
        {items.map((_, i) => (
          <button
            key={i}
            aria-current={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full ${
              i === current ? "bg-rose-500 w-8" : "bg-pink-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

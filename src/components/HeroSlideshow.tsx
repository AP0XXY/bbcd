"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero/hero-1.webp",
    title: "Painting, Waterproofing & Restoration",
    subtitle:
      "Over 45 years of experience delivering premier waterproofing and renovation services across South Florida.",
  },
  {
    image: "/images/hero/hero-2.webp",
    title: "Interior Design & Renovation",
    subtitle:
      "Custom design solutions for lobbies, common areas, and residences — from concept to completion.",
  },
  {
    image: "/images/hero/hero-3.webp",
    title: "Luxury Kitchen & Bathroom Remodeling",
    subtitle:
      "Transform your space with premium materials, expert craftsmanship, and the best warranty in South Florida.",
  },
  {
    image: "/images/hero/hero-4.webp",
    title: "Miami's Trusted General Contractor",
    subtitle:
      "Licensed General Contractor CGC#1530584 — serving condos, HOAs, and homeowners throughout South Florida.",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="transition-all duration-700 ease-in-out absolute"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "translateY(0)" : "translateY(20px)",
                  pointerEvents: i === current ? "auto" : "none",
                }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                  {slide.subtitle}
                </p>
              </div>
            ))}
            {/* Static CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-[200px] md:pt-[220px]">
              <Link
                href="/request-a-quote"
                className="bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-md text-lg transition-colors shadow-lg"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/the-work"
                className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-md text-lg transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

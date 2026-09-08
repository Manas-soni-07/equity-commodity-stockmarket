"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Play, Pause } from "lucide-react";
import { HERO_SLIDES } from "@/data/slider";

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative w-full bg-[#061121] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Carousel of Market Research Services"
    >
      {/* Aspect Ratio Container: 600px on mobile, 660px on tablet, 720px on desktop */}
      <div className="relative h-[560px] sm:h-[620px] lg:h-[700px] w-full">
        {/* Slides rendering */}
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              {/* Background Image with Next.js Image */}
              <div className="relative w-full h-full">
                <Image
                  src={slide.imageUrl}
                  alt={slide.imageAlt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center transform scale-105 transition-transform duration-[6000ms] ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                {/* Premium Gradient Overlay: Deep Navy gradient for perfect contrast and readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#061121]/95 via-[#0A192F]/85 to-[#061121]/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061121] via-transparent to-transparent opacity-80" />
              </div>

              {/* Slide Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl lg:max-w-3xl space-y-5 sm:space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      <span className="text-xs sm:text-sm font-semibold tracking-wide text-amber-300 uppercase">
                        {slide.badge}
                      </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                      {slide.subtitle}
                    </p>

                    {/* CTAs */}
                    <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                      <Link
                        href={slide.primaryCtaLink}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-[#0A192F] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg shadow-amber-500/25 transition-all duration-200 group"
                      >
                        <span>{slide.primaryCtaText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        href={slide.secondaryCtaLink}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700/80 backdrop-blur-sm transition-all duration-200"
                      >
                        <span>{slide.secondaryCtaText}</span>
                      </Link>
                    </div>

                    {/* Micro trust note */}
                    <div className="pt-2 text-xs text-slate-400 flex items-center gap-3">
                      <span>✓ NSE & BSE Equities</span>
                      <span>•</span>
                      <span>✓ MCX Commodities</span>
                      <span>•</span>
                      <span>✓ Non-Advisory Research</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Previous & Next Slide Controls */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-6 pointer-events-none z-20">
          <button
            onClick={prevSlide}
            type="button"
            className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-[#0A192F]/70 hover:bg-amber-500 hover:text-[#0A192F] text-white border border-slate-700/60 backdrop-blur-md transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            type="button"
            className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-[#0A192F]/70 hover:bg-amber-500 hover:text-[#0A192F] text-white border border-slate-700/60 backdrop-blur-md transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Bottom Bar: Indicators & Slide Counter */}
        <div className="absolute bottom-6 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Dots navigation */}
            <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`group relative rounded-full transition-all duration-300 focus:outline-none ${
                    idx === currentIndex
                      ? "w-8 sm:w-10 h-2.5 bg-amber-400"
                      : "w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                  aria-current={idx === currentIndex ? "true" : "false"}
                />
              ))}
            </div>

            {/* Slide Index Counter & Pause/Play */}
            <div className="flex items-center gap-3 bg-[#0A192F]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800 text-xs font-mono text-slate-300">
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="hover:text-amber-400 transition-colors"
                aria-label={isPaused ? "Play auto slider" : "Pause auto slider"}
                title={isPaused ? "Resume auto play" : "Pause auto play"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
              <span>
                Slide {String(currentIndex + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
              </span>
              <span className="text-amber-400 hidden sm:inline">•</span>
              <span className="text-slate-400 hidden sm:inline">{currentSlide.tag}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

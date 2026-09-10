"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Play, Pause } from "lucide-react";
import { HERO_SLIDES } from "@/data/slider";

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Touch gesture support for mobile swiping
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay with 5.5s duration; loops infinitely
  useEffect(() => {
    if (isPaused || isHovered) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, isHovered, nextSlide]);

  // Desktop hover pause; mobile ignores hover to keep playing
  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setIsHovered(false);
    }
  };

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

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
      className="relative w-full bg-slate-900 overflow-hidden select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero Carousel of Market Research Services"
    >
      {/* Full-width container: 620-660px on mobile, 700-740px on desktop */}
      <div className="relative h-[620px] sm:h-[660px] lg:h-[730px] w-full">
        {/* Slides rendering */}
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          const isContentRight = slide.contentPosition === "right";

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                }`}
              aria-hidden={!isActive}
            >
              {/* Layer 0: Background Cinematic Image */}
              <div className="absolute inset-0 overflow-hidden z-0">
                <Image
                  src={slide.imageUrl}
                  alt={slide.imageAlt}
                  fill
                  priority={index === 0}
                  className={`hero-slider-img object-cover ${isActive ? "hero-ken-burns" : "scale-100"
                    }`}
                  style={
                    {
                      "--pos-desktop": slide.objectPosition || "center center",
                      "--pos-mobile": slide.mobileObjectPosition || slide.objectPosition || "center center",
                    } as React.CSSProperties
                  }
                  sizes="100vw"
                />
              </div>

              {/* Layer 1: Subtle Premium Light/White Research Theme Overlay */}
              <div className="absolute pointer-events-none overflow-hidden">
                {isContentRight ? (
                  <>
                    {/* Desktop: Gentle white gradient concentrated behind text on the right */}
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-white/95 via-white/80 via-45% to-white/10" />
                    {/* Mobile: Gradient concentrated from bottom up */}
                    <div className="md:hidden absolute inset-0 bg-gradient-to-t from-white/98 via-white/90 via-60% to-white/30" />
                  </>
                ) : (
                  <>
                    {/* Desktop: Gentle white gradient concentrated behind text on the left */}
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-45% to-white/10" />
                    {/* Mobile: Gradient concentrated from bottom up */}
                    <div className="md:hidden absolute inset-0 bg-gradient-to-t from-white/98 via-white/90 via-60% to-white/30" />
                  </>
                )}

                {/* Soft top border fade and bottom blend into the page */}
                <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-slate-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/50 to-transparent" />
              </div>

              {/* Layer 2: Slide Content */}
              <div className="absolute inset-0 z-20 flex items-center">
                {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className={`flex w-full ${isContentRight ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[600px] w-full p-5 sm:p-7 lg:p-8 rounded-2xl bg-white/70 sm:bg-white/55 backdrop-blur-md border border-white/80 shadow-xl shadow-slate-900/5 transition-all duration-700 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                        }`}
                    >
  
                      <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-400/40 shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-xs sm:text-sm font-bold tracking-wider text-amber-900 uppercase">
                          {slide.badge}
                        </span>
                      </div>

                     
                      <h1 className="mt-3.5 sm:mt-4 text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A192F] tracking-tight leading-[1.15]">
                        {slide.title}
                      </h1>

                   
                      <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg text-slate-700 font-normal leading-relaxed">
                        {slide.subtitle}
                      </p>

                 
                      <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                        <Link
                          href={slide.primaryCtaLink}
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#0A192F] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-md shadow-amber-500/20 hover:shadow-lg transition-all duration-200 group"
                        >
                          <span>{slide.primaryCtaText}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                          href={slide.secondaryCtaLink}
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-800 bg-white/90 hover:bg-white border border-slate-300 hover:border-slate-400 shadow-xs transition-all duration-200"
                        >
                          <span>{slide.secondaryCtaText}</span>
                        </Link>
                      </div>

                     
                      <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs text-slate-600 font-medium flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="inline-flex items-center gap-1 text-slate-700">✓ NSE & BSE Equities</span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1 text-slate-700">✓ MCX Commodities</span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1 text-slate-700">✓ Non-Advisory Research</span>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          );
        })}

        {/* Previous & Next Slide Controls (z-30) */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-6 pointer-events-none z-30">
          <button
            onClick={prevSlide}
            type="button"
            className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-white/80 hover:bg-white text-slate-800 hover:text-[#0A192F] border border-slate-200/90 backdrop-blur-md transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            type="button"
            className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-white/80 hover:bg-white text-slate-800 hover:text-[#0A192F] border border-slate-200/90 backdrop-blur-md transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Bottom Navigation Bar: Indicators & Slide Tracker (z-30) */}
        <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-30 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* 9 Indicator Dots */}
            <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-sm">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`group relative rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${idx === currentIndex
                      ? "w-7 sm:w-9 h-2.5 bg-gradient-to-r from-amber-500 to-amber-600 shadow-xs"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-500"
                    }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                  aria-current={idx === currentIndex ? "true" : "false"}
                />
              ))}
            </div>

            {/* Slide Counter & Pause/Play */}
            <div className="pointer-events-auto flex items-center gap-3 bg-white/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/90 text-xs font-mono text-slate-700 shadow-sm">
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-700 hover:text-amber-600 transition-colors focus:outline-none"
                aria-label={isPaused ? "Play auto slider" : "Pause auto slider"}
                title={isPaused ? "Resume autoplay" : "Pause autoplay"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
              </button>
              <span className="font-semibold text-slate-900">
                Slide {String(currentIndex + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
              </span>
              <span className="text-amber-500 hidden sm:inline">•</span>
              <span className="text-slate-600 font-sans font-medium hidden sm:inline">{currentSlide.tag}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


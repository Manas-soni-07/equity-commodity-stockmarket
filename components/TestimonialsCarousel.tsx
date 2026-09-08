"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";

const GAP = 16; // 16px gap between cards
const CYCLE_DURATION = 40; // 40 seconds for one full loop of all 18 cards

export default function TestimonialsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [cardWidth, setCardWidth] = useState<number>(220);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Animation & interaction refs (bypasses React state to maintain buttery 60fps GPU animation)
  const offsetRef = useRef<number>(0);
  const singleSetWidthRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const isHoveredRef = useRef<boolean>(false);
  const isAnimatingStepRef = useRef<boolean>(false);
  const isTouchingRef = useRef<boolean>(false);
  const touchStartXRef = useRef<number>(0);
  const touchStartOffsetRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);

  // Triplicate array so the visible window can loop seamlessly without boundary jumps
  const cards = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  // Helper to normalize offset within [0, singleSetWidth)
  const normalizeOffset = useCallback(() => {
    const sw = singleSetWidthRef.current;
    if (sw <= 0) return;
    while (offsetRef.current >= sw) {
      offsetRef.current -= sw;
    }
    while (offsetRef.current < 0) {
      offsetRef.current += sw;
    }
  }, []);

  // Responsive card dimension calculation
  const calculateDimensions = useCallback(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    if (width <= 0) return;

    let count = 6;
    if (width < 480) {
      count = 1;
    } else if (width < 768) {
      count = 2;
    } else if (width < 1024) {
      count = 3;
    } else if (width < 1280) {
      count = 4;
    } else {
      count = 6;
    }

    setVisibleCount(count);
    const calculatedWidth = (width - (count - 1) * GAP) / count;
    setCardWidth(calculatedWidth);
    singleSetWidthRef.current = TESTIMONIALS_DATA.length * (calculatedWidth + GAP);
    setIsReady(true);
  }, []);

  // Resize listener
  useEffect(() => {
    calculateDimensions();
    const handleResize = () => calculateDimensions();
    window.addEventListener("resize", handleResize, { passive: true });

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      ro = new ResizeObserver(() => calculateDimensions());
      ro.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (ro) ro.disconnect();
    };
  }, [calculateDimensions]);

  // Main animation loop: requestAnimationFrame with translate3d
  useEffect(() => {
    lastTimeRef.current = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = now;

      const sw = singleSetWidthRef.current;
      if (
        !isPausedRef.current &&
        !isAnimatingStepRef.current &&
        !isTouchingRef.current &&
        sw > 0
      ) {
        const speed = sw / CYCLE_DURATION; // px per second
        offsetRef.current += speed * dt;
        normalizeOffset();

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [normalizeOffset]);

  // Smooth easing step animation for arrow clicks and swipe snaps
  const smoothStepTo = useCallback(
    (targetOffset: number, duration = 400) => {
      isAnimatingStepRef.current = true;
      const startOffset = offsetRef.current;
      const change = targetOffset - startOffset;
      const startTime = performance.now();

      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const stepTween = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);

        offsetRef.current = startOffset + change * eased;
        normalizeOffset();

        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }

        if (progress < 1) {
          requestAnimationFrame(stepTween);
        } else {
          isAnimatingStepRef.current = false;
          // Resume auto-scrolling after a short reading pause if user is not hovering
          setTimeout(() => {
            if (!isHoveredRef.current) {
              isPausedRef.current = false;
              lastTimeRef.current = performance.now();
            }
          }, 800);
        }
      };

      requestAnimationFrame(stepTween);
    },
    [normalizeOffset]
  );

  // Arrow navigation: moves exactly 1 card position
  const handlePrev = useCallback(() => {
    const step = cardWidth + GAP;
    smoothStepTo(offsetRef.current - step);
  }, [cardWidth, smoothStepTo]);

  const handleNext = useCallback(() => {
    const step = cardWidth + GAP;
    smoothStepTo(offsetRef.current + step);
  }, [cardWidth, smoothStepTo]);

  // Desktop hover pause / resume
  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    if (!isAnimatingStepRef.current && !isTouchingRef.current) {
      isPausedRef.current = false;
      lastTimeRef.current = performance.now();
    }
  };

  // Touch gesture support on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    isTouchingRef.current = true;
    touchStartXRef.current = e.touches[0].clientX;
    touchStartOffsetRef.current = offsetRef.current;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouchingRef.current) return;
    const deltaX = touchStartXRef.current - e.touches[0].clientX;
    offsetRef.current = touchStartOffsetRef.current + deltaX;
    normalizeOffset();

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isTouchingRef.current) return;
    isTouchingRef.current = false;
    const endX = e.changedTouches[0]?.clientX ?? touchStartXRef.current;
    const deltaX = touchStartXRef.current - endX;
    const step = cardWidth + GAP;

    if (Math.abs(deltaX) > 40) {
      const direction = deltaX > 0 ? 1 : -1;
      smoothStepTo(touchStartOffsetRef.current + direction * step, 350);
    } else {
      smoothStepTo(touchStartOffsetRef.current, 200);
    }
  };

  return (
    <div className="w-full">
      {/* Section Header with Title & Minimal Navigation Arrows */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed max-w-2xl">
            Real perspectives from market participants and research users.
          </p>
          <div className="mt-2.5 inline-block bg-slate-200/80 text-slate-600 text-xs px-3 py-1 rounded-full">
            *Sample / Demo testimonials for layout presentation. Replace with verified client reviews upon launch.
          </div>
        </div>

        {/* Minimal Premium Arrow Controls */}
        <div className="flex items-center gap-2.5 self-start md:self-end shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            className="p-2.5 sm:p-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0A192F] border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Previous testimonial"
            title="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="p-2.5 sm:p-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0A192F] border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Next testimonial"
            title="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Viewport Container: 100% width, strictly overflow-hidden, zero horizontal page scroll */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden py-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Soft edge fade masks for seamless entry/exit */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-12 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-12 bg-gradient-to-l from-slate-50 via-slate-50/70 to-transparent z-10" />

        {/* Scrolling Strip Track */}
        <div
          ref={trackRef}
          className="flex items-stretch will-change-transform"
          style={{
            gap: `${GAP}px`,
            width: "max-content",
          }}
        >
          {cards.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="shrink-0 flex-none h-full"
              style={{
                width: isReady ? `${cardWidth}px` : undefined,
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

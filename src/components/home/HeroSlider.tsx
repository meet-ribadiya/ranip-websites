"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { HERO_SLIDES, HERO_STATS, SITE_CONFIG } from "@/lib/constants";

const meshBgStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
};

const statsList = HERO_STATS;

const primaryCallHref = `tel:${SITE_CONFIG.phones[0]}`;
const primaryCallLabel = SITE_CONFIG.phones[0];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const touchDeltaRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const totalSlides = HERO_SLIDES.length;

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 550);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % totalSlides);
  const prevSlide = () =>
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleTouchStart = (e: TouchEvent<HTMLElement>) => {
    const touch = e.touches[0];
    if (!touch) return;
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    touchDeltaRef.current = { x: 0, y: 0 };
    setIsPaused(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLElement>) => {
    const start = touchStartRef.current;
    const touch = e.touches[0];
    if (!start || !touch) return;
    touchDeltaRef.current = {
      x: touch.clientX - start.x,
      y: touch.clientY - start.y,
    };
  };

  const handleTouchEnd = () => {
    const { x, y } = touchDeltaRef.current;
    const isHorizontalSwipe = Math.abs(x) > Math.abs(y) * 1.25 && Math.abs(x) > 42;
    if (isHorizontalSwipe) {
      if (x < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartRef.current = null;
    touchDeltaRef.current = { x: 0, y: 0 };
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentSlide((current) => (current + 1) % totalSlides);
      setTimeout(() => setIsAnimating(false), 550);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides, currentSlide]);

  const slide = HERO_SLIDES[currentSlide];
  const isExternalCta = slide.ctaLink.startsWith("http");
  const ctaTarget = isExternalCta ? "_blank" : undefined;
  const ctaRel = isExternalCta ? "noopener noreferrer" : undefined;
  const ctaId = `hero-cta-${slide.id}`;
  const slideCounterText = `${currentSlide + 1} / ${totalSlides}`;

  const badgeStyle = {
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating ? "translateY(18px)" : "translateY(0)",
    transition: "all 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.08s",
  };

  const headlineStyle = {
    fontFamily: "var(--font-playfair)",
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating ? "translateY(24px)" : "translateY(0)",
    transition: "all 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.16s",
  };

  const subtitleStyle = {
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating ? "translateY(18px)" : "translateY(0)",
    transition: "all 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.28s",
  };

  const ctaGroupStyle = {
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating ? "translateY(16px)" : "translateY(0)",
    transition: "all 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.38s",
  };

  const statsStyle = {
    opacity: isAnimating ? 0 : 1,
    transition: "all 0.55s ease 0.48s",
  };

  const slideLayers = HERO_SLIDES.map((item, index) => {
    const isCurrent = index === currentSlide;
    const layerCls = `absolute inset-0 transition-opacity duration-1000 ${
      isCurrent ? "z-10 opacity-100" : "z-0 opacity-0"
    }`;
    const imgCls = `object-cover object-center transition-transform duration-[10000ms] ease-out ${
      isCurrent ? "scale-105" : "scale-100"
    }`;
    const imgAlt = `${item.title} ${item.titleHighlight}`;
    const isPriority = index === 0;
    return (
      <div key={item.id} className={layerCls}>
        <Image
          src={item.image}
          alt={imgAlt}
          fill
          className={imgCls}
          priority={isPriority}
          sizes="100vw"
        />
      </div>
    );
  });

  const slideIndicators = HERO_SLIDES.map((item, index) => {
    const isCurrent = index === currentSlide;
    const dotCls = `rounded-full transition-all duration-300 ${
      isCurrent
        ? "h-2.5 w-8 bg-[#F59E0B]"
        : "h-2.5 w-2.5 bg-white/50 hover:bg-white/80"
    }`;
    const ariaLabel = `Go to slide ${index + 1}`;
    const handleClick = () => goToSlide(index);
    return (
      <button
        key={item.id}
        type="button"
        onClick={handleClick}
        aria-label={ariaLabel}
        className={dotCls}
      />
    );
  });

  const statPills = statsList.map((stat) => (
    <div
      key={stat.label}
      className="glass flex items-center gap-2 rounded-full px-4 py-2"
    >
      <span className="text-sm font-bold text-white">{stat.label}</span>
      <span className="text-xs text-white/65">{stat.sub}</span>
    </div>
  ));

  return (
    <section
      className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden touch-pan-y select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero image slider"
    >
      {slideLayers}

      <div className="absolute inset-0 z-20 hero-gradient" />

      <div className="absolute inset-0 z-20 opacity-10" style={meshBgStyle} />

      <div className="absolute inset-0 z-30 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-0">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-5 sm:mb-6"
              style={badgeStyle}
            >
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] float-animation" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">
                SSIS Ranip — Shree Swaminarayan International School
              </span>
            </div>

            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
              style={headlineStyle}
            >
              {slide.title}
              <br />
              <span className="text-gradient-gold">{slide.titleHighlight}</span>
            </h1>

            <p
              className="text-white/85 text-base sm:text-xl mb-7 sm:mb-8 max-w-xl leading-relaxed"
              style={subtitleStyle}
            >
              {slide.subtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4"
              style={ctaGroupStyle}
            >
              <a
                href={slide.ctaLink}
                target={ctaTarget}
                rel={ctaRel}
                className="btn-primary justify-center text-base"
                id={ctaId}
              >
                {slide.cta}
              </a>
              <a
                href={primaryCallHref}
                className="btn-secondary justify-center text-base"
                id="hero-call-btn"
              >
                <Phone size={17} />
                {primaryCallLabel}
              </a>
            </div>

            <div
              className="flex flex-wrap gap-2.5 sm:gap-3 mt-8 sm:mt-10"
              style={statsStyle}
            >
              {statPills}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop navigation arrows — hidden on small mobile where touch swipe is used */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full glass items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        id="slider-prev-btn"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full glass items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        id="slider-next-btn"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-11 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
        {slideIndicators}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-10 sm:bottom-8 right-4 sm:right-8 z-40 text-white/75 text-xs sm:text-sm font-medium glass px-3 py-1.5 rounded-full">
        {slideCounterText}
      </div>
    </section>
  );
}

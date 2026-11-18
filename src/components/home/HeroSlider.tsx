"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { HERO_SLIDES, SITE_CONFIG } from "@/lib/constants";

const meshBgStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
};

const statsList = [
  { label: "3,000+ Students", sub: "2-Acre AC Campus" },
  { label: "Est. 2012", sub: "Gurukul Trust (1992)" },
];

const primaryCallHref = `tel:${SITE_CONFIG.phones[0]}`;
const primaryCallLabel = SITE_CONFIG.phones[0];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = HERO_SLIDES.length;

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % totalSlides);
  const prevSlide = () =>
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentSlide((current) => (current + 1) % totalSlides);
      setTimeout(() => setIsAnimating(false), 600);
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
    transform: isAnimating ? "translateY(20px)" : "translateY(0)",
    transition: "all 0.6s ease 0.1s",
  };

  const headlineStyle = {
    fontFamily: "var(--font-playfair)",
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating ? "translateY(30px)" : "translateY(0)",
    transition: "all 0.6s ease 0.2s",
  };

  const subtitleStyle = {
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating ? "translateY(20px)" : "translateY(0)",
    transition: "all 0.6s ease 0.35s",
  };

  const ctaGroupStyle = {
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating ? "translateY(20px)" : "translateY(0)",
    transition: "all 0.6s ease 0.5s",
  };

  const statsStyle = {
    opacity: isAnimating ? 0 : 1,
    transition: "all 0.6s ease 0.65s",
  };

  const slideLayers = HERO_SLIDES.map((item, index) => {
    const isCurrent = index === currentSlide;
    const layerCls = `absolute inset-0 transition-opacity duration-1000 ${
      isCurrent ? "z-10 opacity-100" : "z-0 opacity-0"
    }`;
    const imgCls = `object-cover object-center transition-transform duration-[10000ms] ${
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
      <span className="text-xs text-white/60">{stat.sub}</span>
    </div>
  ));

  return (
    <section
      className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Hero image slider"
    >
      {slideLayers}

      <div className="absolute inset-0 z-20 hero-gradient" />

      <div className="absolute inset-0 z-20 opacity-10" style={meshBgStyle} />

      <div className="absolute inset-0 z-30 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
              style={badgeStyle}
            >
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] float-animation" />
              <span className="text-white/90 text-sm font-medium">
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
              className="text-white/80 text-lg sm:text-xl mb-8 max-w-xl leading-relaxed"
              style={subtitleStyle}
            >
              {slide.subtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={ctaGroupStyle}
            >
              <a
                href={slide.ctaLink}
                target={ctaTarget}
                rel={ctaRel}
                className="btn-primary text-base"
                id={ctaId}
              >
                {slide.cta}
              </a>
              <a
                href={primaryCallHref}
                className="btn-secondary text-base"
                id="hero-call-btn"
              >
                <Phone size={17} />
                {primaryCallLabel}
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mt-10" style={statsStyle}>
              {statPills}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        id="slider-prev-btn"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        id="slider-next-btn"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2">
        {slideIndicators}
      </div>

      <div className="absolute bottom-8 right-8 z-40 text-white/60 text-sm font-medium glass px-3 py-1.5 rounded-full">
        {slideCounterText}
      </div>

      <div className="absolute bottom-8 left-8 z-40 hidden sm:flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-widest rotate-90">
          SCROLL
        </span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </div>
    </section>
  );
}

# SSIS Ranip — Project Documentation & Developer Guide

Official modern website for **Shree Swaminarayan International School (SSIS Ranip)**, Ahmedabad, Gujarat.

---

## 1. Technology Stack

| Category | Technology | Version | Purpose |
|---|---|---|---|
| **Framework** | Next.js (App Router + Turbopack) | `16.4.6` | Static/SSR React framework, SEO metadata, image optimization |
| **UI Library** | React & React DOM | `19.3.1` | Server & Client Components |
| **Language** | TypeScript | `5.x` | Strict static type checking |
| **Styling** | Tailwind CSS + `@tailwindcss/postcss` | `4.x` | Utility-first responsive CSS & design tokens |
| **Icons** | `lucide-react` | `^1.66.0` | Consistent vector UI icons (+ official brand SVGs in Footer) |
| **Typography** | Google Fonts (`Playfair Display`, `Poppins`, `Inter`) | CDN (`display=swap`) | Editorial serif headings & clean sans-serif body |
| **Linting** | ESLint + `eslint-config-next` | `9.x` | Code quality & React hook safety |

> **Zero bloat:** Only 4 production dependencies (`next`, `react`, `react-dom`, `lucide-react`). No heavy animation libraries or external runtime trackers.

---

## 2. Complete Folder & File Structure

```text
ssis-website/
├── next.config.ts                 # Image formats (AVIF/WebP) & Production Security Headers (CSP, HSTS, etc.)
├── package.json                   # Scripts & dependencies
├── tsconfig.json                  # TypeScript configuration
├── PROJECT_DOCUMENTATION.md       # This developer & content guide
├── public/                        # Static local school assets (served from "/")
│   ├── logo-ssisranip.webp        # Official school logo
│   ├── banner11.webp              # Campus & default page banner
│   ├── banner2.webp               # Classroom & Our Story photo
│   ├── banner44.webp              # Sports & Academics banner
│   ├── banner5.jpg                # Hero slide 1 & Careers banner
│   ├── banner6.webp               # Cultural activities banner
│   ├── banner66-scaled.webp       # Gallery page banner
│   ├── bg-kids2-min-1.jpg         # Homepage About photo
│   └── result-bg.webp             # Homepage Hall of Fame / Sports photo
└── src/
    ├── lib/
    │   └── constants.ts           # ★ SINGLE SOURCE OF TRUTH for ALL text, links, contacts & image paths
    ├── app/
    │   ├── globals.css            # Design tokens, typography rules, scroll-reveal & expand animations
    │   ├── layout.tsx             # Root layout (HTML, fonts, metadata, Navbar, Footer, Loader, FloatingButtons)
    │   ├── loading.tsx            # Route transition loading fallback with official school logo
    │   ├── not-found.tsx          # Custom branded 404 page
    │   ├── robots.ts              # Dynamic robots.txt generator
    │   ├── sitemap.ts             # Dynamic sitemap.xml generator
    │   ├── page.tsx               # Homepage (HeroSlider + HomeSections)
    │   ├── about-us/page.tsx      # About Us, Animated Stats, Vision & Mission, Director/Principal Messages, Faculty
    │   ├── academics/page.tsx     # Streams, JEE/NEET, 14 Facilities, Parent's & Student's Corner, News
    │   ├── gallery/page.tsx       # Photo Gallery, 14 Albums, Video Gallery, 26 Events, Sports, Tours & Excursions
    │   ├── careers/page.tsx       # Career qualities & interactive Career Application Form
    │   ├── contact/page.tsx       # Contact details, Embedded Campus Map, & interactive Contact Form
    │   ├── privacy-policy/page.tsx
    │   ├── term-condition/page.tsx
    │   └── refund-cancellation/page.tsx
    └── components/
        ├── layout/
        │   ├── Navbar.tsx         # Sticky responsive navbar, logo scroll-to-top, mobile watermark drawer
        │   └── Footer.tsx         # Compact 4-column footer, dynamic year, official SVG social icons
        ├── home/
        │   ├── HeroSlider.tsx     # 5-slide hero with desktop arrows & mobile touch-swipe
        │   ├── HomeSections.tsx   # Main homepage storytelling sections
        │   ├── ExperienceCards.tsx# Desktop hover elevation + mobile Read More/Less cards
        │   ├── NewsCards.tsx      # Compact mobile Read More/Less school news cards
        │   ├── LifeAtSsisGallery.tsx # Desktop 4-panel expanding accordion + Mobile swipeable carousel & lightbox
        │   └── AdmissionsContactCard.tsx # Highlighted primary helpline + expandable alternate numbers
        ├── about/
        │   ├── AboutSectionNav.tsx# Desktop sticky section navigator with IntersectionObserver active pill
        │   └── AboutStats.tsx     # Viewport-triggered eased count-up statistics cards
        ├── academics/
        │   └── AcademicsSectionNav.tsx # Desktop sticky section navigator for Academics
        └── ui/
            ├── CampusLocationCard.tsx # Reusable dark navy campus card with lazy no-key Google Maps embed
            ├── CareerForm.tsx     # Client-side validated career enquiry form
            ├── ContactForm.tsx    # Client-side validated contact enquiry form
            ├── CurrentYear.tsx    # Hydration-safe dynamic copyright year
            ├── FloatingButtons.tsx# Scroll-to-top, WhatsApp & Call Us floating buttons
            ├── MobileExpandable.tsx # Reusable mobile Read More / Read Less smooth CSS grid accordion
            ├── PageIntro.tsx      # Shared mixed-color page hero banner
            ├── PageLoader.tsx     # Initial splash loader with official school logo
            ├── RevealOnScroll.tsx # Lightweight IntersectionObserver scroll-reveal wrapper
            └── SectionHeading.tsx # Shared mixed-color section heading with gold accent line
```

---

## 3. How to Edit Text Content & Images (Single-File Control)

All important website text, contact numbers, URLs, and image filenames are centralized inside:

**`src/lib/constants.ts`**

| Export Constant | What It Controls |
|---|---|
| `SITE_IMAGES` | Every image URL used across the site (hosted on Cloudinary CDN under `https://res.cloudinary.com/dhyji1ffs/image/upload/...` — `logo`, `ogImage`, `homeAboutPhoto`, `homeSportsPhoto`, `aboutStoryPhoto`, all page banners & hero slides). Update any URL here to change the image site-wide. |
| `SITE_CONFIG` | School name, address, phone numbers, landline, WhatsApp, emails, ERP Login URL, Admission Portal URL, social media URLs, Vision, Mission, and Prayer quote. |
| `NAV_LINKS` | Primary navigation menu labels and dropdown items. |
| `PAGE_INTROS` | Hero eyebrows, mixed-color titles, descriptions, and banner images for every inner page. |
| `HERO_SLIDES` & `HERO_STATS` | Homepage 5-slide hero text, CTAs, and badge stats. |
| `EXPERIENCE_PILLARS` | Homepage "The SSIS Experience" cards (title, mobile summary, full details). |
| `HOME_FEATURED_NEWS` & `SCHOOL_NEWS` | Homepage featured news and full Academics news chronicles. |
| `LIFE_AT_SSIS_SPOTLIGHT` & `GALLERY_IMAGES` | Homepage editorial gallery accordion/carousel and Gallery page photos. |
| `ABOUT_STATS`, `ABOUT_PARAGRAPHS`, `DIRECTORS_MESSAGE`, `PRINCIPALS_MESSAGE`, `FACULTY_LIST` | All About Us page statistics, story, leadership messages, and faculty tables. |
| `ACADEMIC_WINGS`, `COURSES_HIGHLIGHTS`, `FACILITIES`, `PARENTS_CORNER`, `STUDENTS_CORNER` | All Academics page content, JEE/NEET points, 14 facilities, PTM schedule, rules, and school timings. |
| `SCHOOL_EVENTS`, `SPORTS_DATA`, `TOURS_DATA`, `VIDEO_GALLERY` | All 26 events, sports achievements, Hall of Fame stars, YouTube videos, and excursions. |
| `CAREER_QUALITIES` | Career page feature cards. |

---

## 4. Security Architecture (Production-Ready)

The website is hardened for production deployment:

1. **HTTP Security Headers & Strict Image Allowlist (`next.config.ts`)**:
   - `images.remotePatterns`: Strictly locked to `https://res.cloudinary.com/dhyji1ffs/image/upload/**` so Next.js Image Optimization only proxies images from the school's verified Cloudinary account.
   - `Content-Security-Policy (CSP)`: Restricts script, style, font, image, and frame origins strictly to `'self'`, `https://res.cloudinary.com/dhyji1ffs/`, Google Fonts, Google Maps embed, and YouTube thumbnails; blocks `<object>` (`object-src 'none'`) and clickjacking (`frame-ancestors 'self'`).
   - `Strict-Transport-Security (HSTS)`: Enforces HTTPS (`max-age=63072000; includeSubDomains; preload`).
   - `X-Frame-Options: SAMEORIGIN` & `X-Content-Type-Options: nosniff`.
   - `Referrer-Policy: strict-origin-when-cross-origin` & `Permissions-Policy` (disables camera, microphone, geolocation, browsing-topics).
   - `Cross-Origin-Opener-Policy: same-origin-allow-popups` & `poweredByHeader: false` (hides framework fingerprinting).
2. **Zero Client Secrets / Zero Unsafe HTML**:
   - No API keys or `.env` secrets are exposed to the browser (Google Maps uses a privacy-friendly no-API-key embed).
   - Zero `dangerouslySetInnerHTML`, zero `eval()`, and 100% of external `target="_blank"` links include `rel="noopener noreferrer"`.
3. **Patched Runtime**:
   - Runs Next.js `16.4.6` and React `19.3.1` with static prerendering (`○ Static`) across all routes.

---

## 5. Architecture & Performance Rules

- **Zero Logic Inside `return (...)` Blocks**: All `.map()` loops, conditionals, class names, and handlers are computed **before** the `return (...)` statement in every component to keep JSX declarative and eliminate hydration issues.
- **Hydration Safety**: `suppressHydrationWarning` is set on `<html>` and `<body>` (protects against browser extensions), `data-scroll-behavior="smooth"` is set on `<html>`, and dynamic values (`CurrentYear`) synchronize safely after mount.
- **Smooth Scrolling**: No per-frame CPU-repainting CSS background animations or idle `will-change` layer bloat; all scroll-reveal animations respect `prefers-reduced-motion: reduce`.

---

## 6. Commands & Deployment

```bash
# Install dependencies
npm install

# Run local development server (http://localhost:3000)
npm run dev

# Type-check with TypeScript
npx tsc --noEmit

# Run ESLint
npm run lint

# Create optimized production build
npm run build

# Start production server
npm start
```

Recommended hosting: **Vercel** (zero-config Next.js deployment with automatic HTTPS, edge caching, and security header enforcement from `next.config.ts`).

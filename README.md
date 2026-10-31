# SSIS Ranip Website

A responsive school website for Shree Swaminarayan International School, built with Next.js App Router, TypeScript, Tailwind CSS 4 and Lucide icons.

## Getting started

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) while the development server is running.

## Production checks

```bash
npm run lint
npm run build
npm run start
```

The build prerenders the public routes and generates the sitemap and robots file.

## Site structure

- `src/app/` contains the homepage, About, Academics, Gallery, Careers and Contact routes, plus metadata routes.
- `src/components/` contains the shared navigation, footer, contact actions, page intros and homepage sections.
- `src/lib/constants.ts` holds the school’s contact details, admissions and ERP links, navigation, and local image references.
- `public/` contains the school logo and supplied campus photography.

Update school phone numbers, address, email, social links, admissions link and ERP link in `src/lib/constants.ts`. Keep public-facing results, testimonials and event announcements tied to current school-approved material.

## Deployment

Deploy the repository to a Next.js-compatible host such as Vercel or a Node.js server. The canonical site URL is configured as `https://ssisranip.com` in the root metadata, robots and sitemap files; update those values if the production domain changes.

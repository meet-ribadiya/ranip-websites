# SSIS Ranip Website — Audit & Improvement Plan

**Review date:** 22 November 2026  
**Scope:** Current workspace snapshot of the Next.js App Router site, including routes, shared UI, content data, styling, metadata, configuration, and project documentation.

This is a source review. I did not change application code, execute the site, or run lint/build checks. Findings are based on behavior visible in the source and the installed Next.js guidance. Existing workspace changes were present during review; findings describe the current files as they exist now.

Per the request, repeated image use is intentional and is not listed as an issue. Form validation is also excluded. The career form's file handling and the contact forms' submission feedback are included because they affect whether users can complete the visible workflow, independently of validation.

## Executive summary

The site has a clear school identity, a useful set of public routes, centralized contact details, a custom responsive navigation, and good foundational choices such as strict TypeScript, optimized `next/image` usage, a skip link, reduced-motion CSS, and external-link `rel` attributes. There is no application API, authentication flow, or server-side form receiver in this codebase, so API authorization and account-security findings do not currently apply.

The most important work before production is to correct the global canonical metadata, reduce the production CSP's allowance for inline/evaluated scripts, make loading and collapsed navigation robust for keyboard and no-JavaScript users, and align the CV picker and privacy text with the actual email-client workflows. The recommendations below distinguish confirmed problems from optional polish.

## Confirmed problems

### QA, navigation, forms, and accessibility

#### 1. The initial page loader can cover the site indefinitely when JavaScript does not run

- **File:** `src/components/ui/PageLoader.tsx` (mounted globally by `src/app/layout.tsx`)
- **Problem:** The loader is server-rendered visible and its only dismissal is in a client `useEffect` timer (fade at 1.2 seconds, removal at 1.7 seconds). If JavaScript is disabled, blocked, or has not hydrated, the fixed full-screen navy layer remains over every route. It is also `aria-hidden`, so screen-reader users can reach content hidden visually behind it.
- **Impact:** A site that otherwise renders server HTML can appear broken on slow connections or when scripts fail; visual and assistive-technology experiences disagree.
- **Recommended solution:** Make the page usable before hydration. Render the loader only after hydration or use a CSS/HTML fallback that cannot persist over the content, and avoid a fixed-duration splash when the page is already ready. If a loader remains, expose an appropriate status and ensure it cannot outlive a failed hydration.
- **Priority:** High

#### 2. Closed mobile navigation links remain in the keyboard tab order

- **File:** `src/components/layout/Navbar.tsx` (drawer state around `mobileDrawerStateClass` and the drawer at the end of the component)
- **Problem:** The closed drawer is collapsed with `max-height: 0`, opacity, and `pointer-events: none`. These styles do not remove its links and buttons from sequential keyboard focus.
- **Impact:** Keyboard users can tab to controls that are visually hidden, lose track of focus, or activate an unexpected navigation item. The toggle also lacks an `aria-controls` relationship to a named drawer.
- **Recommended solution:** Remove closed drawer content from the tab order (for example, conditionally render it or use supported `inert`/hidden state), connect the toggle to the drawer with `aria-controls`, and support Escape and sensible focus return when the drawer closes.
- **Priority:** High

#### 3. Collapsed mobile footer groups contain focusable hidden links

- **File:** `src/components/layout/FooterNavGroups.tsx` and `.expand-grid` rules in `src/app/globals.css`
- **Problem:** Footer links remain rendered inside a grid whose row height is animated to zero. `overflow: hidden` clips them visually but does not make them unfocusable or hidden from assistive technology.
- **Impact:** Keyboard users may land on invisible footer links while the group appears closed.
- **Recommended solution:** Make the closed panel semantically and keyboard-inert, provide a stable panel ID and `aria-controls` on its button, and retain the current animation only where it does not expose hidden controls.
- **Priority:** Medium

#### 4. The CV picker does not attach or submit the selected file

- **File:** `src/components/ui/CareerForm.tsx`
- **Problem:** The file input updates only the displayed filename. `handleSubmit` reads text fields and opens a `mailto:` URL; it never reads or attaches `cvFile`. The UI says PDF is expected, but `accept` also permits DOC and DOCX.
- **Impact:** Applicants can select a CV and reasonably believe it will be sent, but the email draft contains no file. The page later asks them to attach a PDF manually, and the accepted formats conflict with that instruction.
- **Recommended solution:** Until a real upload receiver exists, remove the misleading upload picker and explain that applicants should attach the CV in their email client; make accepted formats and instructions agree. When a backend is available, submit the file through a size/type-limited upload flow and show success only after the receiver confirms it.
- **Priority:** Medium

#### 5. Contact form success feedback can claim completion before an email is sent

- **File:** `src/components/ui/ContactForm.tsx` (also relevant to the message in `src/components/ui/CareerForm.tsx`)
- **Problem:** After assigning `window.location.href` to a `mailto:` URL, the component immediately sets `submitted` to true. The browser cannot confirm that an email application opened or that the user sent the draft. The inserted message is not announced as a live status.
- **Impact:** Users may interpret “Thank you” as confirmation that the school received their enquiry, even if no mail application is configured or they abandon the draft.
- **Recommended solution:** Label the action explicitly as “Open email draft,” and say the enquiry is not sent until the user sends it. Use a real submission endpoint when available; then show a success state only after a successful response. Announce state changes accessibly.
- **Priority:** Medium

#### 6. Photo and video dialogs do not manage focus as modal dialogs

- **Files:** `src/components/ui/ImageLightbox.tsx`; `src/components/gallery/VideoGallerySection.tsx`
- **Problem:** Both components set `role="dialog"` and `aria-modal="true"`, and support Escape, but neither moves focus into the dialog, traps focus inside it, makes the background inert, nor restores focus to the opener when closed.
- **Impact:** Keyboard and screen-reader users can continue tabbing through the obscured page; after closing, focus may be lost. This contradicts the modal semantics exposed to assistive technology.
- **Recommended solution:** Use a dialog implementation with correct initial focus, focus containment, background inertness, and focus restoration. Keep Escape and provide a clear dialog heading association.
- **Priority:** Medium

#### 7. The hero carousel can change its CTA while a keyboard user is focused on it

- **File:** `src/components/home/HeroSlider.tsx`
- **Problem:** The slider advances every 6.5 seconds. It pauses on pointer hover and during touch only; it does not pause when keyboard focus enters the slider and has no visible pause/play control. Reduced-motion CSS shortens animations but does not stop the timer. The slide CTA is a plain `<a>` even for internal routes.
- **Impact:** A keyboard user can focus a CTA and have its destination change before activating it. Automatically moving content also creates an accessibility barrier. Internal CTA clicks trigger full document navigations instead of the App Router transition.
- **Recommended solution:** Add an accessible pause/play control, pause on focus and while the user interacts, honor `prefers-reduced-motion` in the autoplay logic, and use `next/link` for internal destinations while retaining normal anchors for external destinations.
- **Priority:** High

#### 8. Contact controls can obscure content on small screens

- **File:** `src/components/ui/FloatingButtons.tsx`
- **Problem:** WhatsApp and Call buttons are fixed above the bottom-right edge on every route, with no safe-area inset and no route/content-aware placement.
- **Impact:** On narrow screens they can cover footer links, form controls, or other content near the viewport edge, and may overlap device home indicators.
- **Recommended solution:** Add safe-area-aware spacing and check small viewport layouts; consider collapsing to one clearly labelled contact control or hiding the scroll-to-top action when it is unavailable.
- **Priority:** Low

### UI, visual consistency, and interaction polish

#### 9. Global font selectors override serif spans inside headings

- **File:** `src/app/globals.css` (global `h1`–`h4` rule followed by `p, a, button, span, li, label`)
- **Problem:** Every `span` is explicitly assigned Poppins after heading elements are assigned Playfair Display. Highlight spans inside serif headings therefore render in the body font, creating inconsistent heading typography across pages.
- **Impact:** The intended editorial serif hierarchy is weakened, especially in mixed-color headings and hero titles.
- **Recommended solution:** Set the body font at the body level and let elements inherit it; style controls or labels only where a distinct font is needed. Avoid globally overriding `span` so heading spans inherit the heading face.
- **Priority:** Medium

#### 10. One statistic has visibly incorrect supporting copy

- **File:** `src/lib/constants.ts` (`ABOUT_STATS`, student-strength item)
- **Problem:** The 3,000+ student-strength statistic uses the sublabel “Earned in 5 Years,” which reads like a mismatched achievement label rather than context for student population.
- **Impact:** This looks like a content error in a high-visibility trust section and can undermine confidence in school facts.
- **Recommended solution:** Replace it with a verified, relevant sublabel (or remove the sublabel) and review all statistics with the school's content owner.
- **Priority:** Medium

#### 11. Long-lived content has no visible review dates or content freshness process

- **Files:** `src/lib/constants.ts` (news and sports achievements); `src/data/gallery/albums.ts`
- **Problem:** News cards use dates without years, and achievement content includes a 2020 result alongside evergreen copy. The site presents this material as current without a published date or archive state.
- **Impact:** Prospective families may read historical results as recent, and stale material reduces trust and search quality.
- **Recommended solution:** Store an explicit event/publication date, show the year, mark older items as archives, and establish a simple review cadence for public announcements and statistics.
- **Priority:** Medium

### Security and privacy

#### 12. Production Content Security Policy permits inline scripts and `eval`

- **File:** `next.config.ts` (`cspHeader`)
- **Problem:** The policy sets `script-src 'self' 'unsafe-inline' 'unsafe-eval'` for all responses. These allowances reduce CSP's ability to contain script injection; `unsafe-eval` is especially broad for a production policy.
- **Impact:** If an injection flaw is introduced in this or an integrated page, the browser policy provides materially less protection.
- **Recommended solution:** Build a production CSP appropriate to the deployed Next.js rendering mode, using a per-request nonce or hashes for required framework scripts and removing `unsafe-eval`/unneeded inline allowance. Keep a development-only policy if local tooling requires weaker settings, and verify the deployed response headers.
- **Priority:** High

#### 13. Privacy policy describes data collection and storage that this site does not implement

- **File:** `src/app/privacy-policy/page.tsx`; actual email-client behavior is in `src/components/ui/ContactForm.tsx` and `src/components/ui/CareerForm.tsx`
- **Problem:** The policy says the site may use session cookies, process career submissions, and keep user information on protected servers. The current forms only build a `mailto:` draft in the visitor's email application; no form receiver, session-cookie code, or storage service appears in the repository. The embedded Google map and remote font/image providers are also third-party requests that should be reflected accurately.
- **Impact:** Visitors receive a misleading account of what information the site collects and where it goes, making consent and privacy expectations unclear.
- **Recommended solution:** Have the school's policy owner update the notice to match actual data flows and third-party embeds. If an application backend is later added, document its actual retention, access, and deletion practices before collecting submissions.
- **Priority:** High

#### 14. No server-side submission controls exist for the visible forms

- **Files:** `src/components/ui/ContactForm.tsx`; `src/components/ui/CareerForm.tsx`
- **Problem:** These are client-only mailto generators, not server submissions. There is no backend endpoint, server-side validation, rate limiting, spam control, upload scanning, or storage policy in this repository.
- **Impact:** The forms cannot provide reliable delivery or secure handling of applicant/contact data. A future receiver would introduce an attack surface that does not exist today.
- **Recommended solution:** For the current version, describe these actions as opening an email draft and avoid implying server receipt. When implementing a receiver, add server-side validation, abuse controls, strict upload limits/type checks, safe handling of personal data, and operational retention controls. Do not treat browser `required` attributes as security controls.
- **Priority:** Medium

### SEO, performance, and metadata

#### 15. The root canonical URL is inherited by non-home routes

- **File:** `src/app/layout.tsx` (`alternates: { canonical: "/" }`)
- **Problem:** The root layout defines the homepage as canonical, while route metadata in About, Academics, Gallery, Careers, Contact, legal pages, and album pages does not override `alternates.canonical`. In the App Router, inherited metadata applies to child routes unless overridden. This causes those pages to identify the homepage as their canonical URL.
- **Impact:** Search engines may consolidate route signals onto the homepage and omit otherwise useful school pages from results.
- **Recommended solution:** Remove the root canonical or set a canonical for each route from its own URL. Generate the album canonical from the album slug and keep the site origin in one shared configuration value.
- **Priority:** High

#### 16. Social previews for all routes reuse homepage metadata

- **File:** `src/app/layout.tsx`; route metadata in `src/app/*/page.tsx` and `src/app/gallery/[albumSlug]/page.tsx`
- **Problem:** The root layout fixes Open Graph and Twitter title, description, and image to the homepage. Child pages set their page title/description but do not provide route-specific social metadata.
- **Impact:** Sharing a contact, admissions, gallery, or album URL can show generic homepage text and imagery, reducing relevance and click-through.
- **Recommended solution:** Add route-specific Open Graph/Twitter metadata, or derive it from each page's title and description. Use the album's title, description, and cover image for album routes.
- **Priority:** Medium

#### 17. Three externally hosted font families add avoidable render-time requests

- **File:** `src/app/layout.tsx`; font stacks in `src/app/globals.css`
- **Problem:** The layout requests Inter, Poppins, and Playfair Display from Google Fonts. Poppins is the primary sans-serif and Inter is only a fallback, so the Inter family is normally redundant; the browser also depends on external stylesheet/font requests before the preferred typefaces are available.
- **Impact:** Extra requests and font variants can delay text rendering and cause layout shifts on slower networks. External font requests also disclose a visit to that provider.
- **Recommended solution:** Keep only the typefaces and weights actually used, and use `next/font` to self-host/optimize them as supported by the installed Next.js version. Recheck the resulting CSP and visual fallback behavior.
- **Priority:** Medium

#### 18. Internal hero actions bypass App Router navigation

- **File:** `src/components/home/HeroSlider.tsx`
- **Problem:** The carousel renders every CTA as a native anchor, including internal paths such as `/academics#courses` and `/gallery#sports`.
- **Impact:** Internal clicks force full-page navigations, discard client state, and miss Next.js link prefetching and client transitions.
- **Recommended solution:** Render `next/link` for internal paths and retain an anchor with safe `rel` for external admission links. This can be addressed alongside the carousel accessibility change above.
- **Priority:** Low

### Code quality and maintainability

#### 19. Project documentation no longer matches the implementation

- **File:** `PROJECT_DOCUMENTATION.md` (also compare `README.md`)
- **Problem:** The developer guide describes local public image assets and says all content lives in `src/lib/constants.ts`, while the current content uses Cloudinary URLs and gallery data is in `src/data/gallery/`. It describes client-side validated forms and claims a production-ready CSP despite the broad script policy. The README also calls the image values local references.
- **Impact:** Developers can follow incorrect asset, content, and security assumptions; inaccurate security claims make review and release decisions less reliable.
- **Recommended solution:** Update the folder map and asset/content ownership, document the actual mailto behavior, and describe the current security posture without claiming protections that have not been verified. Keep README and developer documentation aligned.
- **Priority:** Medium

#### 20. Content configuration is split across a very large constants module and gallery data modules

- **Files:** `src/lib/constants.ts`; `src/data/gallery/albums.ts`; `src/data/gallery/images.ts`
- **Problem:** `constants.ts` holds site settings, navigation, hero content, page intros, news, academics, sports, tours, career content, and homepage content; gallery content is separately modeled in `src/data/gallery/`. This conflicts with the “single source of truth” description and makes ownership boundaries hard to see.
- **Impact:** Large edits increase merge conflicts and make it harder to find, validate, and review content changes as the school adds pages or updates events.
- **Recommended solution:** Split content by domain (site settings, navigation, home, academics, about, gallery) with explicit types and a small shared configuration module. Update the documentation to describe the resulting source of truth accurately.
- **Priority:** Low

#### 21. Hero transition timers are not cleaned up on unmount

- **File:** `src/components/home/HeroSlider.tsx` (`setTimeout` calls in slide changes)
- **Problem:** The interval is cleaned up, but the 550 ms timeouts started by manual and automatic slide transitions are not retained or cleared. A route change during that window can leave a timer attempting to update component state after unmount.
- **Impact:** This is a small lifecycle leak and can produce avoidable state updates during navigation.
- **Recommended solution:** Keep the transition timer in a ref and clear it on unmount, or use a transition lifecycle that does not require unmanaged timers.
- **Priority:** Low

## Optional improvements

These are design and product enhancements rather than confirmed defects.

1. **Create a more editorial admissions landing experience.** Make the primary admissions action persistent and clear, pair it with a short visit/call pathway, and use a restrained utility strip for current admissions status and campus location.
2. **Make the design system easier to maintain.** Move repeated navy/gold values, radii, shadows, and type sizes into a compact token set; define a consistent page width and section spacing scale. The current styling mixes tokens with many one-off hex values.
3. **Strengthen mobile long-page orientation.** The About and Academics section navigators are hidden below the medium breakpoint. Consider a compact sticky in-page selector or mobile table of contents so families can jump between long sections without returning to the top.
4. **Use school-approved structured data.** Add `EducationalOrganization`/`School` JSON-LD with verified name, address, telephone, and official profiles to help search engines interpret the school entity. Keep it generated from the same site settings as the visible contact details.
5. **Add a content publishing workflow.** Even a typed data file plus an owner and review date for news, results, school hours, and fee policies would reduce stale public information.
6. **Set visual QA breakpoints and browser coverage.** Review narrow Android/iPhone widths, large text zoom, landscape orientation, keyboard-only flows, and reduced-motion mode before release. A short screenshot checklist would protect the premium spacing and typography across routes.

## Recommended order

1. Correct canonical metadata and the production CSP.
2. Fix loader behavior, hero autoplay controls, and hidden focusable navigation.
3. Clarify the email-draft flow and remove or replace the nonfunctional CV picker.
4. Align the privacy policy and project documentation with actual data flows.
5. Refine typography and review stale facts/statistics.
6. Apply the optional visual and content-structure improvements as release capacity allows.


# Long-Scroll Portfolio Design

**Goal:** Transform the multi-page portfolio into a single-page long-scroll experience for architects, where content unfolds as the user scrolls.

**Architecture:** A single `page.tsx` stacking full-screen sections vertically — Hero → Studio → Projects (one per project) → Contact. Each section is a reusable component.

## Sections

1. **Hero** — Existing full-screen carousel with adaptive text (mix-blend-difference). No navigation button; scroll is the CTA.
2. **Studio** — Full-screen section with background image, overlay, and intro text about the firm's philosophy.
3. **Projects** — Each project from `projects.ts` renders as a full-screen section (`h-screen`) with cover image, overlay, title, description, metadata (location, year, area, materials tags).
4. **Contact** — Clean light section with a minimal contact form (name, email, message).

## Visual Direction

- Each project section: background image + gradient overlay (black bottom to transparent top), white text.
- Studio section: subtle image background with dark overlay, editorial text.
- Contact section: light background, no image, clean form.
- Smooth scroll with Framer Motion `whileInView` fade-in for text elements.

## Components

- `src/components/projects/ProjectSection.tsx` — Reusable project full-screen section
- `src/components/layout/StudioSection.tsx` — Studio/about section
- `src/components/layout/ContactSection.tsx` — Contact section

## Modified Files

- `src/app/page.tsx` — Stack all sections sequentially

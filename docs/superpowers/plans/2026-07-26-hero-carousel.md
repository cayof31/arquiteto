# Hero Carousel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the static Hero image into an automatic horizontal slider with pagination dots.

**Architecture:** A new client component `HeroCarousel` will manage an array of images and current index, using `framer-motion` for smooth horizontal slide transitions.

**Tech Stack:** Next.js (Client Component), `motion/react` (Framer Motion).

## Global Constraints

- Use Next.js 16+ App Router.
- Must use `motion/react` (Framer Motion).
- Must use `next/image` with proper `priority` and `fill` props.
- Pagination dots must be at the bottom center.

---

### Task 1: Create `HeroCarousel` Component

**Files:**
- Create: `src/components/layout/HeroCarousel.tsx`

- [ ] **Step 1: Create the component structure**

```tsx
"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

interface HeroCarouselProps {
  images: string[];
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image src={images[currentIndex]} alt="Hero" fill className="object-cover" priority />
        </motion.div>
      </AnimatePresence>
      
      {/* Pagination dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-opacity ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/HeroCarousel.tsx
git commit -m "feat: add HeroCarousel component"
```

### Task 2: Integrate `HeroCarousel` in `page.tsx`

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Update `page.tsx`**

```tsx
import Link from 'next/link';
import projects from '../data/projects';
import HeroCarousel from '../components/layout/HeroCarousel';

export default function Home() {
  const hero = projects[0];
  const heroImages = [hero.coverImage, ...hero.gallery.map(g => g.url)];

  return (
    <section className="h-screen relative w-full flex items-end">
      <HeroCarousel images={heroImages} />
      <div className="absolute inset-0 bg-black/30" />

      <div className="pb-12 px-6 md:px-12">
        <h1 className="text-white text-6xl md:text-8xl font-serif">{hero.title}</h1>
        <p className="text-white/90 mt-4 max-w-prose">{hero.description}</p>
        <div className="mt-8">
          <Link href={`/projetos/${hero.slug}`} className="inline-block px-8 py-4 bg-white text-black/90 uppercase text-sm tracking-widest font-semibold hover:bg-zinc-200 transition-colors">Explorar Obra</Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: integrate HeroCarousel into home page"
```

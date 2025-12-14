# Task 13.0: Performance Optimization

<critical>Read the prd.md and techspec.md files in this folder. **If you do not read these files, your task will be invalidated**</critical>

## Overview

Optimize the refreshed home page for performance, focusing on Core Web Vitals. Ensure fast initial load (LCP), responsive interactions (FID/INP), and visual stability (CLS). This task runs in parallel with Task 12.0 (Accessibility Audit).

<requirements>
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms / INP < 200ms
- CLS (Cumulative Layout Shift) < 0.1
- Lazy load images below the fold
- Optimize hero image for fast LCP
- Defer non-critical animations
- Use Next.js Image component with proper sizing
- Depends on Task 11.0 (page assembly)
</requirements>

## Subtasks

- [ ] 13.1 Optimize Hero section for LCP

  - Preload hero background/image if applicable
  - Use priority prop on hero Image components
  - Minimize render-blocking resources

- [ ] 13.2 Implement lazy loading for below-fold images

  - Add loading="lazy" to images below fold
  - Use Next.js Image with lazy loading default
  - Implement blur placeholder for smoother loading

- [ ] 13.3 Prevent CLS with proper image dimensions

  - Define width and height on all images
  - Use aspect-ratio CSS where appropriate
  - Reserve space for lazy-loaded content

- [ ] 13.4 Optimize Framer Motion bundle

  - Verify LazyMotion with domAnimation is used
  - Consider dynamic import for animation features
  - Only animate what's necessary

- [ ] 13.5 Defer non-critical scripts/animations

  - Timeline animations load after initial paint
  - Carousel functionality can be deferred
  - Use Intersection Observer for triggering

- [ ] 13.6 Optimize fonts

  - Verify font preloading in layout
  - Use font-display: swap
  - Limit number of font weights loaded

- [ ] 13.7 Run Lighthouse performance audit

  - Test on mobile and desktop
  - Target Performance score ≥ 90
  - Document any issues found

- [ ] 13.8 Test on low-end devices

  - Test on throttled CPU (4x slowdown)
  - Test on slow 3G network
  - Verify animations don't cause jank

- [ ] 13.9 Implement performance monitoring

  - Add development-only performance logs
  - Consider web-vitals library for monitoring
  - Document baseline metrics

- [ ] 13.10 Fix identified performance issues
  - Address any LCP issues (large images, blocking resources)
  - Fix CLS issues (layout shifts)
  - Optimize any slow interactions

## Implementation Details

Refer to `techspec.md` for:

- Performance metrics targets
- Image optimization patterns
- LazyMotion configuration

### Hero Image Optimization

```tsx
// Preload hero image in layout or page metadata
export const metadata = {
  other: {
    link: [
      { rel: 'preload', href: '/images/hero-bg.webp', as: 'image' }
    ]
  }
}

// Priority loading for hero image
<Image
  src="/images/hero-bg.webp"
  alt="..."
  priority // Load immediately
  sizes="100vw"
  quality={85}
/>
```

### Lazy Loading Pattern

```tsx
// Below-fold images
<Image
  src={imageSrc}
  alt={imageAlt}
  loading="lazy"
  placeholder="blur"
  blurDataURL={blurPlaceholder}
  sizes="(max-width: 768px) 100vw, 33vw"
/>
```

### CLS Prevention

```tsx
// Reserve space with aspect-ratio
<div className="relative aspect-video w-full">
  <Image
    src={src}
    alt={alt}
    fill
    className="object-cover"
  />
</div>

// Or explicit dimensions
<Image
  src={src}
  alt={alt}
  width={800}
  height={450}
/>
```

### Development Performance Logging

```typescript
if (process.env.NODE_ENV === 'development') {
  console.debug('[Performance] LCP candidate loaded', {
    element: 'hero-image',
    timestamp: performance.now(),
  })
}
```

## Success Criteria

- [ ] LCP < 2.5s on mobile and desktop
- [ ] FID < 100ms (or INP < 200ms)
- [ ] CLS < 0.1
- [ ] Lighthouse Performance score ≥ 90
- [ ] All below-fold images lazy loaded
- [ ] Hero section loads quickly (priority images)
- [ ] No layout shifts visible during load
- [ ] Animations smooth on mobile devices
- [ ] Framer Motion bundle optimized with LazyMotion

## Relevant Files

**To Audit/Modify:**

- All home page components in `src/app/(marketing)/components/home/`
- `src/app/(marketing)/page.tsx`
- `src/app/(marketing)/layout.tsx` — For preload links
- `next.config.js` — Image optimization settings

**Reference:**

- `prd.md` — FR19 (optimize assets, lazy-load imagery)
- `techspec.md` — Performance Metrics and Monitoring sections
- `.cursor/rules/performance.mdc` — Performance guidelines

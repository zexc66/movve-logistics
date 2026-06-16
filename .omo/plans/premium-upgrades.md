# MOVVE Logistics - Premium Upgrade Plan

## Status
- ✅ Image integration complete (all 7 pages)
- ✅ Build clean (tsc + vite build pass)
- ⏳ Premium upgrades in progress (direct implementation)

## Premium Features to Implement

### 1. WorldMap Component (`src/components/WorldMap.tsx`)
- SVG world map with animated shipping routes
- 5 routes with dashed lines + moving dots
- 6 port locations with pulse animations
- GSAP-powered animations

### 2. DashboardWidgets Component (`src/components/DashboardWidgets.tsx`)
- 3 animated counters (150+ Countries, 2M+ Shipments, 99.8% On-Time)
- Live shipment ticker (simulated data)
- Counter animation (0 to target)
- Glass-morphism design

### 3. GlassCard Component (`src/components/GlassCard.tsx`)
- Reusable frosted glass wrapper
- Backdrop blur + semi-transparent bg
- Hover effects (lift, glow)
- TypeScript with variant support

### 4. ParticleBackground Component (`src/components/ParticleBackground.tsx`)
- Ambient floating particles
- Mouse-reactive parallax
- Non-intrusive design
- CSS-based (no Canvas)

### 5. GSAP Micro-interactions
- Magnetic button effect
- Hover animations on cards
- Staggered scroll reveals
- Smooth scroll

### 6. Tracking Demo (`src/pages/Tracking.tsx`)
- "Try Demo" button with sample data
- Animated progress bar
- Timeline with checkmarks
- Status updates every 3s
- Route visualization

## Implementation Order
1. Create components (WorldMap, DashboardWidgets, GlassCard, ParticleBackground)
2. Add GSAP hooks (useMagneticHover)
3. Add MagneticButton component
4. Integrate into pages
5. Add tracking demo
6. Build verify

## Files to Create/Edit
- NEW: `src/components/WorldMap.tsx`
- NEW: `src/components/DashboardWidgets.tsx`
- NEW: `src/components/GlassCard.tsx`
- NEW: `src/components/ParticleBackground.tsx`
- NEW: `src/hooks/useMagneticHover.ts`
- NEW: `src/components/MagneticButton.tsx`
- EDIT: `src/pages/Home.tsx` (add map + widgets)
- EDIT: `src/pages/Services.tsx` (add map)
- EDIT: `src/pages/Tracking.tsx` (add demo)
- Possibly: `src/pages/Blog.tsx`, `src/pages/About.tsx` (add glass cards)

## Verification
- `tsc --noEmit` must pass
- `vite build` must pass
- Visual QA in browser
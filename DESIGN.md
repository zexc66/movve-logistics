---
version: alpha
name: MOVVE
description: Precision logistics — authoritative crimson accent, clean navy structure, and geometric clarity that echoes the iconic three-bar "E" mark.
colors:
  primary: "#0A1628"
  secondary: "#5B6E8C"
  tertiary: "#991B1E"
  neutral: "#F7F8FA"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
  surface: "#FFFFFF"
  border: "#E2E6ED"
  muted: "#8E99A9"
typography:
  h1:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  h2:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  h3:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    lineHeight: 1.6
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    lineHeight: 1.5
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 600
    letterSpacing: "0.1em"
    textTransform: uppercase
  stat-number:
    fontFamily: Inter
    fontSize: 2.75rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  full: 9999px
spacing:
  xs: 6px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 56px
  "2xl": 80px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
    padding: 14px
  button-primary-hover:
    backgroundColor: "#7A1518"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
    padding: 14px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.tertiary}"
    rounded: "{rounded.sm}"
    padding: 14px
  button-secondary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
    padding: 14px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 32px
    borderColor: "{colors.border}"
  stat-card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 28px
  nav-link:
    textColor: "{colors.secondary}"
  nav-link-hover:
    textColor: "{colors.tertiary}"
  badge:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 8px
---

## Overview

MOVVE projects precision, speed, and trust. The visual language is anchored by
MOVVE Crimson (#991B1E) — a deep, confident red that demands attention without
aggression. The iconic three-bar "E" from the wordmark echoes throughout the
design as geometric dividers and rhythm elements. Clean navy typography on
open white canvases reinforces the promise: *The Power Of Precision*.

## Colors

- **Primary ({colors.primary}):** Deep navy — body text, headlines, and
  high-emphasis surfaces. Grounds the design with authority.
- **Secondary ({colors.secondary}):** Steel blue — supporting text, captions,
  metadata, and secondary navigation links.
- **Tertiary ({colors.tertiary}):** MOVVE Crimson — the sole interaction
  driver. Buttons, links, highlights, and active states. 8.4:1 contrast on
  white passes WCAG AAA. Use sparingly — one primary action per viewport fold.
- **Neutral ({colors.neutral}):** Off-white page background.
- **Surface ({colors.surface}):** Pure white card and container backgrounds.
- **Border ({colors.border}):** Subtle structural dividers and input outlines.
- **Muted ({colors.muted}):** Low-emphasis metadata, placeholder text, and
  disabled states.

## Typography

Inter for everything — a geometric sans-serif that mirrors the logo's clean
precision. Tight tracking on headlines (-0.03em on h1) evokes the condensed
energy of the MOVVE wordmark. `stat-number` at 2.75rem/700 carries KPIs with
the same weight as the brand name itself.

## Layout

Spacing follows an 8px baseline: `xs` (6px) for tight icon-label pairs,
`sm` (12px) for inline gaps, `md` (20px) for intra-component padding,
`lg` (32px) for inter-component separation, `xl` (56px) for section breaks,
and `2xl` (80px) for hero blocks.

## Shapes

Rounded corners are soft but structured — `sm` (6px) on interactive elements,
`md` (10px) on cards, `lg` (16px) on large containers. `full` (9999px) is
reserved for pill badges. The three-bar motif (echoing the MOVVE "E") appears
as a thin horizontal rule treatment in dividers.

## Components

- `button-primary` is the only high-emphasis action — MOVVE Crimson fill,
  white text. Exactly one per viewport fold.
- `button-secondary` is the outlined companion — transparent with Crimson
  border and text.
- `card` is the default content surface with a faint 1px border.
- `stat-card` carries KPIs: oversized `stat-number` + `label-caps` below.
- `badge` is a neutral pill for service categories and status labels.

## Do's and Don'ts

- **Do** anchor every page with generous whitespace — precision demands
  breathing room.
- **Do** use the three-bar motif sparingly as a brand signature, not a
  decoration.
- **Don't** introduce colors outside the palette. Extend the palette first.
- **Don't** nest component variants. `button-primary-hover` is a sibling.

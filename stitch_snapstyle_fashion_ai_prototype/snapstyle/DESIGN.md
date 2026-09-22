---
name: SnapStyle
colors:
  surface: '#171119'
  surface-dim: '#171119'
  surface-bright: '#3e3740'
  surface-container-lowest: '#120c14'
  surface-container-low: '#1f1921'
  surface-container: '#241d26'
  surface-container-high: '#2e2830'
  surface-container-highest: '#39323b'
  on-surface: '#ebdfea'
  on-surface-variant: '#d1c2d3'
  inverse-surface: '#ebdfea'
  inverse-on-surface: '#352e37'
  outline: '#9a8c9d'
  outline-variant: '#4e4351'
  surface-tint: '#e8b3ff'
  primary: '#e8b3ff'
  on-primary: '#500074'
  primary-container: '#7316a0'
  on-primary-container: '#e1a0ff'
  inverse-primary: '#8a34b6'
  secondary: '#e3b7f5'
  on-secondary: '#442155'
  secondary-container: '#5c386e'
  on-secondary-container: '#d1a6e3'
  tertiary: '#ffb0d0'
  on-tertiary: '#63003d'
  tertiary-container: '#8e0c5a'
  on-tertiary-container: '#ff9ac6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f6d9ff'
  primary-fixed-dim: '#e8b3ff'
  on-primary-fixed: '#310049'
  on-primary-fixed-variant: '#70119c'
  secondary-fixed: '#f6d9ff'
  secondary-fixed-dim: '#e3b7f5'
  on-secondary-fixed: '#2d0a3f'
  on-secondary-fixed-variant: '#5c386e'
  tertiary-fixed: '#ffd8e6'
  tertiary-fixed-dim: '#ffb0d0'
  on-tertiary-fixed: '#3d0024'
  on-tertiary-fixed-variant: '#8a0657'
  background: '#171119'
  on-background: '#ebdfea'
  surface-variant: '#39323b'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies a "Digital Atelier" aesthetic—merging the tactile elegance of high-end fashion editorial with the precision of AI-driven technology. The target audience includes fashion-forward enthusiasts and digital natives who value curation, efficiency, and a premium shopping experience.

The design style is **Editorial Minimalism**. It prioritizes high-quality imagery through generous whitespace, sophisticated typography, and a "quiet luxury" interface. The UI should feel like a high-end magazine that has come to life, utilizing subtle transitions and a refined layout to evoke a sense of calm, curated intelligence.

## Colors
The palette has transitioned to a sophisticated **Dark Mode** foundation, emphasizing a "Content" variant that allows imagery and deep jewel tones to take center stage. The spectrum of purples is now complemented by a rich magenta-berry tertiary tone, maintaining a premium, high-fashion feel.

- **Primary (#A650D2):** A luminous amethyst purple used for the most important actions, headlines, and structural boundaries. It represents the "magic" of the AI integration.
- **Secondary (#8F68A1):** A soft, muted plum used for secondary backgrounds, buttons, and divider elements.
- **Tertiary (#8E0C5A):** A deep, saturated magenta-berry used for specialized accents and refined contrast within the dark interface.
- **Background (#161217):** A deep, ink-like dark tone that serves as the canvas, providing a modern and intentional backdrop for the purple and magenta palette.
- **Neutrals:** Mid-tone grays with subtle violet undertones are used for metadata and deactivated states to maintain a clean hierarchy.

## Typography
The typography system relies on a high-contrast pairing between a classic serif and a contemporary grotesque.

- **Headlines:** Use **Playfair Display**. This serif font provides an editorial, authoritative voice. For large display sizes, use slight negative letter spacing to create a tighter, more "logo-like" feel.
- **Body & UI:** Use **Hanken Grotesk**. This sans-serif is chosen for its clarity and modern technical feel, balancing the traditionalism of the serif.
- **Labels:** Labels and small UI triggers use an uppercase treatment with increased tracking to denote a sense of utility and precision.

## Layout & Spacing
This design system utilizes a **Fluid Grid** model with generous outer margins to frame the content like a gallery piece.

- **Desktop:** 12-column grid with 64px outer margins and 24px gutters. Content should feel spacious; do not be afraid of empty columns to create asymmetrical, high-fashion layouts.
- **Mobile:** 4-column grid with 20px outer margins.
- **Vertical Rhythm:** Spacing is strictly based on an 8px scale. Use larger jumps (e.g., 80px or 120px) between major sections to emphasize the "minimalist" hierarchy.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Ambient Shadows** optimized for a dark environment.

- **Surfaces:** In this dark mode, depth is created by slightly lightening surface containers. Use the secondary plum tones (#8F68A1) for cards and containers sitting on the primary background to create a soft, discernible hierarchy.
- **Shadows:** Shadows are subtle and deep, using low-opacity dark tints with a slight purple hue to maintain the "Content" variant's richness without feeling muddy.
- **Interaction:** Upon hover, elements should lift slightly (transitioning shadow) or provide a subtle scale-up effect (1.02x) to mimic a tactile response.

## Shapes
The shape language is characterized by large, organic curves that contrast with the sharp lines of the serif typography.

- **Standard Elements:** Buttons and small cards use a 0.5rem (8px) radius.
- **Featured Cards:** Product imagery and high-level containers use `rounded-2xl` (1.5rem) or `rounded-3xl` (2rem) to create a friendly, modern "app-like" feel that mimics contemporary hardware design.
- **Pills:** Search bars and tags use a fully rounded (pill) shape to emphasize the "Snap" and "Focus" aspect of the brand.

## Components
- **Buttons:** Primary buttons are solid Amethyst (#A650D2) with white Hanken Grotesk text, always uppercase. Secondary buttons use a plum tonal look.
- **Cards:** Product cards are borderless. The image should occupy 80% of the card height with a `rounded-2xl` clipping mask. Text metadata sits below with a wide margin.
- **Input Fields:** Use a minimal underline or a very light plum fill with no borders. Focus states are indicated by a slightly bolder primary amethyst underline.
- **Chips/Tags:** Small, pill-shaped elements using the magenta-berry tertiary color (#8E0C5A) for "AI-detected" attributes or specialized fashion categories.
- **Visual Cues:** Incorporate "Focus Brackets" (thin amethyst corner lines) around imagery when the AI is "scanning" or "snapping" an outfit to reinforce the tech-driven nature of the product.
- **Icons:** Use thin-stroke (1px to 1.5px) linear icons. Icons should never be filled unless they are in an active state.
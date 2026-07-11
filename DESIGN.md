---
name: Serene Dental Ethos
colors:
  surface: '#f9f9ff'
  surface-dim: '#d0daf0'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d9e3f9'
  on-surface: '#121c2c'
  on-surface-variant: '#444842'
  inverse-surface: '#273141'
  inverse-on-surface: '#ebf1ff'
  outline: '#747871'
  outline-variant: '#c4c8bf'
  surface-tint: '#526350'
  primary: '#50604d'
  on-primary: '#ffffff'
  primary-container: '#687965'
  on-primary-container: '#f7fff1'
  inverse-primary: '#baccb4'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#8a4b2b'
  on-tertiary: '#ffffff'
  tertiary-container: '#a86341'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e8cf'
  primary-fixed-dim: '#baccb4'
  on-primary-fixed: '#111f10'
  on-primary-fixed-variant: '#3b4b39'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb693'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#703718'
  background: '#f9f9ff'
  on-background: '#121c2c'
  surface-variant: '#d9e3f9'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
  element-gap: 32px
---

## Brand & Style

The brand personality is anchored in the concept of "Dental Sanctuary." This design system prioritizes a high-end, boutique clinic experience that replaces clinical anxiety with a calming, organic, and restorative atmosphere. The target audience values holistic wellness, aesthetic precision, and personalized care.

The visual style is a fusion of **Organic Minimalism** and **Editorial Luxury**. It utilizes heavy whitespace, soft tonal layering, and sophisticated typography to mimic a high-end wellness publication. The UI should evoke a sense of quiet confidence and unhurried luxury, moving away from traditional medical tropes toward a spa-like digital environment.

## Colors

The palette is derived from natural, earthy elements to ground the user experience.
- **Primary (Sage Green):** Used for primary actions, success states, and key decorative elements. It represents growth and tranquility.
- **Secondary (Soft Gold):** Used sparingly for high-value highlights, premium service badges, and refined iconography.
- **Tertiary (Terracotta):** An earthy accent for interactive subtle cues or seasonal wellness call-outs.
- **Neutral (Deep Charcoal):** Provides grounding and exceptional legibility for all text content.
- **Surface Strategy:** The UI uses a "Paper-on-Sand" approach. The base background is Alabaster (#FAF9F6), while secondary sections or "well" containers use Soft Sand (#F3EFEA) to create a gentle, low-contrast depth.

## Typography

The typography system relies on the contrast between the authoritative, artistic **Playfair Display** and the highly legible, technical **Manrope**.

- **Headlines:** Use Playfair Display for all headings. Large display sizes should use a tighter letter-spacing to feel like a high-fashion masthead.
- **Body Text:** Manrope is the workhorse for all descriptive content and patient information. Its geometric clarity balances the traditional feel of the serif headings.
- **Labels:** Small labels, such as "Services" or "Next Step," should be set in Manrope Bold with a slight tracking increase and uppercase transform to create a "concierge" feel.

## Layout & Spacing

This design system uses an **Editorial Fluid Grid**. Unlike rigid corporate dashboards, layouts here should feel intentional and asymmetric, mimicking a printed magazine.

- **Vertical Rhythm:** Generous white space is mandatory. Section gaps should be wide (120px+) to allow the brand to "breathe."
- **Asymmetry:** Content should frequently be offset from the center or utilize "asymmetric archway" containers where images are taller on one side.
- **Breakpoints:**
  - **Desktop (1280px+):** 12-column grid with wide 64px margins.
  - **Tablet (768px - 1279px):** 8-column grid with 40px margins.
  - **Mobile (Up to 767px):** 4-column grid with 20px margins. Headlines should scale down significantly to maintain elegance.

## Elevation & Depth

To maintain an organic and soft aesthetic, avoid harsh shadows or heavy borders.
- **Tonal Layering:** Depth is primarily communicated through color shifts (Alabaster vs. Soft Sand). 
- **Ambient Shadows:** When an element needs to float (like a concierge booking card), use "Warm Ambient" shadows: `0px 12px 32px rgba(45, 55, 72, 0.04)`. The shadow color should be a tinted version of the charcoal text, never pure black.
- **Soft Diffusion:** Borders, if used, should be extremely low-contrast (1px solid #E2DED9).

## Shapes

The shape language is "Organic Geometric." 
- **The Archway:** A signature element of the design system. Use a high-radius top-only rounding (e.g., `100px 100px 0 0`) for featured imagery to create a modern architectural feel.
- **Standard Elements:** Buttons and cards use a `0.5rem` (8px) radius to maintain a professional yet approachable soft edge.
- **Pills:** Used exclusively for tags or interactive chips to provide variety.

## Components

- **Buttons:**
  - **Primary:** Sage Green background, white text, no border. Subtle hover lift.
  - **Secondary/Ghost:** Transparent background with a thin Charcoal or Gold border.
- **Concierge Forms:** Input fields should be "Minimalist Underline" style or very light Soft Sand backgrounds. Labels should be small and uppercase above the field.
- **Service Lists (Spa-Menu):** List items should be separated by thin, elegant horizontal rules. The service name appears on the left in Playfair Display, with a brief description in Manrope underneath, and the "Duration/Price" on the right.
- **Cards:** Used for dental treatments or team bios. Cards should have no border, utilizing the Soft Sand (#F3EFEA) background to differentiate from the Alabaster page.
- **Interactive Archways:** Image containers that gently scale or reveal text when hovered, maintaining the signature curved aesthetic.
# Push Record Design System

A complete design system for Push Record video production company. This system provides design tokens, typography, and reusable components for building dark-themed presentation and production tool experiences.

## Design Overview

The design features:
- **Dark theme** with black background and cream-colored headings
- **Teal accent color** (#79b4a0) for highlights
- **SF Pro typography** with multiple weights
- **Glass-morphism effects** with backdrop blur
- **Full-viewport slides** with two-panel layouts
- **Video production components** for editing workflows

## Quick Start

### HTML/CSS Only

```html
<link rel="stylesheet" href="css/design-tokens.css">
<link rel="stylesheet" href="css/typography.css">
<link rel="stylesheet" href="css/components.css">
```

### React

```tsx
import { Header, Hero, Slide, SlideContent, TextPanel } from './components';
```

## File Structure

```
push-record-design-system/
├── css/
│   ├── design-tokens.css   # CSS custom properties
│   ├── typography.css      # Typography styles
│   ├── main.css            # Combined import
│   └── components.css      # Component styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── SceneInfo.tsx       # Section headers
│   ├── Exposition.tsx      # Body text blocks
│   ├── DisplayHeading.tsx  # Large display text
│   ├── QuestionHeader.tsx  # Accent labels
│   ├── Slide.tsx           # Layout containers
│   ├── ImageGrid.tsx       # Image layouts
│   └── index.ts            # Exports
├── design-system.html      # Full component showcase
└── README.md
```

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#000000` | Page background |
| `--text-heading` | `#f5f1e9` | Main headings |
| `--text-body` | `rgba(255,255,255,0.7)` | Body text |
| `--text-muted` | `rgba(255,255,255,0.6)` | Secondary text |
| `--text-accent` | `#79b4a0` | Accent highlights |
| `--border-subtle` | `rgba(255,255,255,0.05)` | Subtle borders |
| `--border-medium` | `rgba(255,255,255,0.2)` | Emphasis borders |

### Extended Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--amber` | `#f59e0b` | Warning states |
| `--green` | `#22c55e` | Success states |
| `--blue` | `#3b82f6` | Info states |
| `--purple` | `#9b87f5` | Audio tracks |
| `--cyan` | `#06b6d4` | Highlights |
| `--orange` | `#f97316` | Hot exposure |
| `--yellow` | `#eab308` | Mid-high exposure |
| `--violet` | `#7c3aed` | Under exposure |

### Typography Scale

| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| `.text-hero` | 160px | Bold | Hero title |
| `.text-display` | 96px | Bold | Large headings |
| `.text-title` | 72px | Bold | Section titles |
| `.text-subtitle-lg` | 28px | Light | Subtitles |
| `.text-body-lg` | 17px | Light | Body content |
| `.text-nav` | 11px | Medium | Navigation |
| `.text-label` | 11px | Medium | Labels |

### Spacing

```css
/* Micro spacing */
--space-px: 1px;
--space-0-5: 2px;
--space-0-75: 3px;

/* 4px scale */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

## Components

### Header

Navigation header with date, title, and company name.

```tsx
<Header
  date="Jan 2026"
  title="Push Record"
  company="Creative"
/>
```

### Hero

Large hero section with tagline, title, and description.

```tsx
<Hero
  tagline="Creative development"
  title="Push Record"
  description={[
    "From concept to final cut.",
    "Professional video production."
  ]}
/>
```

### Video Production Components

- **Timeline** - Video/audio track editor
- **Waveform** - Audio visualization
- **Timecode** - SMPTE timecode display
- **Mixer Channel** - Audio fader with meters
- **Color Wheel** - Color grading control
- **Vectorscope** - Color monitoring
- **Camera Info Panel** - ISO, shutter, aperture
- **False Color** - Exposure monitoring

### Camera Components

- **ISO Display** - Sensitivity indicator
- **Shutter Display** - Shutter angle/speed
- **Light Meter** - Exposure metering
- **Color Temperature** - Kelvin display
- **Lens Info** - Focal length and aperture
- **Storage Card** - Recording media status

## Responsive Breakpoints

```css
/* Documented breakpoints */
--breakpoint-xs: 480px;   /* Mobile small */
--breakpoint-sm: 640px;   /* Mobile large */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop small */
--breakpoint-xl: 1280px;  /* Desktop */
--breakpoint-2xl: 1536px; /* Desktop large */
--breakpoint-3xl: 1920px; /* Full HD */
```

## Browser Support

- Chrome 76+
- Firefox 72+
- Safari 14+
- Edge 79+

Requires support for:
- CSS Custom Properties
- Backdrop Filter
- CSS Grid
- Flexbox

## License

Design system created for Push Record. For internal use only.

# Interact AI Design System

A complete design system extracted from the Interact AI Figma design. This system provides design tokens, typography, and reusable components for building dark-themed presentation and landing page experiences.

## Design Overview

The design features:
- **Dark theme** with black background and cream-colored headings
- **Teal accent color** (#79b4a0) for highlights
- **SF Pro typography** with multiple weights
- **Glass-morphism effects** with backdrop blur
- **Full-viewport slides** with two-panel layouts

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
interact-ai-design-system/
├── css/
│   ├── design-tokens.css   # CSS custom properties
│   ├── typography.css      # Typography styles
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
├── index.html              # Demo page
└── README.md
```

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#000000` | Page background |
| `--color-text-heading` | `#f5f1e9` | Main headings |
| `--color-text-body` | `rgba(255,255,255,0.7)` | Body text |
| `--color-text-muted` | `rgba(255,255,255,0.5)` | Secondary text |
| `--color-accent` | `#79b4a0` | Accent highlights |
| `--color-border` | `rgba(255,255,255,0.05)` | Subtle borders |
| `--color-border-strong` | `rgba(255,255,255,0.2)` | Emphasis borders |

### Typography Scale

| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| `.text-hero` | 198px | Bold | Hero title |
| `.text-display` | 128px | Bold | Large headings |
| `.text-title` | 94px | Bold | Section titles |
| `.text-subtitle` | 34px | Light | Subtitles |
| `.text-body` | 23px | Light | Body content |
| `.text-nav` | 16px | Medium | Navigation |
| `.text-label` | 15px | Medium | Labels |

### Spacing

```css
--space-1: 4px;
--space-2: 8px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-10: 48px;
--space-16: 240px;
```

## Components

### Header

Navigation header with date, title, and company name.

```tsx
<Header
  date="Jan 2026"
  title="Interact AI"
  company="Push Record"
/>
```

### Hero

Large hero section with tagline, title, and description.

```tsx
<Hero
  tagline="Creative development"
  title="Interact AI"
  description={[
    "From static documents to immersive experiences.",
    "A digital retrospective."
  ]}
/>
```

### SceneInfo

Section header with scene number, title, and metadata.

```tsx
<SceneInfo
  sceneNumber="Scene 01"
  title="Web 1.0"
  subtitle="The Read-Only Web"
  meta="1991-2004"
/>
```

### Exposition

Body text block with left border accent.

```tsx
<Exposition>
  <p>Early websites functioned as static documents...</p>
</Exposition>
```

### DisplayHeading

Large display heading with optional accent label.

```tsx
<DisplayHeading
  label="Question 01"
  title="Where does the interface disappear?"
  subtitle="Looking forward to ambient computing..."
/>
```

### Slide Layout

Full-viewport slide with two-panel layout.

```tsx
<Slide backgroundImage="/path/to/image.jpg">
  <Header />
  <SlideContent>
    <TextPanel gap={32}>
      <SceneInfo title="Web 1.0" />
      <Exposition>
        <p>Content here...</p>
      </Exposition>
    </TextPanel>
    <ImagePanel>
      <ImageGrid>
        <ImageGridItem src="/image1.jpg" />
        <ImageGridItem src="/image2.jpg" />
      </ImageGrid>
    </ImagePanel>
  </SlideContent>
</Slide>
```

## Typography Classes

### Text Colors
- `.text-primary` - White
- `.text-heading` - Cream (#f5f1e9)
- `.text-body-color` - 70% white
- `.text-muted` - 50% white
- `.text-accent` - Teal

### Font Weights
- `.font-light` - 300
- `.font-medium` - 500
- `.font-bold` - 700

### Font Families
- `.font-display` - SF Pro
- `.font-body` - SF Pro Text
- `.font-mono` - SF Mono

## Browser Support

- Chrome 76+
- Firefox 72+
- Safari 14+
- Edge 79+

Requires support for:
- CSS Custom Properties
- Backdrop Filter
- CSS Grid

## License

Design system created from Figma design. For internal use only.

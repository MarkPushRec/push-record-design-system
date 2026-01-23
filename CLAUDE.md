# CLAUDE.md - Interact AI Design System

## Project Overview
Push Record video production design system - a comprehensive CSS framework for building professional video production interfaces with dark theme aesthetics.

## Key File Locations

| File | Purpose | Lines |
|------|---------|-------|
| `css/main.css` | Entry point - imports all CSS, reset, responsive | ~300 |
| `css/design-tokens.css` | CSS custom properties (colors, spacing, typography) | ~400 |
| `css/typography.css` | Typography scale and text utilities | ~200 |
| `css/components/_index.css` | Imports all component modules | ~20 |
| `css/components/*.css` | Individual component modules | varies |
| `design-system.html` | Documentation hub | ~200 |
| `examples/*.html` | Component examples by category | varies |

## CSS Architecture

### Import Order (Critical)
```css
@import './design-tokens.css';  /* 1. Tokens first - variables used everywhere */
@import './typography.css';      /* 2. Typography - depends on tokens */
@import './components/_index.css'; /* 3. Components - depends on both */
```

### File Structure
```
css/
├── main.css              # Entry point + reset + responsive
├── design-tokens.css     # All CSS custom properties
├── typography.css        # Text styles and scales
└── components/           # Modular component styles
    ├── _index.css        # Imports all modules
    ├── accessibility.css # Focus states, sr-only
    ├── layout.css        # Page, slide, panels
    ├── slide-components.css # Header, scene, hero, etc.
    ├── utilities.css     # Borders, backgrounds, effects
    ├── data-display.css  # Stat card, progress, badges
    ├── forms.css         # Inputs, buttons, toggles
    ├── feedback.css      # Indicators, tooltips, loaders
    ├── navigation.css    # Tabs, dropdowns, pagination
    ├── content.css       # Cards, avatars, lists, tables
    ├── precision.css     # Knobs, sliders, meters, gauges
    ├── media.css         # Player controls, timecode, waveform
    ├── advanced.css      # Command palette, toolbar, etc.
    └── responsive.css    # Media queries
```

## Naming Conventions

### BEM Pattern
```css
.component { }              /* Block */
.component__element { }     /* Element */
.component--modifier { }    /* Modifier */
```

### Token Prefixes
| Prefix | Category | Example |
|--------|----------|---------|
| `--text-*` | Text colors | `--text-body`, `--text-muted` |
| `--bg-*` | Background colors | `--bg-primary`, `--bg-surface` |
| `--border-*` | Border colors | `--border-subtle`, `--border-accent` |
| `--space-*` | Spacing scale | `--space-1` (4px) to `--space-20` (80px) |
| `--radius-*` | Border radius | `--radius-sm`, `--radius-lg` |
| `--shadow-*` | Box shadows | `--shadow-sm`, `--shadow-lg` |
| `--z-*` | Z-index layers | `--z-base`, `--z-modal` |

### Component Prefixes
- `.ds-*` - Design system documentation components
- `.text-*` - Typography classes
- `.btn` - Buttons
- `.input`, `.select`, `.textarea` - Form controls
- `.card`, `.panel` - Container components

## Component Patterns

### Standard Component Structure
```css
/* Main component */
.component {
  /* layout */
  /* spacing */
  /* colors */
}

/* Child elements */
.component__header { }
.component__body { }
.component__footer { }

/* State modifiers */
.component--active { }
.component--disabled { }
.component--loading { }

/* Size variants */
.component--sm { }
.component--lg { }
```

## Adding New Components

1. **Choose the right module** in `css/components/`:
   - Forms → `forms.css`
   - Navigation → `navigation.css`
   - Data display → `data-display.css`
   - Video/audio specific → `media.css` or `precision.css`

2. **Add section header**:
```css
/* ========================================
   COMPONENT NAME
   ======================================== */
```

3. **Follow BEM naming**: `.component`, `.component__element`, `.component--modifier`

4. **Use design tokens**: Never hardcode colors, spacing, or typography values

5. **Add to examples**: Create or update appropriate `examples/*.html`

## Color System Quick Reference

### Text Colors (WCAG AA)
| Token | Opacity | Use Case |
|-------|---------|----------|
| `--text-primary` | 100% | Logos, primary emphasis |
| `--text-heading` | cream | All headings |
| `--text-emphasis` | 90% | Quotes, emphasized text |
| `--text-body` | 75% | Body text |
| `--text-muted` | 65% | Subtitles |
| `--text-subtle` | 55% | Nav muted, taglines |
| `--text-faint` | 45% | Meta, monospace |
| `--text-ghost` | 35% | Decorative only |
| `--text-accent` | teal | Labels, questions |

### State Colors
| Token | Color | Use Case |
|-------|-------|----------|
| `--state-success` | green | Success states |
| `--state-warning` | amber | Warning states |
| `--state-error` | red | Error states |
| `--state-info` | blue | Info states |

### Primitive Colors
`--white`, `--black`, `--cream`, `--teal`, `--red`, `--amber`, `--green`, `--blue`, `--purple`, `--cyan`, `--orange`, `--yellow`, `--violet`

## Search Strategies

### Finding Components
```bash
# Find by component name
grep -n "\.component-name" css/components/*.css

# Find by section header
grep -n "COMPONENT NAME" css/components/*.css
```

### Finding Tokens
```bash
# Find all color tokens
grep -n "\-\-text-\|--bg-\|--border-" css/design-tokens.css

# Find spacing tokens
grep -n "\-\-space-" css/design-tokens.css
```

## Examples Directory

| File | Contents |
|------|----------|
| `examples/index.html` | Navigation hub |
| `examples/tokens.html` | Colors, Typography, Spacing, Borders, Effects |
| `examples/states.html` | Interactive states, Motion |
| `examples/precision.html` | Precision components (knobs, gauges) |
| `examples/components.html` | Basic UI components |
| `examples/data-viz.html` | Data visualization |
| `examples/video-production.html` | Video production components |
| `examples/audio-color.html` | Audio mixer, color correction |
| `examples/editor-tools.html` | Editor tools, collaboration |

## React Components

React components are in `/components/`. They map directly to CSS classes:

| Component | CSS Class |
|-----------|-----------|
| `Slide` | `.slide`, `.slide__bg`, `.main-content` |
| `Header` | `.header`, `.header__*` |
| `Hero` | `.hero`, `.hero__*` |
| `DisplayHeading` | `.display-heading`, `.display-heading__*` |
| `SceneInfo` | `.scene-info`, `.scene-info__*` |
| `Exposition` | `.exposition`, `.exposition__*` |
| `QuestionHeader` | `.question-header`, `.question-header__*` |
| `ImageGrid` | `.image-grid`, `.image-grid__*` |

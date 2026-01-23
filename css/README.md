# CSS Architecture

## File Hierarchy

```
css/
├── main.css              # Entry point + CSS reset + responsive
├── design-tokens.css     # All CSS custom properties
├── typography.css        # Text styles and type scale
└── components/           # Component styles (modular)
    ├── _index.css        # Imports all component modules
    ├── accessibility.css # Focus states, screen reader utilities
    ├── layout.css        # Page containers, slide layouts
    ├── slide-components.css # Slide-specific components
    ├── utilities.css     # Border, background, effect utilities
    ├── data-display.css  # Stats, progress, badges
    ├── forms.css         # All form controls
    ├── feedback.css      # Indicators, loaders, tooltips
    ├── navigation.css    # Tabs, menus, pagination
    ├── content.css       # Cards, avatars, lists, tables
    ├── precision.css     # Knobs, gauges, meters
    ├── media.css         # Player controls, timecode, waveform
    ├── advanced.css      # Complex components (command palette, etc.)
    └── responsive.css    # Media query overrides
```

## Import Order (Critical)

The import order matters because later files depend on earlier definitions:

```css
/* In main.css */
@import './design-tokens.css';     /* 1. Variables first */
@import './typography.css';         /* 2. Typography uses tokens */
@import './components/_index.css';  /* 3. Components use both */
```

## Token Naming Conventions

### Semantic Prefixes
| Prefix | Purpose | Examples |
|--------|---------|----------|
| `--text-*` | Text colors | `--text-body`, `--text-muted`, `--text-accent` |
| `--bg-*` | Backgrounds | `--bg-primary`, `--bg-surface`, `--bg-elevated` |
| `--border-*` | Borders | `--border-subtle`, `--border-light`, `--border-accent` |
| `--state-*` | States | `--state-hover`, `--state-success`, `--state-error` |

### Scale Prefixes
| Prefix | Scale | Examples |
|--------|-------|----------|
| `--space-*` | 1-20 (4px increments) | `--space-4` = 16px |
| `--radius-*` | none/sm/md/lg/xl/full | `--radius-md` = 8px |
| `--shadow-*` | sm/md/lg | `--shadow-sm` |
| `--blur-*` | sm/md/lg | `--blur-md` = 6px |
| `--z-*` | Semantic layers | `--z-modal`, `--z-dropdown` |

### Typography Tokens
| Prefix | Purpose |
|--------|---------|
| `--font-*` | Font families |
| `--weight-*` | Font weights |
| `--text-*-size` | Font sizes |
| `--text-*-line-height` | Line heights |

## Adding New Components

### 1. Choose the Right Module
- **Forms**: `forms.css` - inputs, buttons, toggles, selects
- **Navigation**: `navigation.css` - tabs, menus, pagination
- **Feedback**: `feedback.css` - tooltips, loaders, indicators
- **Data Display**: `data-display.css` - stats, progress, badges
- **Content**: `content.css` - cards, lists, tables
- **Media**: `media.css` - player controls, timecode
- **Precision**: `precision.css` - knobs, gauges, meters
- **Advanced**: `advanced.css` - complex compound components

### 2. Add Section Header
```css
/* ========================================
   COMPONENT NAME
   ======================================== */
```

### 3. Use BEM Naming
```css
.component { }              /* Block */
.component__element { }     /* Element within block */
.component--modifier { }    /* Variation of block */
```

### 4. Always Use Tokens
```css
/* DO */
.component {
  padding: var(--space-4);
  color: var(--text-body);
  border-radius: var(--radius-md);
}

/* DON'T */
.component {
  padding: 16px;
  color: rgba(255, 255, 255, 0.75);
  border-radius: 8px;
}
```

## Section Organization in Component Files

Each component file follows this structure:

```css
/**
 * File header comment describing contents
 */

/* ========================================
   COMPONENT NAME
   ======================================== */

/**
 * Component description
 * Key properties explained
 */
.component { }

/* Child elements */
.component__child { }

/* Modifiers */
.component--variant { }

/* States */
.component:hover { }
.component--active { }
.component--disabled { }
```

## Media Query Locations

- **Component-specific responsive**: Keep in the component's module
- **Global responsive overrides**: `responsive.css`
- **Main layout responsive**: `main.css` (at bottom)

## Design Token Quick Reference

### Spacing Scale
| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |

### Z-Index Layers
| Token | Value | Use |
|-------|-------|-----|
| `--z-base` | 1 | Background layers |
| `--z-raised` | 10 | Elevated content |
| `--z-dropdown` | 1000 | Dropdowns |
| `--z-sticky` | 1100 | Sticky headers |
| `--z-modal` | 1200 | Modals |
| `--z-tooltip` | 1300 | Tooltips |

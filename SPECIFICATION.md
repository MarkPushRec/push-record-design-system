# Push Record Design System Specification

Complete specification extracted from Figma design. All values are exact pixel measurements.

---

## Color System

### Color Tokens

| Token | Value | Opacity | Usage |
|-------|-------|---------|-------|
| `--color-1` | `#ffffff` | 100% | White - primary text, logos |
| `--color-2` | `#000000` | 100% | Black - backgrounds |
| `--color-3` | `#ffffff` | 30% | Scene numbers, faint labels |
| `--color-4` | `#ffffff` | 50% | Muted nav text |
| `--color-5` | `#f5f1e9` | 100% | Cream - all headings |
| `--color-6` | `#ffffff` | 60% | Subtitles |
| `--color-7` | `#79b4a0` | 100% | Teal - accent color |
| `--color-8` | `#ffffff` | 70% | Body text |
| `--color-9` | `#ffffff` | 40% | Meta text, mono text |
| `--color-10` | `#ffffff` | 85% | Quotes, emphasized text |
| `--accent-9` | `#ffffff` | 50% | Taglines |

### Background Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#000000` | Page background |
| `--bg-surface` | `rgba(255,255,255,0.02)` | Panels |
| `--bg-elevated` | `rgba(0,0,0,0.8)` | Header |
| `--bg-overlay` | `rgba(0,0,0,0.2)` | Overlays |

### Border Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--border-subtle` | `rgba(255,255,255,0.05)` | Panel borders |
| `--border-light` | `rgba(255,255,255,0.1)` | Voice over content |
| `--border-medium` | `rgba(255,255,255,0.2)` | Exposition blocks |
| `--border-accent` | `#79b4a0` | Voice over labels |
| `--border-accent-muted` | `rgba(121,180,160,0.5)` | Question header line |

---

## Typography System

### Font Families

| Family | CSS Value | Usage |
|--------|-----------|-------|
| SF Pro | `'SF Pro', -apple-system, system-ui, sans-serif` | Headings, scene numbers |
| SF Pro Text | `'SF Pro Text', -apple-system, system-ui, sans-serif` | Body, labels, nav |
| SF Mono | `'SF Mono', ui-monospace, monospace` | Meta text, technical |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Light | 300 | Body text, quotes |
| Regular | 400 | Mono text |
| Medium | 500 | Labels, nav, subtitles |
| Bold | 700 | All headings |

---

## Text Styles (Exact Specifications)

### Hero Title
- **Font**: SF Pro Bold
- **Size**: 197.792px
- **Line Height**: 178.013px (0.9)
- **Letter Spacing**: -5.6512px (-0.028em)
- **Color**: `#f5f1e9`
- **Shadow**: `0px 35.32px 70.64px rgba(0,0,0,0.15)`

### Display Heading
- **Font**: SF Pro Bold
- **Size**: 128.261px
- **Line Height**: 141.087px (1.1)
- **Letter Spacing**: -2.8502px (-0.022em)
- **Color**: `#f5f1e9`
- **Shadow**: `0px 35.628px 71.256px rgba(0,0,0,0.15)`

### Section Title
- **Font**: SF Pro Bold
- **Size**: 94px
- **Line Height**: 64.8px (0.69)
- **Letter Spacing**: -2.16px (-0.023em)
- **Color**: `#f5f1e9`

### Tagline
- **Font**: SF Pro Medium
- **Size**: 21.192px
- **Line Height**: 31.788px (1.5)
- **Letter Spacing**: 8.4768px (0.4em)
- **Color**: `rgba(255,255,255,0.5)`
- **Transform**: UPPERCASE
- **Align**: Center

### Subtitle Large
- **Font**: SF Pro Text Light
- **Size**: 33.907px
- **Line Height**: 50.861px (1.5)
- **Letter Spacing**: -0.6499px (-0.019em)
- **Color**: `rgba(255,255,255,0.8)`

### Quote Text
- **Font**: SF Pro Text Light Italic
- **Size**: 24px
- **Line Height**: 32.5px (1.35)
- **Letter Spacing**: 0
- **Color**: `rgba(255,255,255,0.85)`

### Body Large
- **Font**: SF Pro Text Light
- **Size**: 23px
- **Line Height**: 43px (1.87)
- **Letter Spacing**: -0.46px (-0.02em)
- **Color**: `rgba(255,255,255,0.7)`

### Subtitle
- **Font**: SF Pro Text Medium
- **Size**: 21px
- **Line Height**: 28px (1.33)
- **Letter Spacing**: 0
- **Color**: `rgba(255,255,255,0.6)`

### Question Label
- **Font**: SF Pro Text Medium
- **Size**: 19.952px
- **Line Height**: 29.928px (1.5)
- **Letter Spacing**: 4.2754px (0.21em)
- **Color**: `#79b4a0`
- **Transform**: UPPERCASE

### Meta Text
- **Font**: SF Mono Regular
- **Size**: 18px
- **Line Height**: 20px (1.11)
- **Letter Spacing**: 1.4px (0.078em)
- **Color**: `rgba(255,255,255,0.4)`
- **Transform**: UPPERCASE

### Nav Text
- **Font**: SF Pro Text Medium
- **Size**: 16px
- **Line Height**: 16px (1.0)
- **Letter Spacing**: 3.6px (0.225em)
- **Transform**: UPPERCASE

### Label Text
- **Font**: SF Pro Text Medium
- **Size**: 16px
- **Line Height**: 23px (1.44)
- **Letter Spacing**: 0.35px (0.022em)
- **Color**: `#79b4a0`
- **Transform**: UPPERCASE

### Scene Number
- **Font**: SF Pro Medium
- **Size**: 15px
- **Line Height**: 16px (1.07)
- **Letter Spacing**: 4.8px (0.32em)
- **Color**: `rgba(255,255,255,0.3)`
- **Transform**: UPPERCASE

---

## Spacing System

| Token | Value |
|-------|-------|
| `--space-7` | 7px |
| `--space-10` | 10px |
| `--space-12` | 12px |
| `--space-13` | 13px |
| `--space-15` | 15px |
| `--space-21` | 21px |
| `--space-24` | 24px |
| `--space-25` | 25px |
| `--space-30` | 30px |
| `--space-32` | 32px |
| `--space-33` | 33px |
| `--space-38` | 38px |
| `--space-48` | 48px |
| `--space-55` | 55px |
| `--space-65` | 65px |
| `--space-86` | 86px |
| `--space-89` | 89px |
| `--space-240` | 240px |

---

## Border System

| Width | Value | Usage |
|-------|-------|-------|
| Thin | 1px | Panel borders |
| Medium | 2px | Exposition blocks |
| Thick | 3px | Voice over labels |

### Border Applications

| Element | Width | Color |
|---------|-------|-------|
| Header bottom | 1px | `rgba(255,255,255,0.05)` |
| Slide content | 1px | `rgba(255,255,255,0.05)` |
| Text panel right | 1px | `rgba(255,255,255,0.05)` |
| Exposition left | 2px | `rgba(255,255,255,0.2)` |
| Voice over label left | 3px | `#79b4a0` |
| Voice over content left | 1px | `rgba(255,255,255,0.1)` |
| Display subtitle left | 2.85px | `rgba(255,255,255,0.2)` |

---

## Effects

### Backdrop Blur

| Level | Value | Usage |
|-------|-------|-------|
| Small | 4px | Header |
| Medium | 6px | Panels |

### Shadows

| Name | Value | Usage |
|------|-------|-------|
| Text shadow | `0px 35.32px 70.64px rgba(0,0,0,0.15)` | Hero title |
| Text shadow (lg) | `0px 35.628px 71.256px rgba(0,0,0,0.15)` | Display heading |

### Opacity

| Element | Value |
|---------|-------|
| Background image | 33% (0.33) |

---

## Layout System

### Container

| Property | Value |
|----------|-------|
| Max width | 1920px |
| Slide height | 1080px |

### Content Padding

| Property | Value |
|----------|-------|
| Content padding X | 38px |
| Content padding bottom | 65px |
| Header padding top | 24px |
| Header padding bottom | 25px |
| Text panel padding left | 89px |
| Text panel padding right | 86px |
| Text panel padding Y | 48px |

### Panel Widths

| Element | Value |
|---------|-------|
| Image panel | 791.3px |
| Question header line | 85.507px × 1.425px |

---

## Component Specifications

### Header
```
Background: rgba(0,0,0,0.8)
Backdrop blur: 4px
Padding: 24px top, 25px bottom
Border-bottom: 1px solid rgba(255,255,255,0.05)
```

### Slide Content
```
Display: flex
Border: 1px solid rgba(255,255,255,0.05) (left, right, bottom)
Padding: 1px
```

### Text Panel
```
Background: rgba(255,255,255,0.02)
Backdrop blur: 6px
Padding: 48px 86px 48px 89px
Border-right: 1px solid rgba(255,255,255,0.05)
```

### Image Panel
```
Width: 791.3px
Background: rgba(255,255,255,0.02)
Backdrop blur: 6px
```

### Scene Info
```
Gap: 32px between sections
Header gap: 30px
Location gap: 13px
Location padding-top: 21px
```

### Exposition Block
```
Border-left: 2px solid rgba(255,255,255,0.2)
Padding-left: 33px
```

### Voice Over Label
```
Border-left: 3px solid #79b4a0
Padding: 7px 12px 7px 15px
```

### Voice Over Content
```
Border-left: 1px solid rgba(255,255,255,0.1)
Padding-left: 25px
```

### Question Header
```
Gap: 22.8px
Line: 85.507px × 1.425px
Line color: rgba(121,180,160,0.5)
```

### Display Heading Subtitle
```
Border-left: 2.85px solid rgba(255,255,255,0.2)
Padding-left: 34.2px
Width: 957.681px
```

---

## CSS Class Reference

### Typography Classes
- `.text-hero` - Hero title (198px)
- `.text-display` - Display heading (128px)
- `.text-title` - Section title (94px)
- `.text-subtitle-lg` - Large subtitle (34px)
- `.text-quote` - Quote text (24px italic)
- `.text-body-lg` - Body text (23px)
- `.text-tagline` - Tagline (21px uppercase)
- `.text-subtitle` - Subtitle (21px)
- `.text-question-label` - Question label (20px teal)
- `.text-meta` - Meta/mono text (18px)
- `.text-nav` - Nav primary (16px white)
- `.text-nav-muted` - Nav muted (16px 50%)
- `.text-label` - Label text (16px teal)
- `.text-scene` - Scene number (15px 30%)

### Component Classes
- `.slide` - Full-height section
- `.slide__bg` - Background image container
- `.main-content` - Main content wrapper
- `.header` - Navigation header
- `.slide-content` - Two-panel layout
- `.text-panel` - Left text panel
- `.image-panel` - Right image panel
- `.scene-info` - Scene header block
- `.exposition` - Body text block
- `.voice-over` - Voice over block
- `.question-header` - Question label
- `.display-heading` - Large display section
- `.hero` - Hero section

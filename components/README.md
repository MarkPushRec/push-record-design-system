# React Components

## Overview

TypeScript React components that map directly to the CSS design system classes. Components are presentation-focused and require the CSS to be loaded separately.

## Usage

```tsx
// Import CSS (once, at app root)
import 'path/to/css/main.css';

// Import components
import { Header, Hero, Slide } from 'path/to/components';
```

## Component Architecture

### CSS Class Mapping

Each component maps directly to its CSS block class:

| Component | CSS Class | File |
|-----------|-----------|------|
| `Slide` | `.slide` | `Slide.tsx` |
| `SlideContent` | `.slide-content` | `Slide.tsx` |
| `TextPanel` | `.text-panel` | `Slide.tsx` |
| `ImagePanel` | `.image-panel` | `Slide.tsx` |
| `Header` | `.header` | `Header.tsx` |
| `Hero` | `.hero` | `Hero.tsx` |
| `SceneInfo` | `.scene-info` | `SceneInfo.tsx` |
| `Exposition` | `.exposition` | `Exposition.tsx` |
| `DisplayHeading` | `.display-heading` | `DisplayHeading.tsx` |
| `QuestionHeader` | `.question-header` | `QuestionHeader.tsx` |
| `ImageGrid` | `.image-grid` | `ImageGrid.tsx` |

### Component Exports

All components are exported from `index.ts`:

```tsx
// Layout Components
export { Slide, SlideContent, TextPanel, ImagePanel } from './Slide';
export { Header } from './Header';

// Content Components
export { Hero } from './Hero';
export { SceneInfo } from './SceneInfo';
export { Exposition } from './Exposition';
export { DisplayHeading } from './DisplayHeading';
export { QuestionHeader } from './QuestionHeader';
export { ImageGrid, ImageGridItem } from './ImageGrid';
```

## Component Props

### Slide

```tsx
interface SlideProps {
  backgroundImage?: string;  // URL for background image
  children: React.ReactNode;
}
```

### Header

```tsx
interface HeaderProps {
  date?: string;
  title: string;
  company?: string;
}
```

### Hero

```tsx
interface HeroProps {
  tagline?: string;
  title: string;
  description?: React.ReactNode;
}
```

### SceneInfo

```tsx
interface SceneInfoProps {
  sceneNumber: string;    // e.g., "SCENE 01"
  title: string;
  subtitle?: string;
  meta?: string;
}
```

### Exposition

```tsx
interface ExpositionProps {
  children: React.ReactNode;  // Body text content
}
```

### DisplayHeading

```tsx
interface DisplayHeadingProps {
  title: string;
  subtitle?: string;
}
```

### QuestionHeader

```tsx
interface QuestionHeaderProps {
  number: string;  // e.g., "01"
}
```

### ImageGrid

```tsx
interface ImageGridProps {
  children: React.ReactNode;  // ImageGridItem components
}

interface ImageGridItemProps {
  src: string;
  alt: string;
  full?: boolean;  // Spans full width
}
```

## State Variants

CSS provides state variants through modifier classes:

```tsx
// Size variants
<Button className="btn btn--sm" />
<Button className="btn btn--lg" />

// State variants
<Input className="input input--error" />
<Card className="card card--active" />
<Button className="btn btn--loading" />
```

## Composition Patterns

### Standard Slide Layout

```tsx
<Slide backgroundImage="/images/bg.jpg">
  <Header date="January 2024" title="Project Name" company="Company" />
  <SlideContent>
    <TextPanel>
      <SceneInfo sceneNumber="SCENE 01" title="Introduction" />
      <Exposition>
        <p>Body text content here...</p>
      </Exposition>
    </TextPanel>
    <ImagePanel>
      <img src="/images/content.jpg" alt="Description" />
    </ImagePanel>
  </SlideContent>
</Slide>
```

### Hero Slide

```tsx
<Slide>
  <Header title="Project Name" />
  <TextPanel className="text-panel--gap-lg">
    <Hero
      tagline="SUBTITLE"
      title="Main Headline"
      description={<p>Supporting description text</p>}
    />
  </TextPanel>
</Slide>
```

### Image Grid

```tsx
<ImagePanel>
  <ImageGrid>
    <ImageGridItem src="/img1.jpg" alt="Image 1" />
    <ImageGridItem src="/img2.jpg" alt="Image 2" />
    <ImageGridItem src="/img3.jpg" alt="Image 3" full />
  </ImageGrid>
</ImagePanel>
```

## Adding New Components

1. **Create component file**: `ComponentName.tsx`

2. **Follow the pattern**:
```tsx
import React from 'react';

interface ComponentNameProps {
  // props
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  // destructure props
}) => {
  return (
    <div className="component-name">
      {/* content */}
    </div>
  );
};

// Optional: export style reference for documentation
export const componentNameStyles = '.component-name';
```

3. **Export from index.ts**:
```tsx
export { ComponentName } from './ComponentName';
```

4. **Add CSS** in appropriate `css/components/*.css` file

## Deprecated Exports

The `allStyles` export is deprecated. Import `css/main.css` directly instead:

```tsx
// OLD (deprecated)
import { allStyles } from 'components';
<style>{allStyles}</style>

// NEW
import 'css/main.css';
```

/**
 * Interact AI Design System - Component Exports
 * Import components from this index file
 */

// Layout Components
export { Slide, SlideContent, TextPanel, ImagePanel, slideStyles } from './Slide';
export { Header, headerStyles } from './Header';

// Content Components
export { Hero, heroStyles } from './Hero';
export { SceneInfo, sceneInfoStyles } from './SceneInfo';
export { Exposition, expositionStyles } from './Exposition';
export { DisplayHeading, displayHeadingStyles } from './DisplayHeading';
export { QuestionHeader, questionHeaderStyles } from './QuestionHeader';
export { ImageGrid, ImageGridItem, imageGridStyles } from './ImageGrid';

// All styles combined for easy import
export const allStyles = `
  ${slideStyles}
  ${headerStyles}
  ${heroStyles}
  ${sceneInfoStyles}
  ${expositionStyles}
  ${displayHeadingStyles}
  ${questionHeaderStyles}
  ${imageGridStyles}
`;

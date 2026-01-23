/**
 * Interact AI Design System - Component Exports
 *
 * IMPORTANT: These components require CSS to be loaded separately.
 * Import 'css/main.css' in your app to get all required styles.
 *
 * Example:
 *   import 'interact-ai-design-system/css/main.css';
 *   import { Header, Hero, Slide } from 'interact-ai-design-system/components';
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

/**
 * @deprecated All styles are now in css/main.css
 * Import that file directly instead of using this export.
 *
 * Before:
 *   const styles = allStyles;
 *   <style>{styles}</style>
 *
 * After:
 *   import 'path/to/css/main.css';
 */
export const allStyles = `
/*
 * Styles have been moved to css/main.css for better performance and maintainability.
 * Please import css/main.css directly in your application.
 */
`;

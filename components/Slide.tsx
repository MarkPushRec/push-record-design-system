import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundOpacity?: number;
}

/**
 * Slide Component
 * Full-height section container with optional background image
 *
 * Required CSS: Import 'css/main.css' or use the class names below:
 * - .slide
 * - .slide__bg
 * - .main-content
 */
export const Slide: React.FC<SlideProps> = ({
  children,
  backgroundImage,
  backgroundOpacity = 0.33,
}) => {
  return (
    <section className="slide">
      {backgroundImage && (
        <div className="slide__bg">
          <img
            src={backgroundImage}
            alt=""
            style={{ opacity: backgroundOpacity }}
          />
        </div>
      )}
      <div className="main-content">{children}</div>
    </section>
  );
};

interface SlideContentProps {
  children: React.ReactNode;
}

/**
 * SlideContent Component
 * Two-panel layout for text and images
 *
 * Required CSS: .slide-content
 */
export const SlideContent: React.FC<SlideContentProps> = ({ children }) => {
  return <div className="slide-content">{children}</div>;
};

interface TextPanelProps {
  children: React.ReactNode;
  gap?: 'sm' | 'md' | 'lg';
}

/**
 * TextPanel Component
 * Left panel for text content
 *
 * Required CSS: .text-panel, .text-panel--gap-sm, .text-panel--gap-md, .text-panel--gap-lg
 */
export const TextPanel: React.FC<TextPanelProps> = ({ children, gap = 'md' }) => {
  const gapClass = `text-panel--gap-${gap}`;
  return (
    <div className={`text-panel ${gapClass}`}>
      {children}
    </div>
  );
};

interface ImagePanelProps {
  children?: React.ReactNode;
}

/**
 * ImagePanel Component
 * Right panel for images
 *
 * Required CSS: .image-panel
 */
export const ImagePanel: React.FC<ImagePanelProps> = ({ children }) => {
  return <div className="image-panel">{children}</div>;
};

/**
 * @deprecated Styles are now in css/components.css
 * Import 'css/main.css' instead of using this export
 */
export const slideStyles = `/* Styles moved to css/components.css - import css/main.css */`;

export default Slide;

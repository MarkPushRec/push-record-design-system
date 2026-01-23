import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundOpacity?: number;
}

/**
 * Slide Component
 * Full-height section container with optional background image
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
      <div className="slide__main">{children}</div>
    </section>
  );
};

interface SlideContentProps {
  children: React.ReactNode;
}

/**
 * SlideContent Component
 * Two-panel layout for text and images
 */
export const SlideContent: React.FC<SlideContentProps> = ({ children }) => {
  return <div className="slide-content">{children}</div>;
};

interface TextPanelProps {
  children: React.ReactNode;
  gap?: number;
}

/**
 * TextPanel Component
 * Left panel for text content
 */
export const TextPanel: React.FC<TextPanelProps> = ({ children, gap = 32 }) => {
  return (
    <div className="text-panel" style={{ gap: `${gap}px` }}>
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
 */
export const ImagePanel: React.FC<ImagePanelProps> = ({ children }) => {
  return <div className="image-panel">{children}</div>;
};

export const slideStyles = `
  .slide {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #000000;
    overflow: hidden;
  }

  .slide__bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .slide__bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slide__main {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 38px 65px;
    min-height: 100vh;
    position: relative;
    z-index: 1;
  }

  .slide-content {
    display: flex;
    flex: 1;
    border: 1px solid rgba(255, 255, 255, 0.05);
    min-height: 0;
  }

  .text-panel {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 48px 89px;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    overflow: auto;
  }

  .image-panel {
    width: 40%;
    max-width: 800px;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    overflow: hidden;
  }

  .image-panel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Slide;

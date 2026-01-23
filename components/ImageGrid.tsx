import React from 'react';

interface ImageGridProps {
  children: React.ReactNode;
}

/**
 * ImageGrid Component
 * 2-column grid layout for images
 *
 * Required CSS: Import 'css/main.css' or use the class names below:
 * - .image-grid
 */
export const ImageGrid: React.FC<ImageGridProps> = ({ children }) => {
  return <div className="image-grid">{children}</div>;
};

interface ImageGridItemProps {
  src: string;
  alt?: string;
  fullWidth?: boolean;
}

/**
 * ImageGridItem Component
 * Individual image in the grid
 *
 * Required CSS:
 * - .image-grid__item
 * - .image-grid__item--full (for full-width items)
 */
export const ImageGridItem: React.FC<ImageGridItemProps> = ({
  src,
  alt = '',
  fullWidth = false,
}) => {
  return (
    <div className={`image-grid__item ${fullWidth ? 'image-grid__item--full' : ''}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

/**
 * @deprecated Styles are now in css/components.css
 * Import 'css/main.css' instead of using this export
 */
export const imageGridStyles = `/* Styles moved to css/components.css - import css/main.css */`;

export default ImageGrid;

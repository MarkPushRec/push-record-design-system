import React from 'react';

interface ImageGridProps {
  children: React.ReactNode;
}

/**
 * ImageGrid Component
 * 2-column grid layout for images
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

export const imageGridStyles = `
  .image-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    height: 100%;
  }

  .image-grid__item {
    overflow: hidden;
    background: rgba(255, 255, 255, 0.02);
  }

  .image-grid__item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-grid__item--full {
    grid-column: span 2;
  }
`;

export default ImageGrid;

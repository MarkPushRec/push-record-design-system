import React from 'react';

interface SceneInfoProps {
  sceneNumber?: string;
  title: string;
  subtitle?: string;
  meta?: string;
}

/**
 * SceneInfo Component
 * Displays scene/section header with number, title, and metadata
 *
 * Required CSS: Import 'css/main.css' or use the class names below:
 * - .scene-info
 * - .scene-info__header
 * - .text-scene (for scene number)
 * - .text-title (for title)
 * - .scene-info__location
 * - .text-subtitle (for subtitle)
 * - .text-meta (for meta)
 */
export const SceneInfo: React.FC<SceneInfoProps> = ({
  sceneNumber = '--',
  title,
  subtitle,
  meta = '--',
}) => {
  return (
    <div className="scene-info">
      <div className="scene-info__header">
        <span className="text-scene">{sceneNumber}</span>
        <h2 className="text-title">{title}</h2>
      </div>
      {(subtitle || meta) && (
        <div className="scene-info__location">
          {subtitle && <p className="text-subtitle">{subtitle}</p>}
          <span className="text-meta">{meta}</span>
        </div>
      )}
    </div>
  );
};

/**
 * @deprecated Styles are now in css/components.css
 * Import 'css/main.css' instead of using this export
 */
export const sceneInfoStyles = `/* Styles moved to css/components.css - import css/main.css */`;

export default SceneInfo;

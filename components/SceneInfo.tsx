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
        <span className="scene-info__number">{sceneNumber}</span>
        <h2 className="scene-info__title">{title}</h2>
      </div>
      {(subtitle || meta) && (
        <div className="scene-info__location">
          {subtitle && <p className="scene-info__subtitle">{subtitle}</p>}
          <span className="scene-info__meta">{meta}</span>
        </div>
      )}
    </div>
  );
};

export const sceneInfoStyles = `
  .scene-info {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .scene-info__header {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .scene-info__number {
    font-family: 'SF Pro', -apple-system, sans-serif;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.3);
    line-height: 1.07;
  }

  .scene-info__title {
    font-family: 'SF Pro', -apple-system, sans-serif;
    font-size: 94px;
    font-weight: 700;
    letter-spacing: -0.023em;
    color: #f5f1e9;
    line-height: 0.69;
    margin: 0;
  }

  .scene-info__location {
    display: flex;
    flex-direction: column;
    gap: 13px;
    padding-top: 21px;
  }

  .scene-info__subtitle {
    font-family: 'SF Pro Text', -apple-system, sans-serif;
    font-size: 21px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.33;
    margin: 0;
  }

  .scene-info__meta {
    font-family: 'SF Mono', Monaco, monospace;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.078em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
    line-height: 1.11;
  }
`;

export default SceneInfo;

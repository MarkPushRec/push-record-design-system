import React from 'react';

interface DisplayHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  showLabelLine?: boolean;
}

/**
 * DisplayHeading Component
 * Large display heading with optional label and subtitle
 *
 * Required CSS: Import 'css/main.css' or use the class names below:
 * - .display-heading
 * - .question-header (for label container)
 * - .text-question-label (for label text)
 * - .question-header__line (for decorative line)
 * - .text-display (for title)
 * - .display-heading__subtitle
 * - .text-subtitle-lg (for subtitle text)
 */
export const DisplayHeading: React.FC<DisplayHeadingProps> = ({
  label,
  title,
  subtitle,
  showLabelLine = true,
}) => {
  return (
    <div className="display-heading">
      {label && (
        <div className="question-header">
          <span className="text-question-label">{label}</span>
          {showLabelLine && <div className="question-header__line" />}
        </div>
      )}
      <h2 className="text-display">{title}</h2>
      {subtitle && (
        <p className="display-heading__subtitle text-subtitle-lg text-left">
          {subtitle}
        </p>
      )}
    </div>
  );
};

/**
 * @deprecated Styles are now in css/components.css
 * Import 'css/main.css' instead of using this export
 */
export const displayHeadingStyles = `/* Styles moved to css/components.css - import css/main.css */`;

export default DisplayHeading;

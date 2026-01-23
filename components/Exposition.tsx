import React from 'react';

interface ExpositionProps {
  children: React.ReactNode;
}

/**
 * Exposition Component
 * Text block with left border accent for body content
 *
 * Required CSS: Import 'css/main.css' or use the class names below:
 * - .exposition
 * - .exposition__content
 * - .text-body-lg (for body text styling)
 */
export const Exposition: React.FC<ExpositionProps> = ({ children }) => {
  return (
    <div className="exposition">
      <div className="exposition__content text-body-lg">{children}</div>
    </div>
  );
};

/**
 * @deprecated Styles are now in css/components.css
 * Import 'css/main.css' instead of using this export
 */
export const expositionStyles = `/* Styles moved to css/components.css - import css/main.css */`;

export default Exposition;

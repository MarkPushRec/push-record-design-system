import React from 'react';

interface QuestionHeaderProps {
  label: string;
  showLine?: boolean;
}

/**
 * QuestionHeader Component
 * Accent-colored question label with decorative line
 *
 * Required CSS: Import 'css/main.css' or use the class names below:
 * - .question-header
 * - .text-question-label
 * - .question-header__line
 */
export const QuestionHeader: React.FC<QuestionHeaderProps> = ({
  label,
  showLine = true,
}) => {
  return (
    <div className="question-header">
      <span className="text-question-label">{label}</span>
      {showLine && <div className="question-header__line" />}
    </div>
  );
};

/**
 * @deprecated Styles are now in css/components.css
 * Import 'css/main.css' instead of using this export
 */
export const questionHeaderStyles = `/* Styles moved to css/components.css - import css/main.css */`;

export default QuestionHeader;

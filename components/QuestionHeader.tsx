import React from 'react';

interface QuestionHeaderProps {
  label: string;
  showLine?: boolean;
}

/**
 * QuestionHeader Component
 * Accent-colored question label with decorative line
 */
export const QuestionHeader: React.FC<QuestionHeaderProps> = ({
  label,
  showLine = true,
}) => {
  return (
    <div className="question-header">
      <span className="question-header__label">{label}</span>
      {showLine && <div className="question-header__line" />}
    </div>
  );
};

export const questionHeaderStyles = `
  .question-header {
    display: flex;
    align-items: center;
    gap: 23px;
  }

  .question-header__label {
    font-family: 'SF Pro Text', -apple-system, sans-serif;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.21em;
    text-transform: uppercase;
    color: #79b4a0;
  }

  .question-header__line {
    height: 1.5px;
    width: 85px;
    background-color: rgba(121, 180, 160, 0.5);
  }
`;

export default QuestionHeader;

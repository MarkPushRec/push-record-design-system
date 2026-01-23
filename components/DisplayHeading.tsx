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
        <div className="display-heading__label-container">
          <span className="display-heading__label">{label}</span>
          {showLabelLine && <div className="display-heading__label-line" />}
        </div>
      )}
      <h2 className="display-heading__title">{title}</h2>
      {subtitle && <p className="display-heading__subtitle">{subtitle}</p>}
    </div>
  );
};

export const displayHeadingStyles = `
  .display-heading {
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
  }

  .display-heading__label-container {
    display: flex;
    align-items: center;
    gap: 23px;
  }

  .display-heading__label {
    font-family: 'SF Pro Text', -apple-system, sans-serif;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.21em;
    text-transform: uppercase;
    color: #79b4a0;
  }

  .display-heading__label-line {
    height: 1.5px;
    width: 85px;
    background-color: rgba(121, 180, 160, 0.5);
  }

  .display-heading__title {
    font-family: 'SF Pro', -apple-system, sans-serif;
    font-size: 128px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.022em;
    color: #f5f1e9;
    text-shadow: 0px 35px 71px rgba(0, 0, 0, 0.15);
    margin: 0;
  }

  .display-heading__subtitle {
    border-left: 3px solid rgba(255, 255, 255, 0.2);
    padding-left: 34px;
    font-family: 'SF Pro Text', -apple-system, sans-serif;
    font-size: 34px;
    font-weight: 300;
    line-height: 1.6;
    letter-spacing: -0.008em;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }
`;

export default DisplayHeading;

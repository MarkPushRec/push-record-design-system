import React from 'react';

interface ExpositionProps {
  children: React.ReactNode;
}

/**
 * Exposition Component
 * Text block with left border accent for body content
 */
export const Exposition: React.FC<ExpositionProps> = ({ children }) => {
  return (
    <div className="exposition">
      <div className="exposition__content">{children}</div>
    </div>
  );
};

export const expositionStyles = `
  .exposition {
    border-left: 2px solid rgba(255, 255, 255, 0.2);
    padding-left: 33px;
  }

  .exposition__content {
    font-family: 'SF Pro Text', -apple-system, sans-serif;
    font-size: 23px;
    font-weight: 300;
    line-height: 1.87;
    letter-spacing: -0.02em;
    color: rgba(255, 255, 255, 0.7);
  }

  .exposition__content p {
    margin: 0;
  }

  .exposition__content p + p {
    margin-top: 1em;
  }

  .exposition__content ul {
    margin: 0;
    padding-left: 35px;
    list-style-type: disc;
  }

  .exposition__content li {
    line-height: 1.87;
  }
`;

export default Exposition;

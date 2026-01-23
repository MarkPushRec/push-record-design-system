import React from 'react';

interface HeaderProps {
  date?: string;
  title?: string;
  company?: string;
}

/**
 * Header Component
 * Sticky navigation header with date, title, and company name
 */
export const Header: React.FC<HeaderProps> = ({
  date = 'Jan 2026',
  title = 'Interact AI',
  company = 'Push Record',
}) => {
  return (
    <header className="header">
      <div className="header__container">
        <span className="header__date">{date}</span>
        <span className="header__title">{title}</span>
        <span className="header__company">{company}</span>
      </div>
    </header>
  );
};

// CSS-in-JS styles (can be imported from design-tokens)
export const headerStyles = `
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0 25px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    width: 100%;
  }

  .header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1920px;
    position: relative;
  }

  .header__date,
  .header__company {
    font-family: 'SF Pro Text', -apple-system, sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.225em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }

  .header__title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'SF Pro Text', -apple-system, sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.225em;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

export default Header;

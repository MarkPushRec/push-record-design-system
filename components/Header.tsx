import React from 'react';

interface HeaderProps {
  date?: string;
  title?: string;
  company?: string;
}

/**
 * Header Component
 * Sticky navigation header with date, title, and company name
 *
 * Required CSS: Import 'css/main.css' or use the class names below:
 * - .header
 * - .header__container
 * - .header__date (uses .text-nav-muted)
 * - .header__title (uses .text-nav)
 * - .header__company (uses .text-nav-muted)
 */
export const Header: React.FC<HeaderProps> = ({
  date = 'Jan 2026',
  title = 'Push Record',
  company = 'Push Record',
}) => {
  return (
    <header className="header">
      <div className="header__container">
        <span className="header__date text-nav-muted">{date}</span>
        <span className="header__title text-nav">{title}</span>
        <span className="header__company text-nav-muted">{company}</span>
      </div>
    </header>
  );
};

/**
 * @deprecated Styles are now in css/components.css
 * Import 'css/main.css' instead of using this export
 */
export const headerStyles = `/* Styles moved to css/components.css - import css/main.css */`;

export default Header;
